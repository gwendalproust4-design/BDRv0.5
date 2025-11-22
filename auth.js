// --- GESTION DE L'AUTHENTIFICATION (auth.js) ---

const USERS_KEY = 'bdr_users'; // Stockage des comptes inscrits (LocalStorage)
const SESSION_KEY = 'bdr_current_user'; // Session active (SessionStorage)

// Récupérer la liste des utilisateurs inscrits
function getUsers() {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
}

// Inscription
function registerUser(username, password) {
    const users = getUsers();
    // Vérifier si le pseudo existe déjà
    if (users.find(u => u.username === username)) {
        return { success: false, message: "Ce pseudo est déjà pris ❌" };
    }
    // Créer le nouvel utilisateur
    users.push({ username, password });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return { success: true, message: "Compte créé ! Connectez-vous ✅" };
}

// Connexion Classique
function loginUser(username, password) {
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // On ouvre la session
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
        return { success: true };
    }
    return { success: false, message: "Identifiants incorrects ⛔" };
}

// Connexion Visiteur
function loginVisitor() {
    const visitor = { 
        username: "Visiteur", 
        isVisitor: true 
    };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(visitor));
    return { success: true };
}

// Vérification de sécurité (Gatekeeper)
// Cette fonction vérifie si on a le droit d'être sur la page actuelle
function checkAuth() {
    const currentUser = sessionStorage.getItem(SESSION_KEY);
    const path = window.location.pathname;
    
    // Est-ce qu'on est sur la page de login ?
    const isLoginPage = path.includes('login.html') || path.endsWith('/'); // Gestion racine

    // Cas 1 : Pas connecté et on essaie d'accéder au site -> Oust, retour au login !
    // (On exclut login.html pour ne pas faire de boucle infinie)
    if (!currentUser && !path.includes('login.html')) {
        // Si on est en local ou sur un serveur, il faut gérer le chemin correctement
        // Pour faire simple :
        if (document.title !== "Connexion - Bureau du Rap") {
            window.location.href = 'login.html';
        }
    }
    
    // Cas 2 : Déjà connecté et on retourne sur le login -> On renvoie vers l'accueil
    if (currentUser && path.includes('login.html')) {
        window.location.href = 'index.html';
    }
}

// Déconnexion
function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    window.location.href = 'login.html';
}

// Lancer la vérification à chaque chargement de page
checkAuth();