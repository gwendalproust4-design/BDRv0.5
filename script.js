// --- LOGIQUE DU SITE (script.js) ---

const grid = document.getElementById('rapperGrid');
const searchInput = document.getElementById('searchInput');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const styleSelect = document.getElementById('styleFilter');

// Configuration
const CARDS_PER_LOAD = 12;
let currentList = [];
let currentIndex = 0;
let activeStatus = 'all'; // Statut actif
let activeStyle = 'all';  // Style actif pour le filtre déroulant

// --- OUTILS DE RECHERCHE AVANCÉE ---

// 1. Enlever les accents et mettre en minuscule (ex: "Élite" -> "elite")
function normaliserTexte(texte) {
    return texte
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// 2. Algorithme de Levenshtein (Calcul la distance entre deux mots pour les fautes de frappe)
function levenshtein(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) == a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // Substitution
                    Math.min(
                        matrix[i][j - 1] + 1, // Insertion
                        matrix[i - 1][j] + 1  // Suppression
                    )
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

// --- FONCTIONS D'AFFICHAGE ---

// Mélange aléatoire (Fisher-Yates)
function melangerTableau(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Création de la carte HTML
function creerCarte(rappeur) {
    const classeSpeciale = rappeur.statut ? rappeur.statut : '';
    const lien = rappeur.id ? `artiste.html?id=${rappeur.id}` : '#';

    let certificationsHTML = '';
    if (rappeur.certifications) {
        if (rappeur.certifications.or) certificationsHTML += '<span title="Disque d\'Or" style="margin-right:5px; font-size:1.2rem;">📀</span>';
        if (rappeur.certifications.platine) certificationsHTML += '<span title="Disque de Platine" style="margin-right:5px; font-size:1.2rem;">💿</span>';
        if (rappeur.certifications.diamant) certificationsHTML += '<span title="Disque de Diamant" style="font-size:1.2rem;">💎</span>';
    }
    if (certificationsHTML === '') {
        certificationsHTML = '<span style="opacity:0.5; font-size:0.8rem; font-weight:700; letter-spacing:1px;">🎤 ARTISTE</span>';
    }

    const imgHTML = `<div class="card-image-wrapper"><img src="${rappeur.image}" alt="${rappeur.nom}" class="card-image" loading="lazy" onerror="this.src='https://placehold.co/400x400/1a1a1a/8A2BE2?text=${rappeur.nom.replace(' ','+')}'"></div>`;

    return `
        <a href="${lien}" style="text-decoration:none; color:inherit; display:block;">
            <article class="card ${classeSpeciale}">
                ${imgHTML}
                <div class="card-content">
                    <div class="card-header">
                        <div>
                            <h2 class="card-name">${rappeur.nom}</h2>
                            <span style="font-size:0.8rem; color:#8A2BE2; font-weight:600; text-transform:uppercase; letter-spacing:1px;">${rappeur.style || 'Rap'}</span>
                        </div>
                        <div class="card-certifs">
                            ${certificationsHTML}
                        </div>
                    </div>
                    <p class="card-bio">${rappeur.bio}</p>
                </div>
            </article>
        </a>
    `;
}

// Gestion de l'affichage progressif (Load More)
function initialiserAffichage(liste) {
    if (!grid) return;
    
    currentList = liste;
    currentIndex = 0;
    grid.innerHTML = ''; // On vide tout
    afficherLotSuivant();
}

function afficherLotSuivant() {
    const nextRappeurs = currentList.slice(currentIndex, currentIndex + CARDS_PER_LOAD);
    nextRappeurs.forEach(rappeur => {
        grid.innerHTML += creerCarte(rappeur);
    });
    currentIndex += nextRappeurs.length;
    
    if (loadMoreBtn) {
        // On cache le bouton si tout est affiché
        if (currentIndex >= currentList.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
}

// --- LOGIQUE DE RECHERCHE INTELLIGENTE ---

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const rechercheBrute = e.target.value;
        const recherche = normaliserTexte(rechercheBrute); // "Gazo" -> "gazo"

        // Si la barre est vide, on remet tout (mélangé)
        if (recherche.length === 0) {
            initialiserAffichage(melangerTableau([...dataRappeurs]));
            return;
        }

        const resultats = dataRappeurs.filter(rappeur => {
            const nom = normaliserTexte(rappeur.nom);
            const style = normaliserTexte(rappeur.style || "");
            const ville = normaliserTexte(rappeur.ville || "");

            // 1. Recherche Exacte (Contient le mot)
            // Cherche dans le NOM ou le STYLE ou la VILLE
            if (nom.includes(recherche) || style.includes(recherche) || ville.includes(recherche)) {
                return true;
            }

            // 2. Recherche Approximative (Fuzzy Logic)
            // On active ça seulement si le mot fait plus de 3 lettres pour éviter les faux positifs
            if (recherche.length > 2) {
                // On autorise 2 fautes de frappe max pour le nom
                if (levenshtein(nom, recherche) <= 2) return true;
                // On autorise 1 faute pour le style (ex: "dril" pour "drill")
                if (levenshtein(style, recherche) <= 1) return true;
            }

            return false;
        });

        initialiserAffichage(resultats);
    });
}

// --- GESTION DES FILTRES (BOUTONS & SELECT) ---

// Fonction centrale de filtrage
function appliquerFiltres() {
    let resultats = dataRappeurs;

    // Filtre par Statut (Boutons)
    if (activeStatus !== 'all') {
        if (activeStatus === 'classique') {
            resultats = resultats.filter(r => !r.statut);
        } else {
            resultats = resultats.filter(r => r.statut === activeStatus);
        }
    }

    // Filtre par Style (Liste déroulante)
    if (activeStyle !== 'all') {
        resultats = resultats.filter(r => r.style === activeStyle);
    }

    // Si on affiche "Tout", on mélange pour la découverte
    if (activeStatus === 'all' && activeStyle === 'all') {
        resultats = melangerTableau([...resultats]);
    }
    
    initialiserAffichage(resultats);
}

// Écouteurs Boutons (Légende, Tendance...)
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.id !== 'loadMoreBtn') { // On ignore le bouton "Voir plus"
            document.querySelectorAll('.filter-btn:not(#loadMoreBtn)').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            activeStatus = button.getAttribute('data-filter');
            appliquerFiltres();
        }
    });
});

// Écouteur Liste Déroulante (Styles)
if (styleSelect) {
    styleSelect.addEventListener('change', (e) => {
        activeStyle = e.target.value;
        appliquerFiltres();
    });
}

// Écouteur Bouton Voir Plus
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', afficherLotSuivant);
}

// --- DÉMARRAGE ---
if (typeof dataRappeurs !== 'undefined' && grid) {
    // Au chargement, on affiche tout le monde mélangé
    let listeDemarrage = melangerTableau([...dataRappeurs]);
    initialiserAffichage(listeDemarrage);
}