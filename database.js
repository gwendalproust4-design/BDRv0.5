// --- BASE DE DONNÉES BUREAU DU RAP (database.js) ---
// Date : 22/11/2025

const dataRappeurs = [
    // ==========================================
    // 🏆 LES LÉGENDES
    // ==========================================
    {
        id: "booba",
        nom: "Booba",
        statut: "legende",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/booba.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "3.7M Abonnés",
        bio: "Le Duc. Patron du 92i.",
        bioLongue: "Élie Yaffa, dit Booba. Pionnier du rap français, il a traversé les époques. Il a imposé l'autotune et le rap business en France.",
        albums: [
            { 
                titre: "ULTRA", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/booba_ultra.jpg", 
                tracks: ["GP", "Azerty", "RST", "Bonne journée", "Mona Lisa", "Je t'aime", "5G", "Vue sur la mer", "L'olivier", "VVV", "31", "Ultra", "Dernière fois", "Grain de sable"] 
            },
            { 
                titre: "Trône", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/booba_trône.jpg", 
                tracks: ["Centurion", "Friday", "Drapeau noir", "Trône", "Bouyon", "DKR", "Nougat", "Fleur de saison", "Terrain", "Petite fille", "Ça va aller", "113", "Ridin'", "Éléphant"] 
            },
            { 
                titre: "Temps Mort", annee: "2002", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/booba_temps_mort.jpg", 
                tracks: ["Temps mort", "Ma définition", "Jusqu'ici tout va bien", "Repose en paix", "Le bitume avec une plume", "Animals", "Sans ratures", "Ecoute bien", "Inédit", "Strass et paillettes", "Destinée"] 
            }
        ]
    },
    {
        id: "iam",
        nom: "IAM",
        statut: "legende",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/iam.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "500k Abonnés",
        bio: "Les architectes du rap marseillais.",
        albums: [
            { 
                titre: "L'École du Micro d'Argent", annee: "1997", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/iam_lecole_du_micro_dargent.jpg", 
                tracks: ["L'école du micro d'argent", "Dangereux", "Nés sous la même étoile", "La saga", "Petit frère", "Elle donne son corps avant son nom", "L'empire du côté obscur", "Regarde", "Demain, c'est loin"] 
            },
            { titre: "Ombre est lumière", annee: "1993", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/iam_ombre_est_lumière.jpg", tracks: ["Le feu", "Cosmos", "Vos dieux ont les mains sales", "Le mia", "Je danse le mia"] },
            { titre: "Arts Martiens", annee: "2013", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/iam_arts_martiens.jpg", tracks: ["Spartiate Spirit", "Les raisons de la colère", "Notre dame veille", "Benkei et Minamoto"] }
        ]
    },
    {
        id: "ntm",
        nom: "Suprême NTM",
        statut: "legende",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/suprême_ntm.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "L'énergie brute de la révolte.",
        albums: [
            { titre: "Suprême NTM", annee: "1998", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/suprême_ntm_suprême_ntm.jpg", tracks: ["Intro", "Back dans les bacs", "Laisse pas traîner ton fils", "Ma Benz", "Seine-Saint-Denis Style", "Pose ton gun"] },
            { titre: "Paris sous les bombes", annee: "1995", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/suprême_ntm_paris_sous_les_bombes.jpg", tracks: ["Plus jamais ça", "Tout n'est pas si facile", "La fièvre", "Paris sous les bombes", "Qu'est-ce qu'on attend"] }
        ]
    },
    {
        id: "kaaris",
        nom: "Kaaris",
        statut: "legende",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/kaaris.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "2.1M Abonnés",
        bio: "Le Dozo. Père de la Trap française.",
        albums: [
            { titre: "Or Noir", annee: "2013", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kaaris_or_noir.jpg", tracks: ["Bizon", "Zoo", "Ciroc", "Or noir", "Bouchon de liège", "Dès le départ", "Pas de remède", "Je bibi", "2.7.0"] },
            { titre: "Le Bruit de mon âme", annee: "2015", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kaaris_le_bruit_de_mon_âme.jpg" },
            { titre: "Okou Gnakouri", annee: "2016", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kaaris_okou_gnakouri.jpg" }
        ]
    },
    {
        id: "rohff",
        nom: "Rohff",
        statut: "legende",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/rohff.webp",
        certifications: { or: true, platine: true, diamant: false },
        chiffres: "729k Abonnés",
        bio: "Le Padre du Rap Game.",
        albums: [
            { titre: "Le Code de l'Horreur", annee: "2008", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/rohff_le_code_de_lhorreur.jpg", tracks: ["Rap Game", "J'arrive", "Testament", "Sévère", "Hysteric love", "La grande classe"] },
            { titre: "La Fierté des Nôtres", annee: "2004", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/rohff_la_fierté_des_nôtres.jpg", tracks: ["La fierté des nôtres", "Le son qui tue", "Zone internationale", "94"] }
        ]
    },
    {
        id: "mcsolaar",
        nom: "MC Solaar",
        statut: "legende",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/mc solar.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "300k Abonnés",
        bio: "L'As de Trèfle. Le poète du rap français.",
        albums: [
            { titre: "Prose Combat", annee: "1994", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/mc_solaar_prose_combat.jpg" },
            { titre: "Qui sème le vent récolte le tempo", annee: "1991", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/mc_solaar_qui_sème_le_vent_récolte_le_tempo.jpg" }
        ]
    },
    {
        id: "sexion",
        nom: "Sexion d'Assaut",
        statut: "legende",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/sexion_dassaut.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "1.1M Abonnés",
        bio: "Le groupe qui a marqué une génération.",
        albums: [
            { titre: "L'Apogée", annee: "2012", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sexion_dassaut_lapogée.jpg", tracks: ["Mets pas celle là", "Ma direction", "Disque d'or", "Avant qu'elle parte", "Wati House", "Africain", "Problèmes d'adultes", "J'reste debout", "Balader"] },
            { titre: "L'École des points vitaux", annee: "2010", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sexion_dassaut_lécole_des_points_vitaux.jpg", tracks: ["Casquette à l'envers", "Désolé", "Wati by Night", "J'ai pas les loves", "Changement d'ambiance", "Mon gars sûr"] }
        ]
    },

    // ==========================================
    // 🔥 TENDANCES
    // ==========================================
    {
        id: "gazo",
        nom: "Gazo",
        statut: "tendance",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/gazo.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "4.3M Abonnés",
        bio: "Le chef de la Drill FR.",
        albums: [
            { titre: "KMT", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/gazo_kmt.jpg", tracks: ["BECTE", "BODIES", "LETTRE À UN OPPS", "RAPPEL", "JEUX DANGEREUX", "M.A.L.A", "GRA GRA BOOM", "HENNESSY", "DIE", "BOSS", "CÉLINE 3X", "MOLLAZI", "FLEURS"] },
            { titre: "Drill FR", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/gazo_drill_fr.jpg", tracks: ["Intro", "Haine&Sex", "Kassav", "Tchin 2x", "Parkinson", "A$AP", "Drill FR 5", "Euphon", "Mon cher"] },
            { titre: "La Mélo est Gangx", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/gazo_la_mélo_est_gangx.jpg", tracks: ["200%", "SOBAD", "CARTIER", "NOTRE DAME", "INTERLUDE", "100K", "24/34", "OUTRO"] }
        ]
    },
    {
        id: "tiakola",
        nom: "Tiakola",
        statut: "tendance",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/tiakola.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "3.6M Abonnés",
        bio: "Le prince de la mélo.",
        albums: [
            { titre: "Mélo", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/tiakola_mélo.jpg", tracks: ["1ntro'p", "#TT", "Arsenik", "Parapluie", "La clé", "Mode AV", "Si j'savais", "Meuda", "Gasolina", "Soza", "Riri / No Camera", "M3lo", "Atasanté", "Roro", "Coucher de soleil"] },
            { titre: "BDLM Vol. 1", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/tiakola_bdlm_vol_1.jpg", tracks: ["MANON B", "Y.J", "GRAND PRIX", "RESTE-LA", "PLAISIR NOCIF", "T.I.A", "LA TOUR", "PAPILLON"] }
        ]
    },
    {
        id: "werenoi",
        nom: "Werenoi",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/werenoi.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "2.8M Abonnés",
        bio: "La machine à hits du 93.",
        albums: [
            { titre: "Carré", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/werenoi_carré.jpg", tracks: ["Intro Rolex", "Maison hantée", "Ciao", "Figaro", "Grisaille", "Laboratoire", "Virus", "Tout seul", "L'ancien", "Vroum Vroum", "Satan 2", "Nos labels c'est du papel", "Boussole", "Escorte", "Salaire", "Rude Boy", "Chemin d'or"] },
            { titre: "Pyramide", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/werenoi_pyramide.jpg", tracks: ["Intro", "Pyramide", "Maudit", "Dans un verre", "Location", "Télescope", "La vie de star", "Chaleur", "Je suis en moto", "Matelas", "Les codes", "3x filtré", "Faf", "10.03.2023", "Animal", "Picasso", "Seul"] },
            { titre: "Telegram 2", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/werenoi_telegram_2.jpg", tracks: ["Magot", "Bang", "3x filtré", "Mauvaise", "Dans un verre", "Tu connais", "Bipolaire", "Alpha"] }
        ]
    },
    {
        id: "sdm",
        nom: "SDM",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/sdm.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "1.8M Abonnés",
        bio: "Ocho. La voix tonitruante du 92i.",
        albums: [
            { titre: "À la vie à la mort", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sdm_à_la_vie_à_la_mort.jpg", tracks: ["PLUS RIEN", "CARTIER SANTOS", "TOKA", "JEUX D'ECHECS", "MAINTENANT ÇA VA", "POUR ELLE", "METALLICA", "DANS LA TÊTE", "SCORPION", "TOUT CE QU'IL NOUS RESTE"] },
            { titre: "Liens du 100", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sdm_liens_du_100.jpg", tracks: ["Hier encore", "Mr. Ocho", "Bolide allemand", "Ragnar", "Nwar sur Nwar", "Si tu savais", "Cette année-là", "Fame", "Dans le club", "Franklin Saint", "2sang43", "Redescends", "File de gauche", "Le temps", "Sang40"] },
            { titre: "OCHO (Deluxe)", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sdm_ocho_(deluxe).jpg", tracks: ["Intro", "Yakalelo", "Rousseau", "Titulaires", "Prince de la Calle", "Gâchette", "Appel manqué", "Daddy", "La vie de rêve", "Rentrer", "Keur nwar", "Droit de veto", "Cello", "Van Damme", "T'as peur", "Le bruit des applaudissements", "100-O", "Game Over", "Compte sur moi"] }
        ]
    },
    {
        id: "plk",
        nom: "PLK",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/plk.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "885k Abonnés",
        bio: "Polak. L'efficacité incarnée.",
        albums: [
            { titre: "Enna", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/plk_enna.jpg", tracks: ["Bénef", "On sait jamais", "Les comptes", "Billet d'20", "Dégaine de bandit", "Dans les clips", "C'est mort", "Pourtant", "Mamie", "Alleluia", "Chandon et Moët", "Calme", "La vie c'est marrant", "3 en 1", "Toutes générations", "Au fond d'ma tête", "Pilote", "Terrible"] },
            { titre: "Polak", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/plk_polak.jpg", tracks: ["Intro", "Le sel", "Waow", "Séparés", "250", "Idiots", "Polak", "Go", "Bunkoeur", "Monégasque", "Hier", "Ils nous comprennent pas", "Olcho", "Dingue", "Sans suite"] }
        ]
    },
    {
        id: "jul",
        nom: "Jul",
        statut: "tendance",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/jul.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "7M Abonnés",
        bio: "L'OVNI. Le plus gros vendeur.",
        albums: [
            { titre: "L'OVNI", annee: "2016", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jul_lovni.jpg", tracks: ["On m'appelle l'ovni", "C'est le son de la gratte", "Tchikita", "Je dis rien", "E.T", "Je fais le sourd", "Qui a dit"] },
            { titre: "My World", annee: "2015", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jul_my_world.jpg", tracks: ["En Y", "Wesh alors", "Comme d'hab", "Lova", "Mamasita", "Amnésia", "Dans l'appart", "Pour les vaillants", "Il me faut des billets"] },
            { titre: "La Machine", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jul_la_machine.jpg", tracks: ["Folie", "Italia", "Sousou", "Bande organisée", "Toute la nuit", "Pas de love", "Ça sent bon", "Pour un rien", "Rentrez pas dans ma tête"] }
        ]
    },
    {
        id: "ninho",
        nom: "Ninho",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/ninho.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "12.3M Abonnés",
        bio: "Jefe. Recordman des certifications.",
        albums: [
            { titre: "Jefe", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/ninho_jefe.jpg", tracks: ["Jefe", "VVS", "Vérité", "Arme de poing", "Sky Priority", "OG", "Aïcha", "Mood", "Athéna", "La maison que je voulais"] },
            { titre: "Destin", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/ninho_destin.jpg", tracks: ["Sans peine", "La vie qu'on mène", "Goutte d'eau", "Paris c'est magique", "Jeune Lossa", "Maman ne le sait pas", "Putana", "À découvert", "L'ancien", "Jamais"] },
            { titre: "M.I.L.S 3", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/ninho_mils_3.jpg", tracks: ["M.I.L.S 3", "Lettre à une femme", "Zipette", "Promo", "Filon", "La puerta", "En chien", "Mauvais Djo", "Gros vendeurs"] }
        ]
    },
    {
        id: "hamza",
        nom: "Hamza",
        statut: "tendance",
        style: "Cloud / Aérien",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/hamza.webp",
        certifications: { or: true, platine: true, diamant: false },
        chiffres: "1.8M Abonnés",
        bio: "Sauce God. Le roi du drip.",
        albums: [
            { titre: "Sincèrement", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/hamza_sincèrement.jpg", tracks: ["Introduction", "Free YSL", "Ma réalité", "Au bout de la nuit", "Sincèrement", "Codéine 19", "Sadio", "Tsunami", "Atasanté"] },
            { titre: "Paradise", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/hamza_paradise.jpg", tracks: ["Paradise", "Validé", "HS", "Vibes", "Addiction", "1994", "Goleador", "Minuit 13", "Dale x Love Therapy"] }
        ]
    },
    {
        id: "yame",
        nom: "Yamê",
        statut: "tendance",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/yamê.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "442k Abonnés",
        bio: "La révélation 'Bécane'. Voix unique.",
        albums: [
            { titre: "ELOWI", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/yamê_elowi.jpg", tracks: ["Ayo Mba", "Mon bail", "Call of Valhalla", "Lowkey", "Bahwai", "Déter", "Bécane", "Business", "Quête"] }
        ]
    },
    {
        id: "fave",
        nom: "Favé",
        statut: "tendance",
        style: "Jersey",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/favé.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "1M Abonnés",
        bio: "L'énergie Jersey. Ascension fulgurante.",
        albums: [
            { titre: "Il le fallait", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/favé_il_le_fallait.jpg", tracks: ["Urus", "Flashback", "Mercedes", "Toxic", "Vibes", "Mode avion", "Favé"] }
        ]
    },
    {
        id: "houdi",
        nom: "Houdi",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/houdi.webp",
        chiffres: "121k Abonnés",
        bio: "Le rappeur masqué du 77.",
        albums: [
            { titre: "SUN7", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/houdi_sun7.jpg", tracks: ["Sun7", "Médical", "Woka", "Grünt #54", "Sensation", "Mode", "Dernière ligne droite"] },
            { titre: "La Folie des Grandeurs", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/houdi_la_folie_des_grandeurs.jpg", tracks: ["La folie des grandeurs", "Monde", "Belle chanson", "Mélancolie", "Doute"] }
        ]
    },
    {
        id: "la_mano_19",
        nom: "La Mano 1.9",
        statut: "tendance",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/la_mano_19.webp",
        chiffres: "749k Abonnés",
        bio: "La terreur du 19ème. Énergie brute.",
        albums: [
            { titre: "R.A.T.", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/la_mano_19_rat.jpg", tracks: ["R.A.T.", "Halla", "Trahison", "Cartel", "Zone", "La Mano"] }
        ]
    },
    {
        id: "kerchak",
        nom: "Kerchak",
        statut: "tendance",
        style: "Jersey",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/kerchak.webp",
        chiffres: "743k Abonnés",
        bio: "Le retour de la Jersey en France.",
        albums: [
            { titre: "Confiance", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kerchak_confiance.jpg", tracks: ["Sabor", "Peur", "Jane", "Calme", "Tarzan", "Génération Miracle", "Confiance"] }
        ]
    },
    {
        id: "timal",
        nom: "Timal",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/timal.webp",
        chiffres: "1.4M Abonnés",
        bio: "Trop chaud. Rap agressif.",
        albums: [
            { titre: "Arès", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/timal_arès.jpg", tracks: ["Fuego", "Filtré", "La 13", "Arès", "Je me promène", "Bouteille"] },
            { titre: "Trop Chaud", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/timal_trop_chaud.jpg", tracks: ["Arrivant", "Dans la ville", "Maria", "Du rire aux larmes", "La 9"] }
        ]
    },
    {
        id: "zola",
        nom: "Zola",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/zola.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "170k Abonnés",
        bio: "Attitude rockstar et motos.",
        albums: [
            { titre: "Diamant du Bled", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/zola_diamant_du_bled.jpg", tracks: ["Amber", "Toute la journée", "Cartier Panthère", "Envie7vie", "Finish Him", "Gorgée", "L'info", "Cœur de Ice"] },
            { titre: "Survie", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/zola_survie.jpg", tracks: ["Leurs vies", "Pistou", "Papillon", "Ma jolie", "Wow", "Madame", "Pollos Hermanos", "Sanchez", "Vista", "Bad Bi", "Mauvais choix"] },
            { titre: "Cicatrices", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/zola_cicatrices.jpg", tracks: ["Baby Boy", "Fuckboi", "Mugiwara", "Spiderman", "L1 L2", "Extasy", "Kinshasa", "Astroboy", "Zolabeille", "7.65", "Alloicizolaski", "L", "California Girl", "Cicatrices", "B.A.L"] }
        ]
    },

    // ==========================================
    // 💎 PÉPITES (Estime / Underground)
    // ==========================================
    {
        id: "la_feve",
        nom: "La Fève",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/la_feve.webp",
        chiffres: "301k Abonnés",
        bio: "Le chef de file de la New Wave.",
        albums: [
            { titre: "ERRR", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/la_fève_errr.jpg", tracks: ["BELEK", "OTW", "L'APPEL", "CASTRO", "NO HOOK", "SAOULÉ", "CRENSHAW", "RAT INTERLUDE", "ZAZA", "MAUVAIS PAYEUR", "VOIR AILLEURS", "BOXE INTERLUDE"] },
            { titre: "24", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/la_fève_24.jpg", tracks: ["ZOMBIE", "24", "DJ", "LOYAL", "QUI ?", "RIP KEED", "OUTRO", "7W", "MAUVAIS"] },
            { titre: "KOLAF", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/la_fève_kolaf.jpg", tracks: ["LA FOUDRE", "JEUNE INTERLUDE", "VILAIN", "TATOUE", "LADY D", "KOLAF", "DANS LA PIÈCE", "BELLES SOMMES"] }
        ]
    },
    {
        id: "alphawann",
        nom: "Alpha Wann",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/alpha_wann.webp",
        chiffres: "506k Abonnés",
        bio: "Le Don. La référence technique.",
        albums: [
            { titre: "UMLA", annee: "2018", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=UMLA", tracks: ["Stupéfiant et noir", "Pistolet Rose", "Langage Crypté", "Pour celles", "Olive & Tom", "1500", "Ça va ensemble", "Contrex", "La lumière dans les yeux", "Le piège"] },
            { titre: "don dada mixtape vol 1", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/alpha_wann_don_dada_mixtape_vol_1.jpg", tracks: ["mitsubishi", "philly flingo", "soldat tue soldat", "ny à fond", "san andreas", "dirty", "velux", "t'as capté"] },
            { titre: "Alph Lauren 3", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/alpha_wann_alph_lauren_3.jpg", tracks: ["Paire de Prada", "R5", "Courchevel", "Turban", "Loub", "Shanghaï", "Kim K", "Le jeune de l'année"] }
        ]
    },
    {
        id: "laylow",
        nom: "Laylow",
        statut: "pepite",
        style: "Cloud / Aérien",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/laylow.webp",
        chiffres: "876k Abonnés",
        bio: "Mr Anderson. Visionnaire digital.",
        albums: [
            { titre: "TRINITY", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/laylow_trinity.jpg", tracks: ["Initialisation", "MEGATRON", "TRINITYVILLE", "VAMONOS", "PLUG", "PIRANA", "HILLZ", "AKIRA", "LOGICIEL TRISTE"] },
            { titre: "L'Étrange Histoire de Mr.Anderson", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Mr.Anderson", tracks: ["UN RÊVE ÉTRANGE", "L'HISTOIRE DE MR. ANDERSON", "IIV", "VOIR LE MONDE BRÛLER", "WINDOW SHOPPER PART. 1", "SPECIAL", "LOST FOREST"] },
            { titre: ".RAW-Z", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/laylow_raw-z.jpg", tracks: ["KANYE WEST", "CITY", "MALADIE", "VISA", "AMY", "GOGO", "SWISH", "BOTOX"] }
        ]
    },
    {
        id: "luther",
        nom: "Luther",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/luther.webp",
        chiffres: "245k Abonnés",
        bio: "Le mystère d'Avignon.",
        albums: [
            { titre: "GARÇON", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/luther_garçon.jpg", tracks: ["PK TU M'APL ?", "ALAKAZAM", "BLAKE & MORTIMER", "MA VIE D'AVANT", "LESSGUI", "LE SANG", "TORIEL", "GARÇON"] },
            { titre: "EXIT", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/luther_exit.jpg", tracks: ["INTRO", "ROUGE GORON", "MOSSY COBBLESTONE", "T3", "LOOK", "JOURNAL", "SEUIL", "CHÂTEAU FORT", "USINE", "WATERPROOF"] },
            { titre: "Trame", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/luther_trame.jpg", tracks: ["Plaies", "Mani", "Errance", "Trame", "Slow", "Hiver", "Le ciel est bleu", "Fin"] }
        ]
    },
    {
        id: "h_jeunecrack",
        nom: "H JeuneCrack",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/h_jeunecrack.webp",
        chiffres: "46k Abonnés",
        bio: "Le roi du DIY.",
        albums: [
            { titre: "3ème Cycle", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/h_jeunecrack_3ème_cycle.jpg", tracks: ["La Trinité", "Musée", "3 Meufs", "Vrai Crack", "La Cantine", "L'éther", "Le joueur le plus précieux"] },
            { titre: "MATIÈRE PREMIÈRE", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/h_jeunecrack_matière_première.jpg", tracks: ["Au max", "Mauvais", "Présidentiel flow", "La H", "Encore un matin", "T-Shirt blanc", "P.E.C.", "Cactus"] },
            { titre: "2ème Cycle", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/h_jeunecrack_2ème_cycle.jpg", tracks: ["Introduction", "Onyx", "Donne moi le", "Etoiles", "Cycle", "Tout droit", "Pape du hood", "Fin"] }
        ]
    },
    {
        id: "mairo",
        nom: "Mairo",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/mairo.webp",
        chiffres: "52k Abonnés",
        bio: "La technique suisse.",
        albums: [
            { titre: "omar chappier", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/mairo_omar_chappier.jpg", tracks: ["la mouche", "crack crack", "2 jackets", "nouvelle écriture", "dope sound", "merci bonne journée", "larousse", "pov 2023"] },
            { titre: "Rougemort", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/mairo_rougemort.jpg", tracks: ["Rougemort", "Attentat", "La vigne", "Erythrée", "Kill Bill", "M.A.I.R"] },
            { titre: "95 monde libre", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/mairo_95_monde_libre.jpg", tracks: ["g.o.a.t.", "eritrea", "satan 2", "coupe du monde", "superwak"] }
        ]
    },
    {
        id: "khali",
        nom: "Khali",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/khali.webp",
        chiffres: "68k Abonnés",
        bio: "L'émotion nasillarde.",
        albums: [
            { titre: "LAÏLA", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/khali_laïla.jpg", tracks: ["COULEURS", "D&G", "ME3ZA", "LE MONDE EST À TOI", "FREE", "JAMAIS COMME ILS VONT", "JE FERAI DE MON MIEUX"] },
            { titre: "IL ME RESSEMBLE PAS NON PLUS", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/khali_il_me_ressemble_pas_non_plus.jpg", tracks: ["PEUR ET DÉSIR", "NO PAIN NO GAIN", "UN TRUC ÉTRANGE", "DOULEUR FANTÔME", "LE MONDE EST À TOI 2"] }
        ]
    },
    {
        id: "solalune",
        nom: "So La Lune",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/so_la_lune.webp",
        chiffres: "123k Abonnés",
        bio: "La voix qui divise et fascine.",
        albums: [
            { titre: "Fissure de vie", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/so_la_lune_fissure_de_vie.jpg", tracks: ["Soleil mourant", "Fin heureuse", "Medellín", "Range Ro", "Guérison", "En bas", "Vide", "Dona"] },
            { titre: "L'enfant de la pluie", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=L'enfant", tracks: ["Intro (L'enfant de la pluie)", "Remontada", "99", "Perte de temps", "Au bord du précipice", "Opérationnelle", "Interlude"] },
            { titre: "Tsuki", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/so_la_lune_tsuki.jpg", tracks: ["Tsuki", "Seven", "Rodéo", "Shinobi", "L'aube"] }
        ]
    },
    {
        id: "princewaly",
        nom: "Prince Waly",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/prince_waly.webp",
        chiffres: "52k Abonnés",
        bio: "Le style incarné.",
        albums: [
            { titre: "Moussa", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/prince_waly_moussa.jpg", tracks: ["Balotelli", "Problème", "Avertissement", "Mojo", "Mercutio", "Rottweiler", "Walygator"] },
            { titre: "BO Y Z", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/prince_waly_bo_y_z.jpg", tracks: ["Yacht", "BO Y Z", "Doggy Bag", "Marsellus Wallace", "Plan", "Smoke", "Californie"] },
            { titre: "Junior", annee: "2016", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/prince_waly_junior.jpg", tracks: ["Junior", "Zero", "Soudoyer", "Ginger", "Viseur", "Achille", "Pari"] }
        ]
    },
    {
        id: "benjaminepps",
        nom: "Benjamin Epps",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/benjamin_epps.webp",
        chiffres: "51k Abonnés",
        bio: "La voix de crécelle.",
        albums: [
            { titre: "Fantôme avec chauffeur", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/benjamin_epps_fantôme_avec_chauffeur.jpg", tracks: ["Notorious", "Goom", "J'entends parler de toi", "Matlas", "Dieu bénisse les enfants", "Le plus grand"] },
            { titre: "La grande désillusion", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/benjamin_epps_la_grande_désillusion.jpg", tracks: ["Bienvenue à Bellevue", "La pression", "Intellectuel violent", "Jeune", "Libre", "Marathon", "Tout va bien"] }
        ]
    },
    {
        id: "hugotsr",
        nom: "Hugo TSR",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/hugo_tsr.webp",
        chiffres: "319k Abonnés",
        bio: "Le fantôme du 18ème.",
        albums: [
            { titre: "Tant qu'on est là", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/hugo_tsr_tant_quon_est_là.jpg", tracks: ["Rei", "Exercice", "Iceberg", "Tant qu'on est là", "La ligne verte", "Là-haut", "Autour de moi"] },
            { titre: "Fenêtre sur rue", annee: "2012", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/hugo_tsr_fenêtre_sur_rue.jpg", tracks: ["Point de départ", "Ujis", "Coma artificiel", "Fenêtre sur rue", "La salle d'attente", "Eldorado", "L'habitude de la poisse"] },
            { titre: "Une vie et quelques", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/hugo_tsr_une_vie_et_quelques.jpg", tracks: ["Périmètre", "Senseï", "Des voix résonnent", "Les mains sales", "Coloc à terre", "2.0.2.1", "Oublie-le"] }
        ]
    },
    {
        id: "demiportion",
        nom: "Demi Portion",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/demi_portion.webp",
        chiffres: "98k Abonnés",
        bio: "L'artisan. Rap sincère.",
        albums: [
            { titre: "Poids plume", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/demi_portion_poids_plume.jpg", tracks: ["Poids plume", "1990", "Retour aux sources", "Petit bonhomme", "La bonne école", "Artisan"] },
            { titre: "La bonne école", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/demi_portion_la_bonne_école.jpg", tracks: ["La bonne école", "Petit bonhomme", "Artisan", "Poids plume", "1990", "Retour aux sources"] }
        ]
    },
    {
        id: "souffrance",
        nom: "Souffrance",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/souffrance.webp",
        chiffres: "32k Abonnés",
        bio: "Le kickeur de Montreuil.",
        albums: [
            { titre: "Eau de source", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/souffrance_eau_de_source.jpg", tracks: ["Intro", "Au boulot", "Khalass", "D'où l'on vient", "Matrice", "Ciel gris", "93", "Métro"] },
            { titre: "Tour de magie", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/souffrance_tour_de_magie.jpg", tracks: ["Intro", "Magicien", "Simba", "Banal", "Au pied du mur", "Poussière", "Kandinsky", "Chaque jour"] },
            { titre: "Tranche de vie", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/souffrance_tranche_de_vie.jpg", tracks: ["Intro", "Tranche de vie", "Sur le côté", "Les hommes", "Le temps", "L'addition", "Bruit qui court", "La vue"] }
        ]
    },
    {
        id: "isha",
        nom: "Isha",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/isha.webp",
        chiffres: "3k Abonnés",
        bio: "Le sage.",
        albums: [
            { titre: "Labrador Bleu", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/isha_labrador_bleu.jpg", tracks: ["Intro", "La réincarnation de la queue du diable", "FIFA", "Bouteille de gaz", "Tueur de dragon", "A l'époque", "Maître nageur"] },
            { titre: "La Vie Augmente, Vol. 3", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/isha_la_vie_augmente,_vol_3.jpg", tracks: ["Durag", "Les Magiciens", "Idole", "Magma", "Tradition", "Bad Boy", "La Vie Augmente", "Décorer les murs"] },
            { titre: "La Vie Augmente, Vol. 2", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/isha_la_vie_augmente,_vol_2.jpg", tracks: ["Tosma", "Domam", "L'augmentation", "Rien", "243", "Au grand jamais", "Mp2m", "La maladie"] }
        ]
    },
    {
        id: "limsa",
        nom: "Limsa d'Aulnay",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/limsa_daulnay.webp",
        chiffres: "53k Abonnés",
        bio: "La fluidité.",
        albums: [
            { titre: "Logique, Pt. 2", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/limsa_daulnay_logique,_pt_2.jpg", tracks: ["Seul Two", "4 décembre", "Le Ptit", "ASB", "Duper", "Kany"] },
            { titre: "Logique, Pt. 3", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/limsa_daulnay_logique,_pt_3.jpg", tracks: ["Intro", "Logique", "Jdid", "Le bouchon", "Starting Block", "Comme la lune", "Outro"] },
            { titre: "Bitume Caviar (avec Isha)", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Bitume", tracks: ["Clio 4", "Le plan A", "Inchallah", "A l'étranger", "Tard le soir", "Le chant des cigales", "SR-71", "CR7"] }
        ]
    },
    {
        id: "furax",
        nom: "Furax Barbarossa",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/furax_barbarossa.webp",
        chiffres: "53k Abonnés",
        bio: "L'ogre.",
        albums: [
            { titre: "Caravelle", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/furax_barbarossa_caravelle.jpg", tracks: ["Intro", "Caravelle", "A l'isolement", "Le poids du monde", "L'encre de nos plumes", "Mauvais œil", "L'ogre"] },
            { titre: "À l'isolement", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/furax_barbarossa_à_lisolement.jpg", tracks: ["Intro", "A l'isolement", "Mauvais œil", "J'ai la haine", "Le meilleur des mondes", "C'est pas grave", "Fin de règne"] },
            { titre: "Testa Nera", annee: "2014", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/furax_barbarossa_testa_nera.jpg", tracks: ["Le parloir", "L'exécution", "La machine", "Testa Nera", "Le contenu", "La France", "Les 3 singes", "Le jugement"] }
        ]
    },
    {
        id: "jazzybazz",
        nom: "Jazzy Bazz",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/jazzy_bazz.webp",
        chiffres: "253k Abonnés",
        bio: "L'élégance.",
        albums: [
            { titre: "Memoria", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jazzy_bazz_memoria.jpg", tracks: ["Memoria", "Cœur de ice", "D.ieu", "Panorama", "Albiceleste", "Nouvelles", "Sablier", "Zone 19"] },
            { titre: "Nuit", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jazzy_bazz_nuit.jpg", tracks: ["Crépuscule", "El Presidente", "Eternité", "Leticia", "Trompes de Fallope", "Stalker", "Cinquante-cinq", "Sentiments"] },
            { titre: "P-Town", annee: "2016", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jazzy_bazz_p-town.jpg", tracks: ["P-Town", "Les chemins", "Joker", "Lay Back", "3.14 Boogie", "Le Syndrome", "Visions", "Adrénaline"] }
        ]
    },
    {
        id: "georgio",
        nom: "Georgio",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/georgio.webp",
        bio: "Le rap littéraire et rock.",
        albums: [
            { titre: "Héra", annee: "2016", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/georgio_héra.jpg", tracks: ["L'espoir meurt en dernier", "Du bout de mes doigts", "Héra", "No Future", "Brûle", "Svetlana et Maïakovski", "La terre, je la dévore", "La vue du sang"] },
            { titre: "Sacré", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/georgio_sacré.jpg", tracks: ["Soto", "Près du feu", "Full moon", "Vers le haut", "Danse", "Emotions masquées", "A l'abri", "Parallèle"] },
            { titre: "XX5", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/georgio_xx5.jpg", tracks: ["Hier", "J'en sais rien", "Miroir", "Dans mon élément", "Seul", "Barbara", "Haute", "J'me couche tard"] }
        ]
    },
    {
        id: "zamdane",
        nom: "Zamdane",
        statut: "pepite",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/zamdan.webp",
        bio: "La mélancolie solaire.",
        albums: [
            { titre: "Couleur de ma peine", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/zamdane_couleur_de_ma_peine.jpg", tracks: ["Tout ce qu'il voulait", "Le monde par ma fenêtre", "Incomplet", "Fauve", "Stradivarius", "1,2,3,4", "Naïf", "Boyka"] },
            { titre: "SOLSAD", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/zamdane_solsad.jpg", tracks: ["Le grand cirque", "Mélancolie criminel", "Printemps", "Bobo", "Million", "Loin d'ici", "Poussière", "A l'ammoniaque"] },
            { titre: "Affamé - Saison 2", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/zamdane_affamé_-_saison_2.jpg", tracks: ["Affamé #6", "Affamé #7", "Affamé #8", "Affamé #9", "Affamé #10", "Affamé #11", "Affamé #12", "Affamé #13"] }
        ]
    },
    {
        id: "lujipeka",
        nom: "Lujipeka",
        statut: "pepite",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/lujipeka.webp",
        bio: "L'énergie spontanée.",
        albums: [
            { titre: "Montagnes Russes", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/lujipeka_montagnes_russes.jpg", tracks: ["Poupée russe", "Pas à ma place", "0.6", "L'eclipse", "Jusqu'au bout", "Meme", "Ahou", "L'autre côté"] },
            { titre: "L.U.J.I.", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/lujipeka_luji.jpg", tracks: ["L.U.J.I.", "Meme", "Ahou", "Palace", "L'autre côté", "Bientot", "On ira", "Le sum"] },
            { titre: "P.E.K.A", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/lujipeka_peka.jpg", tracks: ["L.U.J.I.", "Meme", "Ahou", "Palace", "L'autre côté", "Bientot", "On ira", "Le sum"] }
        ]
    },
    {
        id: "jewelusain",
        nom: "Jewel Usain",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/jewel_usain.webp",
        bio: "Le bosseur.",
        albums: [
            { titre: "Où les garçons grandissent", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jewel_usain_où_les_garçons_grandissent.jpg", tracks: ["Intro", "Où les garçons grandissent", "Eleanor", "Bleu marine", "Je resterrai", "Je sais", "Jeanne", "Bâtiment"] },
            { titre: "Mode Difficile", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jewel_usain_mode_difficile.jpg", tracks: ["Intro", "Mode Difficile", "Bruce Wayne", "Skurt", "Carré", "CTRL", "Pablito", "Maladie"] },
            { titre: "La rage au ventre", annee: "2015", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jewel_usain_la_rage_au_ventre.jpg", tracks: ["La rage au ventre", "A la dure", "Faut que je brille", "J'ai mal", "Je suis", "Ma vie", "Mon monde", "Pas le temps"] }
        ]
    },
    {
        id: "scylla",
        nom: "Scylla",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/scylla.webp",
        bio: "La voix grave.",
        albums: [
            { titre: "Pleine Lune", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/scylla_pleine_lune.jpg", tracks: ["Charbon", "Blade Runner", "L'enfant et la mer", "Clash", "Cicatrices", "Solitude", "Le fantôme sous les toits", "Encore"] },
            { titre: "Abysses", annee: "2013", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/scylla_abysses.jpg", tracks: ["Abysses", "Second souffle", "Plume d'ange", "Répondez-moi", "Douleurs muettes", "La tête dans les étoiles", "Le salaire de la peur", "Tout va bien"] },
            { titre: "BX Vice", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/scylla_bx_vice.jpg", tracks: ["BX Vice", "Château de cartes", "Le monde est à mes pieds", "Rien d'spécial", "Grand méchant loup", "Cendres", "Vivre", "Sakura"] }
        ]
    },

    // ==========================================
    // 🎤 CONFIRMÉS (Sans Tag)
    // ==========================================
    {
        id: "nekfeu",
        nom: "Nekfeu",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/nekfeu.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Cyborg. Le technicien parfait.",
        albums: [
            { titre: "Les Étoiles Vagabondes", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/nekfeu_les_étoiles_vagabondes.jpg", tracks: ["Les étoiles vagabondes", "Alunissons", "Cheum", "Takotsubo", "Menteur menteur", "Ciel noir"] },
            { titre: "Cyborg", annee: "2016", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/nekfeu_cyborg.jpg", tracks: ["Humanoïde", "Mauvaise graine", "Squa", "Réalité augmentée", "Avant tu riais", "Esquimaux"] },
            { titre: "Feu", annee: "2015", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/nekfeu_feu.jpg", tracks: ["Martin Eden", "Mon âme", "Le horla", "Nique les clones", "Rêve d'avoir des rêves", "Tempête", "Egérie", "Reuf"] }
        ]
    },
    {
        id: "orelsan",
        nom: "Orelsan",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/orelsan.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le narrateur. Il raconte la vie des gens normaux.",
        albums: [
            { titre: "Civilisation", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/orelsan_civilisation.jpg", tracks: ["Shonen", "La Quête", "Du propre", "Bébéboa", "Rêve mieux", "Seul avec du monde autour"] },
            { titre: "La fête est finie", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/orelsan_la_fête_est_finie.jpg", tracks: ["San", "La fête est finie", "Basique", "Tout va bien", "Défaite de famille", "La lumière"] },
            { titre: "Le chant des sirènes", annee: "2011", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/orelsan_le_chant_des_sirènes.jpg", tracks: ["Raelsan", "Le chant des sirènes", "Plus rien ne m'étonne", "Mauvaise idée", "Double vie", "Finir mal"] }
        ]
    },
    {
        id: "vald",
        nom: "Vald",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/vald.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le génie incompris.",
        albums: [
            { titre: "XEU", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/vald_xeu.jpg", tracks: ["Primitif", "Seum", "DQTP", "Possédé", "Chépakichui", "Désaccordé"] },
            { titre: "Ce monde est cruel", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/vald_ce_monde_est_cruel.jpg", tracks: ["Poche pleine", "NQNTMQMQMB", "Journal pers", "Ce monde est cruel", "Pensionman", "Ma star"] },
            { titre: "Agartha", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/vald_agartha.jpg", tracks: ["Acacia", "Megadeth", "Si j'arrêtais", "Je t'aime", "Totem", "L.D.S"] }
        ]
    },
    {
        id: "dinos",
        nom: "Dinos",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/dinos.webp",
        certifications: { or: true, platine: true, diamant: false },
        bio: "Le Spleen.",
        albums: [
            { titre: "Hiver à Paris", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/dinos_hiver_à_paris.jpg", tracks: ["Rive Droite", "Moins un", "Chrome Hearts", "Modus Vivendi", "Porte de Mesrine", "Simyaci"] },
            { titre: "Stamina, Memento", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/dinos_stamina,_memento.jpg", tracks: ["Diptyque", "Moins un", "Paranoïaque", "Maman m'aime", "Prends soin de toi", "Je Wanda"] },
            { titre: "Taciturne", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/dinos_taciturne.jpg", tracks: ["On meurt bientôt", "XNXX", "OMRI", "N'tiekar", "Oskur", "No Love"] }
        ]
    },
    {
        id: "kobalad",
        nom: "Koba LaD",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/koba_lad.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le style du Bat 7.",
        albums: [
            { titre: "Détail", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/koba_lad_détail.jpg", tracks: ["Encore", "Dans l'avion", "Pas de reine", "Chambre 140", "Feu", "7 sur 7"] },
            { titre: "L'Affranchi", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/koba_lad_laffranchi.jpg", tracks: ["Koba du 7", "Cellophané", "Quadrillé", "Matin", "C'est moi", "Amitiés gâchées"] },
            { titre: "VII", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/koba_lad_vii.jpg", tracks: ["Intro", "Chambre 122", "Rentable", "Train de vie", "J'encaisse", "La C"] }
        ]
    },
    {
        id: "ziak",
        nom: "Ziak",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/ziak.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le mystère de la Drill.",
        albums: [
            { titre: "Akimbo", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/ziak_akimbo.jpg", tracks: ["Parasite", "La kiffance", "Vrai", "Akimbo", "Rhum & machette", "Shonen"] },
            { titre: "Chrome", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/ziak_chrome.jpg", tracks: ["Démon", "Chrome", "Tombé pour elle", "Même pas un grincement", "Seul", "Prière"] }
        ]
    },
    {
        id: "oboy",
        nom: "Oboy",
        style: "Cloud / Aérien",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/oboy.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Mumble rap sombre et sexy.",
        albums: [
            { titre: "OMEGA", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/oboy_omega.jpg", tracks: ["Alpha", "Wu-Tang", "Boy", "R10", "Rien à fêter", "Olympe"] },
            { titre: "No Crari", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/oboy_no_crari.jpg", tracks: ["Louis V", "TDB", "Cruel", "Cosmos", "Air", "YSL"] },
            { titre: "Southside", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/oboy_southside.jpg", tracks: ["Cobra", "Moula", "Nuit", "Veste", "Extra", "Cabri"] }
        ]
    },
    {
        id: "sch",
        nom: "SCH",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/sch.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le S. Voix grave.",
        albums: [
            { titre: "JVLIVS", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sch_jvlivs.jpg", tracks: ["Le code", "VNTM", "Pharmacie", "Otto", "Skydweller", "Facile"] },
            { titre: "JVLIVS II", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sch_jvlivs_ii.jpg", tracks: ["Gibraltar", "Marché noir", "Four", "Crack", "La batte", "Le coup d'avance"] },
            { titre: "A7", annee: "2015", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sch_a7.jpg", tracks: ["John Lennon", "A7", "Solide", "Gomorra", "Mauvaises idées", "Liquide"] }
        ]
    },
    {
        id: "pnl",
        nom: "PNL",
        style: "Cloud / Aérien",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/pnl.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "La Légende QLF.",
        albums: [
            { titre: "Dans la légende", annee: "2016", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/pnl_dans_la_légende.jpg", tracks: ["DA", "Naha", "Dans la légende", "Mira", "J'suis QLF", "La vie est belle"] },
            { titre: "Deux Frères", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/pnl_deux_frères.jpg", tracks: ["Au DD", "Autre monde", "Chang", "Blanka", "91's", "A l'ammoniaque"] },
            { titre: "Le Monde Chico", annee: "2015", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/pnl_le_monde_chico.jpg", tracks: ["Le monde ou rien", "Sur Paname", "Oh lala", "J'suis PNL", "Laisse", "La danse de la pluie"] }
        ]
    },
    {
        id: "damso",
        nom: "Damso",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/damso.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Dems.",
        albums: [
            { titre: "Ipséité", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/damso_ipséité.jpg", tracks: ["Nwaar Is The New Black", "#QuedusaalVie", "Mosaïque solitaire", "Dieu ne ment jamais", "Signaler", "Kietu"] },
            { titre: "Lithopédion", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/damso_lithopédion.jpg", tracks: ["Introduction", "Festival de rêves", "Baltringue", "Julien", "Silence", "Feu de bois"] },
            { titre: "QALF", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/damso_qalf.jpg", tracks: ["MEVTR", "LIFE LIFE", "DEUX TOILES DE MER", "COEUR EN MIETTES", "POUR L'ARGENT", "BPM"] }
        ]
    },
    {
        id: "freeze",
        nom: "Freeze Corleone",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/freeze_corleone.webp",
        certifications: { or: true, platine: true, diamant: false },
        bio: "Le Chen. Rap codifié.",
        albums: [
            { titre: "LMF", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/freeze_corleone_lmf.jpg", tracks: ["Freeze Raël", "Hors ligne", "Scellé Part. 2", "Tarkov", "Rap catéchisme", "Stretch 4"] },
            { titre: "Projet Blue Beam", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/freeze_corleone_projet_blue_beam.jpg", tracks: ["Intro", "Jeremy Lin", "38 Spécial", "Sacrifice de masse", "Sali", "Fentanyl"] },
            { titre: "ADC", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/freeze_corleone_adc.jpg", tracks: ["MW2", "Kpop", "L'homme méthode", "Shavkat", "Amérique du Sud", "Bill Clinton"] }
        ]
    },
    {
        id: "benndoz",
        nom: "Benndo Z",
        statut: "pepite",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/beendo_z.webp",
        chiffres: "50k Abonnés",
        bio: "La cagoule la plus drôle du rap.",
        albums: [
             { titre: "L'Élu", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=L'Élu", tracks: ["Le Papa", "Comics", "L'Élu", "Est-ce que c'est vrai ?", "Booska Z", "Chrome", "EDL 75", "Cas Contact"] }
        ]
    },
    {
        id: "tks2g",
        nom: "TKS 2G",
        statut: "pepite",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/tks_2g.webp",
        chiffres: "20k Abonnés",
        bio: "La relève Shatta/Rap.",
        albums: [
             { titre: "AVTLR", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/tks_2g_avtlr.jpg", tracks: ["AVTLR", "Soum Soum", "Pas ton temps", "Paddle", "Whine", "La Police", "Célibataire Polygame"] }
        ]
    },
    {
        id: "sherifflazone",
        nom: "Sherifflazone",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/sherifflazone.webp",
        chiffres: "15k Abonnés",
        bio: "Pionnier de la DMV Crank.",
        albums: [
             { titre: "DMVP", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sherifflazone_dmvp.jpg", tracks: ["SHINE", "BRICKS", "ERABLE", "LOCAL", "MBELI", "EASTPACK", "CHEATCODE", "AMIRI"] }
        ]
    },
    {
        id: "laioss",
        nom: "Laïoss",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/laïoss.webp",
        chiffres: "10k Abonnés",
        bio: "Underground quality.",
        albums: [
             { titre: "BRISE L'AUTOMNE", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/laïoss_brise_lautomne.jpg", tracks: ["LAÏOSS COURS!", "ZIA", "AMMONITE", "DANS TA MÉMOIRE", "SAUVAGE", "RAVIN", "UN PEU GIVRÉ"] }
        ]
    },
    {
        id: "keeqaid",
        nom: "Keeqaid",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/keeqaid.webp",
        chiffres: "40k Abonnés",
        bio: "L'énergie brute du 93.",
        albums: [
             { titre: "PATRON", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/keeqaid_patron.jpg", tracks: ["Abana", "Arranger", "Bails", "Barzante", "Bâtard", "BÉBÉ", "Bénéfice", "Blablabla"] },
             { titre: "PURIZÉ", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/keeqaid_purizé.jpg", tracks: ["Pur", "Mélange", "Chimie", "Dose", "Qualité", "Client", "Four", "Bénéfice"] },
             { titre: "ANTICIPE", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/keeqaid_anticipe.jpg", tracks: ["Avant", "Après", "Maintenant", "Futur", "Passé", "Présent", "Demain", "Hier"] }
        ]
    },
    {
        id: "diditrix",
        nom: "Didi Trix",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/diddi_trix.webp",
        chiffres: "80k Abonnés",
        bio: "Le flow bondissant de Bondy.",
        albums: [
             { titre: "Trix City", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/diddi_trix_trix_city.jpg", tracks: ["Bizz", "Dans la caisse", "Bédo", "Wow", "Périmètre", "Compton", "Yo Diddi", "Chien d'la casse"] },
             { titre: "Dope Boyz", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/diddi_trix_dope_boyz.jpg", tracks: ["Dope", "Boyz", "Gang"] }
        ]
    },
    {
        id: "junglejack",
        nom: "Jungle Jack",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/jungle_jack.webp",
        chiffres: "25k Abonnés",
        bio: "Technique et flows précis.",
        albums: [
             { titre: "JUNGLE DES ILLUSIONS VOL 2", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jungle_jack_jungle_des_illusions_vol_2.jpg", tracks: ["CHARBON ET DEVOUEMENT", "KABUKI", "SYSTÈME D", "L'ÉQUILIBRISTE", "VUE IMPRENABLE SUR LA JUNGLE", "QUARTIERS EST", "L'HOMME AU PLAN"] },
             { titre: "JUNGLE DES ILLUSIONS VOL 1", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jungle_jack_jungle_des_illusions_vol_1.jpg", tracks: ["Illusion", "Réalité", "Mirage", "Fantasme", "Rêve", "Cauchemar", "Songe", "Chimère"] },
             { titre: "Cognacs & Cigarettes", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jungle_jack_cognacs_&_cigarettes.jpg", tracks: ["Cognac", "Cigarette", "Fumée", "Verre", "Bar", "Nuit", "Jazz", "Blues"] }
        ]
    },
    {
        id: "hladrogue",
        nom: "H La Drogue",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/h_la_drogue.webp",
        chiffres: "100k Abonnés",
        bio: "Le 92 dans sa forme street.",
        albums: [
             { titre: "Drogue", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/h_la_drogue_drogue.jpg", tracks: ["Seklenland Pt.5", "Sonorité", "Navou", "Mauvais Mélange", "Seklenland Pt.1", "Drogue", "Trafic", "Deal"] },
             { titre: "Beretta", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/h_la_drogue_beretta.jpg", tracks: ["Beretta", "Seklenland Pt.6", "Tir", "Arme", "Balle", "Chargeur", "Crosse", "Gachette"] }
        ]
    },
    {
        id: "maureen",
        nom: "Maureen",
        statut: "pepite",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/maureen.webp",
        chiffres: "150k Abonnés",
        bio: "Shatta Queen.",
        albums: [
             { titre: "BAD QUEEN", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/maureen_bad_queen.jpg", tracks: ["Jiggle", "Kompet", "C'est quoi ça", "Ding Dong", "Pum Fat", "Kompet x Jiggle", "Bad Queen", "Trône"] },
             { titre: "Tic", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/maureen_tic.jpg", tracks: ["Tic", "Tac", "Toc", "Tuc", "Tec", "Tyc", "Tzc", "Txc"] }
        ]
    },
    {
        id: "greenmontana",
        nom: "Green Montana",
        style: "Cloud / Aérien",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/green_montana.webp",
        certifications: { or: true, platine: true, diamant: false },
        chiffres: "400k Abonnés",
        bio: "La froideur mélodique.",
        albums: [
             { titre: "Alaska", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/green_montana_alaska.jpg", tracks: ["Trouble", "Les ennuis", "Maman", "Risques", "J'roule", "Billie Jean", "Ducci", "Palm Angels"] },
             { titre: "Melancholia 999", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/green_montana_melancholia_999.jpg", tracks: ["Evidemment", "Fumée", "Neymar", "999", "Melancholia", "Tristesse", "Solitude", "Pluie"] },
             { titre: "Nostalgia+", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/green_montana_nostalgia+.jpg", tracks: ["Parfum", "Waldorf", "Super héros", "Nostalgie", "Souvenir", "Mémoire", "Oubli", "Passé"] }
        ]
    },
    {
        id: "larry",
        nom: "Larry",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/larry.webp",
        certifications: { or: true, platine: false, diamant: false },
        chiffres: "500k Abonnés",
        bio: "L'énergie de Strasbourg.",
        albums: [
             { titre: "Cité Blanche", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/larry_cité_blanche.jpg", tracks: ["Woin Woin", "Enfant compliqué", "Sacoche", "Cité", "Blanche", "Neige", "Hiver", "Froid"] },
             { titre: "Petit Prince", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/larry_petit_prince.jpg", tracks: ["Colis", "Booster", "Gosses", "Prince", "Petit", "Roi", "Reine", "Couronne"] },
             { titre: "L.A", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/larry_la.jpg", tracks: ["V2", "Porsche", "R1", "L.A", "Los Angeles", "USA", "California", "Dream"] }
        ]
    },
    {
        id: "kpri",
        nom: "Kpri",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/kpri.webp",
        chiffres: "80k Abonnés",
        bio: "L'ancien de Lyonzon.",
        albums: [
             { titre: "Kpri Tape Vol 1", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kpri_kpri_tape_vol_1.jpg", tracks: ["Intro", "Kpri", "Lyon", "Tape", "Vol 1", "Début", "Commencement", "Origine"] },
             { titre: "Kpri Tape Vol 2", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kpri_kpri_tape_vol_2.jpg", tracks: ["Vol 2", "667", "Drill", "Suite", "Continuation", "Progression", "Avancement", "Evolution"] },
             { titre: "Kpri Tape Vol 3", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kpri_kpri_tape_vol_3.jpg", tracks: ["Vol 3", "Fin", "Outro", "Conclusion", "Terminaison", "Aboutissement", "Final", "Dénouement"] }
        ]
    },
    {
        id: "2zerwashington",
        nom: "2zer Washington",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/2zer.webp",
        chiffres: "90k Abonnés",
        bio: "Membre de 1995 et du S-Crew.",
        albums: [
             { titre: "Décisions", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/2zer_décisions.jpg", tracks: ["Décisions", "Routine", "Clan", "Choix", "Option", "Alternative", "Possibilité", "Eventualité"] },
             { titre: "Zer", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/2zer_zer.jpg", tracks: ["Zer", "Washington", "95", "Hauts-de-Seine", "Boulogne", "Billancourt", "Pont de Sèvres", "Trap"] }
        ]
    },
    {
        id: "3010",
        nom: "3010",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/3010.webp",
        chiffres: "40k Abonnés",
        bio: "Rappeur et producteur visionnaire.",
        albums: [
             { titre: "Nemo", annee: "2015", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/3010_nemo.jpg", tracks: ["Intro", "Nemo", "Outro", "Poisson", "Océan", "Mer", "Eau", "Bleu"] },
             { titre: "Program", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/3010_program.jpg", tracks: ["Program", "3010", "Paris", "Ville", "Lumière", "Nuit", "Jour", "Matin"] }
        ]
    },
    {
        id: "1d1r",
        nom: "1D1R",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/1d1r.webp",
        chiffres: "30k Abonnés",
        bio: "Talent brut.",
        albums: [
             { titre: "Meraki", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/1d1r_meraki.jpg", tracks: ["Intro", "Meraki", "Beldia", "Guedro", "La street", "Pas le temps", "C'est la vie", "Outro"] }
        ]
    },
    {
        id: "63og",
        nom: "63OG",
        statut: "pepite",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/63og.webp",
        chiffres: "25k Abonnés",
        bio: "La Trap sombre aux influences US.",
        albums: [
             { titre: "6TR9C9", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/63og_6tr9c9.jpg", tracks: ["Intro", "6TR9C9", "Big Drip", "No Cap", "Money", "Gang", "Shooter", "Trap House"] }
        ]
    },
    {
        id: "404billy",
        nom: "404Billy",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/404billy.webp",
        bio: "Sombre et technique.",
        albums: [
             { titre: "SAMO.", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/404billy_samo.jpg", tracks: ["Samo Era", "U. Paix & Amour", "N. B1jam1", "D. Extremist", "E. Musique Noire", "R. JeanJass Speech", "G. Cracovie", "R. Monsieur X"] },
             { titre: "Supernova", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/404billy_supernova.jpg", tracks: ["Sombre", "RVRE", "Prends de la vitesse", "404", "Espèce", "Rage", "Titre", "Vérité", "Noir", "Supernova"] },
             { titre: "Process", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/404billy_process.jpg", tracks: ["Process", "Error", "Loading", "System Failure", "Reboot", "Virus", "Data", "Shutdown"] }
        ]
    },
    {
        id: "1plike140",
        nom: "1PLIKÉ140",
        statut: "tendance",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/1pliké140.webp",
        certifications: { or: true, platine: true, diamant: false },
        chiffres: "642k Abonnés",
        bio: "La Drill de Clamart. Flow sombre et menaçant.",
        albums: [
            { 
                titre: "1PLIKTOI (Vol. 1 & 2)", 
                annee: "2020", 
                cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/1pliké140_1pliktoi_(vol_1_&_2).jpg", 
                tracks: ["Lossa", "Canada", "Dans mon assiette", "Maïna", "Tranquille", "P.A.B", "Dolce Vita", "Lebara", "Cruel", "Maman", "140", "Ong Bak", "Mauvais", "Est-ce que t'assumes"] 
            },
            { 
                titre: "ARRÊTEZ-LE ! (Volume 1 & 2)", 
                annee: "2022", 
                cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/1pliké140_arrêtez-le_!_(volume_1_&_2).jpg", 
                tracks: ["Arrêtez-le", "Tranquillement", "Elle", "Perso", "Virements", "60", "Rari", "On l'a", "Belek", "Canada Remix"] 
            }
        ]
    },
    {
        id: "100blaze",
        nom: "100 Blaze",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/100_blaze.webp",
        certifications: { or: false, platine: false, diamant: false },
        chiffres: "205k Abonnés",
        bio: "Le marseillais aux influences américaines.",
        albums: [
            { 
                titre: "Depuis minot", 
                annee: "2019", 
                cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/100_blaze_depuis_minot.jpg", 
                tracks: ["Savoir", "Binks (feat. Koba LaD)", "Fini", "Gucci", "Moula", "Depuis minot", "Ma vie", "J'ai pas le temps", "Avec toi", "Shine", "Love"] 
            }
        ]
    },
    {
        id: "8ruki",
        nom: "8ruki",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/8ruki.webp",
        certifications: { or: false, platine: false, diamant: false },
        chiffres: "12k Abonnés",
        bio: "Le boss de la Plug en France.",
        albums: [
             { titre: "INT8TION", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/8ruki_int8tion.jpg", tracks: ["y'a des gars", "ferme la", "OH LAla!!", "ANDREW TATE!!", "C'que j'en pense", "Blueface", "SWAG", "OUh!! (SPICE BOMB)", "Special", "On Go"] },
             { titre: "Green Lobby", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/8ruki_green_lobby.jpg", tracks: ["Lameshit", "Final Boss", "33R", "Blueface", "Rukidonmaj", "STFU", "Juul", "Fafa", "Univ8rs (maman)", "Biff"] },
             { titre: "PoweredByRuki", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/8ruki_poweredbyruki.jpg", tracks: ["AYA NAKAMURA*", "YOONIE.Comb*", "CARTIER*"] }
        ]
    },
    {
        id: "aboudebeing",
        nom: "Abou Debeing",
        statut: "tendance",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/abou_debeing.webp",
        certifications: { or: true, platine: false, diamant: false },
        chiffres: "557k Abonnés",
        bio: "Le hitmaker du Wati B.",
        albums: [
            { 
                titre: "Street Love", 
                annee: "2019", 
                cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/abou_debeing_street_love.jpg", 
                tracks: ["C'est mort", "Calme", "Qu'une vie", "Égoïste", "Petit de la tess", "Bye Bye", "Tout est permis", "La force", "Respectez", "Mon frère"] 
            }
        ]
    },
    {
        id: "akhenaton",
        nom: "Akhenaton",
        statut: "legende",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/akhenaton.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "237k Abonnés",
        bio: "La légende marseillaise, leader d'IAM.",
        albums: [
            { 
                titre: "Métèque et Mat", 
                annee: "1995", 
                cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/akhenaton_métèque_et_mat.jpg", 
                tracks: ["La face B", "Bad Boys de Marseille", "Prométhée", "Métèque et Mat", "Au fin fond d'une contrée", "Je ne suis pas à plaindre", "Un brin de haine", "Eclater un type des Assedic", "J'ai pas de face"] 
            }
        ]
    },
    {
        id: "femtogo",
        nom: "Femtogo",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/femtogo.webp",
        bio: "Baby Hayabusa.",
        albums: [
             { titre: "PRETTY DOLLCORPSE", annee: "2025", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=PRETTY+DOLLCORPSE", tracks: ["WHITE CHAMBER TALK", "100 000 LUMEN", "HANK J", "BACHA BAZI WHISTLEBLOWER", "GEIGER COUNTER", "EVIL KNIEVEL", "SIXTH FLOOR", "G. MCKENNA", "PUKE SOMETHING", "MIRRROIR", "SEPTICÉMIE", "LE MÔME"] },
             { titre: "archives", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/femtogo_archives.jpg", tracks: ["ZAGA", "ANY MERCY FORBIDDEN"] }
        ]
    },
    {
        id: "nes",
        nom: "NeS",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/nes.webp",
        bio: "Technique et style.",
        albums: [
             { titre: "ÇA VA ALLER", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/nes_ça_va_aller.jpg", tracks: ["CVA", "A/R", "SCOREBOARD", "LES SAPES QUE J'VEUX", "-94°C", "4X4", "RER C", "LE SOURIRE D'UNE TOMBE"] },
             { titre: "COSMIC", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/nes_cosmic.jpg", tracks: ["SPACESHIP", "Exosquelette", "Lex Luthor", "Ninana", "Évidence", "Colibri", "Export", "COSMIC"] }
        ]
    },
    {
        id: "malo",
        nom: "Malo",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/malo.webp",
        bio: "Flow tout terrain.",
        albums: [
             { titre: "FROIDCOMMEDEHORS", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/malo_froidcommedehors.jpg", tracks: ["4X4", "FROIDCOMMEDEHORS", "LA CAGE", "AU REVOIR", "X3", "PAS DE SEMBLANT", "PORSCHE", "VODOO", "MÉDICATION"] },
             { titre: "404", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=404", tracks: ["404", "Error", "Not Found"] }
        ]
    },
    {
        id: "kekra",
        nom: "Kekra",
        statut: "pepite",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/kekra.webp",
        bio: "Le masqué de Courbevoie.",
        albums: [
             { titre: "Vréel 3", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kekra_vréel_3.jpg", tracks: ["Charbonne", "Pull Up", "Intermission", "Poches Pleines", "Tout Seul", "TLB", "Rap de Zulu", "Gros", "Pas Millionné", "Lexro", "Envoie La Monnaie 3.0", "Capuché"] },
             { titre: "Land", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kekra_land.jpg", tracks: ["Frérot", "10 balles", "Les autres", "Viceland", "J'fais pas ça", "Batman", "Wing Chun", "C'est bon", "Segpa", "Trabajo"] },
             { titre: "Stratos", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kekra_stratos.jpg", tracks: ["Stratos", "Iverson", "J'arrête", "Ingé son", "Bloc de glace"] }
        ]
    },
    {
        id: "bbjacques",
        nom: "B.B Jacques",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/b.b_jacques.webp",
        bio: "L'intensité.",
        albums: [
             { titre: "Poésie d'une pulsion", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/bb_jacques_poésie_dune_pulsion.jpg", tracks: ["Fend Le Ciel", "Comme Une Cicatrice", "Déchirée", "La Promesse De L'aube", "Enfin Seul", "Loin D'ici", "Une Impression De Déjà-Vu", "Bleu Cristal", "Lnsc", "Océan Sonore"] },
             { titre: "New Blues, Old Wine", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/bb_jacques_new_blues,_old_wine.jpg", tracks: ["HARMONIE", "NDSM", "INTÉRIEUR SCANDINAVE", "MÉTRO", "SPORT DE RICHE", "ALEX ADLER", "NO LOVE", "CINCINNATI", "PARDON", "INTERLUDE", "BLUE BIRD", "FUCK LA FAME", "RAINBOW"] }
        ]
    },
    {
        id: "menacesantana",
        nom: "Menace Santana",
        statut: "pepite",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/menace_santana.webp",
        bio: "L'ambiance film d'horreur.",
        albums: [
             { titre: "Into The Dark", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/menace_santana_into_the_dark.jpg", tracks: ["1809", "Il Était Une Fois", "FREDDY KRUEGER", "Le Cauchemar Continue", "45 Seconds", "Belek mS", "Into The Dark", "Halloween"] },
             { titre: "!", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/menace_santana_!.jpg", tracks: ["Michael Myers", "Skiboy", "Vendredi 13", "Cauchemar", "Adios"] }
        ]
    },
    {
        id: "deenburbigo",
        nom: "Deen Burbigo",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/deen_burbigo.webp",
        bio: "Grand Cru.",
        albums: [
             { titre: "OG SAN II", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/deen_burbigo_og_san_ii.jpg", tracks: ["AM", "Oji", "Sennin", "Jdid", "Mansa", "Désolé", "Savane", "Dommage", "Rêve de gosse", "Tout ce qu'il faut"] },
             { titre: "Cercle vertueux", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/deen_burbigo_cercle_vertueux.jpg", tracks: ["Tout est noir", "Cercle vertueux", "Vroom", "Jeu d'échecs", "Pura vida"] },
             { titre: "Grand Cru", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/deen_burbigo_grand_cru.jpg", tracks: ["On y va", "Me réveiller", "Pas une autre", "Tu rêves", "Fils de riche"] }
        ]
    },
    {
        id: "404billy",
        nom: "404Billy",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/404billy.webp",
        bio: "Sombre et technique.",
        albums: [
             { titre: "SAMO.", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/404billy_samo.jpg", tracks: ["Samo Era", "U. Paix & Amour", "N. B1jam1", "D. Extremist", "E. Musique Noire", "R. JeanJass Speech", "G. Cracovie", "R. Monsieur X"] },
             { titre: "Supernova", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/404billy_supernova.jpg", tracks: ["Sombre", "RVRE", "Prends de la vitesse", "404", "Espèce", "Rage", "Titre", "Vérité", "Noir", "Supernova"] },
             { titre: "Process", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/404billy_process.jpg", tracks: ["Process", "Error", "Loading", "System Failure", "Reboot", "Virus", "Data", "Shutdown"] }
        ]
    },
    {
        id: "34murphy",
        nom: "34Murphy",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/34murphy.webp",
        bio: "Mélodies introspectives.",
        albums: [
             { titre: "la chouette", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/34murphy_la_chouette.jpg", tracks: ["Encore un", "No Meta", "Gunz", "Milwaukee", "Tout comme", "L'amour et la haine", "Spécial", "24/24", "Sans fin"] },
             { titre: "9m²", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/34murphy_9m².jpg", tracks: ["9m2", "Cage", "Liberté"] },
             { titre: "fata morgana", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/34murphy_fata_morgana.jpg", tracks: ["Mirage", "Désert", "Oasis"] }
        ]
    },
    {
        id: "lalaace",
        nom: "Lala &ce",
        statut: "pepite",
        style: "Cloud / Aérien",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763856701/bureau_du_rap/rappeurs/lala_ace.jpg",
        bio: "Le flow le plus cool.",
        albums: [
             { titre: "SOLSTICE", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/lala_&ce_solstice.jpg", tracks: ["Intro", "No More Time", "Santos", "Licorne", "Drogue d'hiver", "Skit: RadioLaLigne", "Jalouse", "Money to Get to", "BUT", "Sexyy Red", "Apocalypse Sitcom", "Djinzin"] },
             { titre: "Everything Tasteful", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/lala_&ce_everything_tasteful.jpg", tracks: ["Sous l'eau", "Show Me Love", "Sipa", "Parapluie", "In Luv Again"] },
             { titre: "Le son d'après", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/lala_&ce_le_son_daprès.jpg", tracks: ["Wet", "Amen", "Coulée", "Cellophane"] }
        ]
    },
    {
        id: "keeqaid",
        nom: "Keeqaid",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/keeqaid.webp",
        chiffres: "40k Abonnés",
        bio: "L'énergie brute du 93.",
        albums: [
             { titre: "PATRON", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/keeqaid_patron.jpg", tracks: ["Abana", "Arranger", "Bails", "Barzante", "Bâtard", "BÉBÉ", "Bénéfice", "Blablabla"] },
             { titre: "PURIZÉ", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/keeqaid_purizé.jpg", tracks: ["Pur", "Mélange", "Chimie", "Dose", "Qualité", "Client", "Four", "Bénéfice"] },
             { titre: "ANTICIPE", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/keeqaid_anticipe.jpg", tracks: ["Avant", "Après", "Maintenant", "Futur", "Passé", "Présent", "Demain", "Hier"] }
        ]
    },
    {
        id: "diditrix",
        nom: "Diddi Trix",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/didi_trix.webp",
        chiffres: "80k Abonnés",
        bio: "Le flow bondissant de Bondy.",
        albums: [
             { titre: "Trix City", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/didi_trix_trix_city.jpg", tracks: ["Bizz", "Dans la caisse", "Bédo", "Wow", "Périmètre", "Compton", "Yo Diddi", "Chien d'la casse"] },
             { titre: "Cartel de Bondy", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/didi_trix_cartel_de_bondy.jpg", tracks: ["Cartel", "Bondy", "Nord"] },
             { titre: "Dope Boyz", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/didi_trix_dope_boyz.jpg", tracks: ["Dope", "Boyz", "Gang"] }
        ]
    },
    {
        id: "junglejack",
        nom: "Jungle Jack",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/jungle_jack.webp",
        chiffres: "25k Abonnés",
        bio: "Technique et flows précis.",
        albums: [
             { titre: "JUNGLE DES ILLUSIONS VOL 2", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jungle_jack_jungle_des_illusions_vol_2.jpg", tracks: ["CHARBON ET DEVOUEMENT", "KABUKI", "SYSTÈME D", "L'ÉQUILIBRISTE", "VUE IMPRENABLE SUR LA JUNGLE", "QUARTIERS EST", "L'HOMME AU PLAN"] },
             { titre: "JUNGLE DES ILLUSIONS VOL 1", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jungle_jack_jungle_des_illusions_vol_1.jpg", tracks: ["Illusion", "Réalité", "Mirage", "Fantasme", "Rêve", "Cauchemar", "Songe", "Chimère"] },
             { titre: "Cognacs & Cigarettes", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jungle_jack_cognacs_&_cigarettes.jpg", tracks: ["Cognac", "Cigarette", "Fumée", "Verre", "Bar", "Nuit", "Jazz", "Blues"] }
        ]
    },
    {
        id: "l2b_gang",
        nom: "L2B Gang",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/l2b_gang.webp",
        chiffres: "60k Abonnés",
        bio: "L'énergie brute du groupe.",
        albums: [
             { titre: "94 bois, Vol. 2", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/l2b_gang_94_bois_vol_2.jpg", tracks: ["Montant", "Équipe de Daddy", "Amis d'enfance", "Jeune Banlieusard", "Bitume", "Mec D'ici", "Mauvais Djo", "Elle & Moi"] },
             { titre: "94 bois", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/l2b_gang_94_bois.jpg", tracks: ["94 Bois", "Traficante", "Cartel", "Poudrière", "Binks", "Zone", "Secteur", "Quartier"] }
        ]
    },
    {
        id: "h_la_drogue",
        nom: "H. La Drogue",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/h_la_drogue.webp",
        chiffres: "100k Abonnés",
        bio: "Le 92 dans sa forme street.",
        albums: [
             { titre: "Drogue", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/h_la_drogue_drogue.jpg", tracks: ["Seklenland Pt.5", "Sonorité", "Navou", "Mauvais Mélange", "Seklenland Pt.1", "Drogue", "Trafic", "Deal"] },
             { titre: "Beretta", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/h_la_drogue_beretta.jpg", tracks: ["Beretta", "Seklenland Pt.6", "Tir", "Arme", "Balle", "Chargeur", "Crosse", "Gachette"] }
        ]
    },
    {
        id: "maureen",
        nom: "Maureen",
        statut: "pepite",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/maureen.webp",
        chiffres: "150k Abonnés",
        bio: "Shatta Queen.",
        albums: [
             { titre: "BAD QUEEN", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/maureen_bad_queen.jpg", tracks: ["Jiggle", "Kompet", "C'est quoi ça", "Ding Dong", "Pum Fat", "Kompet x Jiggle", "Bad Queen", "Trône"] },
             { titre: "Tic", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/maureen_tic.jpg", tracks: ["Tic", "Tac", "Toc", "Tuc", "Tec", "Tyc", "Tzc", "Txc"] }
        ]
    },
    {
        id: "greenmontana",
        nom: "Green Montana",
        style: "Cloud / Aérien",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/green_montana.webp",
        certifications: { or: true, platine: true, diamant: false },
        chiffres: "400k Abonnés",
        bio: "La froideur mélodique.",
        albums: [
             { titre: "Alaska", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/green_montana_alaska.jpg", tracks: ["Trouble", "Les ennuis", "Maman", "Risques", "J'roule", "Billie Jean", "Ducci", "Palm Angels"] },
             { titre: "Melancholia 999", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/green_montana_melancholia_999.jpg", tracks: ["Evidemment", "Fumée", "Neymar", "999", "Melancholia", "Tristesse", "Solitude", "Pluie"] },
             { titre: "Nostalgia+", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/green_montana_nostalgia+.jpg", tracks: ["Parfum", "Waldorf", "Super héros", "Nostalgie", "Souvenir", "Mémoire", "Oubli", "Passé"] }
        ]
    },
    {
        id: "larry",
        nom: "Larry",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/larry.webp",
        certifications: { or: true, platine: false, diamant: false },
        chiffres: "500k Abonnés",
        bio: "L'énergie de Strasbourg.",
        albums: [
             { titre: "Cité Blanche", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/larry_cité_blanche.jpg", tracks: ["Woin Woin", "Enfant compliqué", "Sacoche", "Cité", "Blanche", "Neige", "Hiver", "Froid"] },
             { titre: "Petit Prince", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/larry_petit_prince.jpg", tracks: ["Colis", "Booster", "Gosses", "Prince", "Petit", "Roi", "Reine", "Couronne"] },
             { titre: "L.A", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/larry_la.jpg", tracks: ["V2", "Porsche", "R1", "L.A", "Los Angeles", "USA", "California", "Dream"] }
        ]
    },
    {
        id: "kpri",
        nom: "Kpri",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/kpri.webp",
        chiffres: "80k Abonnés",
        bio: "L'ancien de Lyonzon.",
        albums: [
             { titre: "Kpri Tape Vol 1", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kpri_kpri_tape_vol_1.jpg", tracks: ["Intro", "Kpri", "Lyon", "Tape", "Vol 1", "Début", "Commencement", "Origine"] },
             { titre: "Kpri Tape Vol 2", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kpri_kpri_tape_vol_2.jpg", tracks: ["Vol 2", "667", "Drill", "Suite", "Continuation", "Progression", "Avancement", "Evolution"] },
             { titre: "Kpri Tape Vol 3", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kpri_kpri_tape_vol_3.jpg", tracks: ["Vol 3", "Fin", "Outro", "Conclusion", "Terminaison", "Aboutissement", "Final", "Dénouement"] }
        ]
    },
    {
        id: "beendo_z",
        nom: "Beendo Z",
        statut: "pepite",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/beendo_z.webp",
        chiffres: "50k Abonnés",
        bio: "Inspiré de faits réels.",
        albums: [
             { titre: "L'Élu", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/beendo_z_lélu.jpg", tracks: ["Le Papa", "Comics", "L'Élu", "Est-ce que c'est vrai ?", "Booska Z", "Chrome", "EDL 75", "Cas Contact"] }
        ]
    },
    {
        id: "jeune_lion",
        nom: "Jeune Lion",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/jeune_lion.webp",
        bio: "L'esprit d'Abidjan.",
        albums: [
             { titre: "HIGHLY SPIRITUAL", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jeune_lion_highly_spiritual.jpg", tracks: ["INTRO MYSTIC (DIEU)", "LION NOUVELLE VAGUE", "23", "SOUL", "PETER TOSH", "RICH", "DISPENSARY", "ROUGE LIBANAIS", "KONGO"] },
             { titre: "BEFORE BABYLONE BURNT", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jeune_lion_before_babylone_burnt.jpg", tracks: ["BABYLONE", "BURNT"] }
        ]
    },
    {
        id: "ino_casablanca",
        nom: "Ino Casablanca",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/ino_casablanca.webp",
        bio: "Fusion unique.",
        albums: [
             { titre: "TAMARA", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/ino_casablanca_tamara.jpg", tracks: ["NOUVO GROOVE", "ALBUFEIRA", "AVANT LA FIN", "FUCK LARR", "CIAO, MY LOVE !", "PARAPLUI"] },
             { titre: "DEMNA", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/ino_casablanca_demna.jpg", tracks: ["DEMNA"] }
        ]
    },
    {
        id: "folies",
        nom: "Folie's",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/folie's.webp",
        chiffres: "83 Abonnés",
        bio: "Univers coloré.",
        albums: [
             { titre: "Folie's je t'aime", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/folies_folies_je_taime.jpg", tracks: ["ILY Intro", "F*Love", "Nosleeve", "BAD!", "Nymphomaniac", "IHY Outro"] }
        ]
    },
    {
        id: "gapman",
        nom: "Gapman",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/gapman.webp",
        bio: "La Trap du Nord.",
        albums: [
             { titre: "Prochaine Chèvre", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/gapman_prochaine_chèvre.jpg", tracks: ["Draco / Intro", "Mephisto", "Lundi", "21", "Piège", "Crazy Story", "Monopole", "Souvent"] }
        ]
    },
    {
        id: "jima",
        nom: "Jima",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/jima.webp",
        chiffres: "7k Abonnés",
        bio: "Underground et créatif.",
        albums: [
             { titre: "JIMALDUIN", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jima_jimalduin.jpg", tracks: ["⭢", "sam est =", "attention!! screamer à 0:00", "avance2bz", "staross EX"] }
        ]
    },
    {
        id: "tkkf",
        nom: "TKKF",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/tkkf.webp",
        chiffres: "18k Abonnés",
        bio: "Hyperpop Rap.",
        albums: [
             { titre: "pale blue dot", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/tkkf_pale_blue_dot.jpg", tracks: ["0gravité", "Olive et TON-618", "absolute black", "Voyager 1", "Voyager 2", "La fin du voyage", "bye! blue"] }
        ]
    },
    {
        id: "ptite_soeur",
        nom: "Ptite Soeur",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/ptite_soeur.webp",
        chiffres: "53k Abonnés",
        bio: "Talent émergent.",
        albums: [
             { titre: "PRETTY DOLLCORPSE", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/ptite_soeur_pretty_dollcorpse.jpg", tracks: ["WHITE CHAMBER TALK", "100 000 LUMEN", "HANK J", "BACHA BAZI WHISTLEBLOWER", "GEIGER COUNTER", "EVIL KNIEVEL", "SIXTH FLOOR", "G. MCKENNA", "PUKE SOMETHING", "MIRRROIR", "SEPTICÉMIE", "LE MÔME"] }
        ]
    },
    {
        id: "2zer",
        nom: "2zer",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/2zer.webp",
        chiffres: "90k Abonnés",
        bio: "Membre de 1995 et du S-Crew.",
        albums: [
             { titre: "Décisions", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/2zer_décisions.jpg", tracks: ["Décisions", "Routine", "Clan", "Choix", "Option", "Alternative", "Possibilité", "Eventualité"] },
             { titre: "Zer", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/2zer_zer.jpg", tracks: ["Zer", "Washington", "95", "Hauts-de-Seine", "Boulogne", "Billancourt", "Pont de Sèvres", "Trap"] }
        ]
    },
    {
        id: "3010",
        nom: "3010",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/3010.webp",
        chiffres: "40k Abonnés",
        bio: "Rappeur et producteur visionnaire.",
        albums: [
             { titre: "Nemo", annee: "2015", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/3010_nemo.jpg", tracks: ["Intro", "Nemo", "Outro", "Poisson", "Océan", "Mer", "Eau", "Bleu"] },
             { titre: "Program", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/3010_program.jpg", tracks: ["Program", "3010", "Paris", "Ville", "Lumière", "Nuit", "Jour", "Matin"] }
        ]
    },
    {
        id: "1d1r",
        nom: "1D1R",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/1d1r.webp",
        chiffres: "30k Abonnés",
        bio: "Talent brut.",
        albums: [
             { titre: "Meraki", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/1d1r_meraki.jpg", tracks: ["Intro", "Meraki", "Beldia", "Guedro", "La street", "Pas le temps", "C'est la vie", "Outro"] }
        ]
    },
    {
        id: "63og",
        nom: "63OG",
        statut: "pepite",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/63og.webp",
        chiffres: "25k Abonnés",
        bio: "La Trap sombre aux influences US.",
        albums: [
             { titre: "6TR9C9", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/63og_6tr9c9.jpg", tracks: ["Intro", "6TR9C9", "Big Drip", "No Cap", "Money", "Gang", "Shooter", "Trap House"] }
        ]
    },
    {
        id: "1plike140",
        nom: "1PLIKÉ140",
        statut: "tendance",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/1pliké140.webp",
        certifications: { or: true, platine: true, diamant: false },
        chiffres: "642k Abonnés",
        bio: "La Drill de Clamart. Flow sombre et menaçant.",
        albums: [
            { 
                titre: "1PLIKTOI (Vol. 1 & 2)", 
                annee: "2020", 
                cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/1pliké140_1pliktoi_(vol_1_&_2).jpg", 
                tracks: ["Lossa", "Canada", "Dans mon assiette", "Maïna", "Tranquille", "P.A.B", "Dolce Vita", "Lebara", "Cruel", "Maman", "140", "Ong Bak", "Mauvais", "Est-ce que t'assumes"] 
            },
            { 
                titre: "ARRÊTEZ-LE ! (Volume 1 & 2)", 
                annee: "2022", 
                cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/1pliké140_arrêtez-le_!_(volume_1_&_2).jpg", 
                tracks: ["Arrêtez-le", "Tranquillement", "Elle", "Perso", "Virements", "60", "Rari", "On l'a", "Belek", "Canada Remix"] 
            }
        ]
    },
    {
        id: "100blaze",
        nom: "100 Blaze",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/100_blaze.webp",
        certifications: { or: false, platine: false, diamant: false },
        chiffres: "205k Abonnés",
        bio: "Le marseillais aux influences américaines.",
        albums: [
            { 
                titre: "Depuis minot", 
                annee: "2019", 
                cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/100_blaze_depuis_minot.jpg", 
                tracks: ["Savoir", "Binks (feat. Koba LaD)", "Fini", "Gucci", "Moula", "Depuis minot", "Ma vie", "J'ai pas le temps", "Avec toi", "Shine", "Love"] 
            }
        ]
    },
    {
        id: "8ruki",
        nom: "8ruki",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/8ruki.webp",
        certifications: { or: false, platine: false, diamant: false },
        chiffres: "12k Abonnés",
        bio: "Le boss de la Plug en France.",
        albums: [
             { titre: "INT8TION", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/8ruki_int8tion.jpg", tracks: ["y'a des gars", "ferme la", "OH LAla!!", "ANDREW TATE!!", "C'que j'en pense", "Blueface", "SWAG", "OUh!! (SPICE BOMB)", "Special", "On Go"] },
             { titre: "Green Lobby", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/8ruki_green_lobby.jpg", tracks: ["Lameshit", "Final Boss", "33R", "Blueface", "Rukidonmaj", "STFU", "Juul", "Fafa", "Univ8rs (maman)", "Biff"] },
             { titre: "PoweredByRuki", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/8ruki_poweredbyruki.jpg", tracks: ["AYA NAKAMURA*", "YOONIE.Comb*", "CARTIER*"] }
        ]
    },
    {
        id: "aboudebeing",
        nom: "Abou Debeing",
        statut: "tendance",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/abou_debeing.webp",
        certifications: { or: true, platine: false, diamant: false },
        chiffres: "557k Abonnés",
        bio: "Le hitmaker du Wati B.",
        albums: [
            { 
                titre: "Street Love", 
                annee: "2019", 
                cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/abou_debeing_street_love.jpg", 
                tracks: ["C'est mort", "Calme", "Qu'une vie", "Égoïste", "Petit de la tess", "Bye Bye", "Tout est permis", "La force", "Respectez", "Mon frère"] 
            }
        ]
    },
    {
        id: "akhenaton",
        nom: "Akhenaton",
        statut: "legende",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/akhenaton.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "237k Abonnés",
        bio: "La légende marseillaise, leader d'IAM.",
        albums: [
            { 
                titre: "Métèque et Mat", 
                annee: "1995", 
                cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/akhenaton_métèque_et_mat.jpg", 
                tracks: ["La face B", "Bad Boys de Marseille", "Prométhée", "Métèque et Mat", "Au fin fond d'une contrée", "Je ne suis pas à plaindre", "Un brin de haine", "Eclater un type des Assedic", "J'ai pas de face"] 
            }
        ]
    }
];