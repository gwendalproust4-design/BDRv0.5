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
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848131/bureau_du_rap/rappeurs/booba.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "3.7M Abonnés",
        bio: "Le Duc. Patron du 92i.",
        bioLongue: "Élie Yaffa, dit Booba. Pionnier du rap français, il a traversé les époques. Il a imposé l'autotune et le rap business en France.",
        albums: [
            { 
                titre: "ULTRA", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b7c26131d453d1d9afb81aa0", 
                tracks: ["GP", "Azerty", "RST", "Bonne journée", "Mona Lisa", "Je t'aime", "5G", "Vue sur la mer", "L'olivier", "VVV", "31", "Ultra", "Dernière fois", "Grain de sable"] 
            },
            { 
                titre: "Trône", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2737b56fb8f7a5b37d234d53238", 
                tracks: ["Centurion", "Friday", "Drapeau noir", "Trône", "Bouyon", "DKR", "Nougat", "Fleur de saison", "Terrain", "Petite fille", "Ça va aller", "113", "Ridin'", "Éléphant"] 
            },
            { 
                titre: "Temps Mort", annee: "2002", cover: "https://i.scdn.co/image/ab67616d0000b2737b241e06d7cd749de581a806", 
                tracks: ["Temps mort", "Ma définition", "Jusqu'ici tout va bien", "Repose en paix", "Le bitume avec une plume", "Animals", "Sans ratures", "Ecoute bien", "Inédit", "Strass et paillettes", "Destinée"] 
            }
        ]
    },
    {
        id: "iam",
        nom: "IAM",
        statut: "legende",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848188/bureau_du_rap/rappeurs/iam.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "500k Abonnés",
        bio: "Les architectes du rap marseillais.",
        albums: [
            { 
                titre: "L'École du Micro d'Argent", annee: "1997", cover: "https://i.scdn.co/image/ab67616d0000b2739c8f1909f055f04ca6862853", 
                tracks: ["L'école du micro d'argent", "Dangereux", "Nés sous la même étoile", "La saga", "Petit frère", "Elle donne son corps avant son nom", "L'empire du côté obscur", "Regarde", "Demain, c'est loin"] 
            },
            { titre: "Ombre est lumière", annee: "1993", cover: "https://i.scdn.co/image/ab67616d0000b27311a234f25c01c55b9d339339", tracks: ["Le feu", "Cosmos", "Vos dieux ont les mains sales", "Le mia", "Je danse le mia"] },
            { titre: "Arts Martiens", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b27349d620228960a4094e37661e", tracks: ["Spartiate Spirit", "Les raisons de la colère", "Notre dame veille", "Benkei et Minamoto"] }
        ]
    },
    {
        id: "ntm",
        nom: "Suprême NTM",
        statut: "legende",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848155/bureau_du_rap/rappeurs/ntm.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "L'énergie brute de la révolte.",
        albums: [
            { titre: "Suprême NTM", annee: "1998", cover: "https://i.scdn.co/image/ab67616d0000b273b0af6c9d26487cf55ba0efd6", tracks: ["Intro", "Back dans les bacs", "Laisse pas traîner ton fils", "Ma Benz", "Seine-Saint-Denis Style", "Pose ton gun"] },
            { titre: "Paris sous les bombes", annee: "1995", cover: "https://i.scdn.co/image/ab67616d0000b273f4159d20696d2114f7299711", tracks: ["Plus jamais ça", "Tout n'est pas si facile", "La fièvre", "Paris sous les bombes", "Qu'est-ce qu'on attend"] }
        ]
    },
    {
        id: "kaaris",
        nom: "Kaaris",
        statut: "legende",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848146/bureau_du_rap/rappeurs/kaaris.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "2.1M Abonnés",
        bio: "Le Dozo. Père de la Trap française.",
        albums: [
            { titre: "Or Noir", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b273320e2cbe61937f598b904ec4", tracks: ["Bizon", "Zoo", "Ciroc", "Or noir", "Bouchon de liège", "Dès le départ", "Pas de remède", "Je bibi", "2.7.0"] },
            { titre: "Le Bruit de mon âme", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b273a5aae82f65dcb67a0126ab55", tracks: ["Kadirov", "Se-vrak", "Four", "80 Zetrei", "El Chapo", "Zone de transit", "Le bruit de mon âme"] },
            { titre: "Okou Gnakouri", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273a8d054958a50a479fe720039", tracks: ["Le sang", "Blow", "Benz", "Boyz n the Hood", "Contact", "Poussière", "Tchoin"] }
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
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848198/bureau_du_rap/rappeurs/gazo.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "4.3M Abonnés",
        bio: "Le chef de la Drill FR.",
        albums: [
            { titre: "KMT", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273727b42d784eb74b9208a227a", tracks: ["BECTE", "BODIES", "LETTRE À UN OPPS", "RAPPEL", "JEUX DANGEREUX", "M.A.L.A", "GRA GRA BOOM", "HENNESSY", "DIE", "BOSS", "CÉLINE 3X", "MOLLAZI", "FLEURS"] },
            { titre: "Drill FR", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27318f052a725050c790a931801", tracks: ["Intro", "Haine&Sex", "Kassav", "Tchin 2x", "Parkinson", "A$AP", "Drill FR 5", "Euphon", "Mon cher"] },
            { titre: "La Mélo est Gangx", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273cc1c81a9111484b340a08ec7", tracks: ["200%", "SOBAD", "CARTIER", "NOTRE DAME", "INTERLUDE", "100K", "24/34", "OUTRO"] }
        ]
    },
    {
        id: "tiakola",
        nom: "Tiakola",
        statut: "tendance",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848210/bureau_du_rap/rappeurs/tiakola.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "3.6M Abonnés",
        bio: "Le prince de la mélo.",
        albums: [
            { titre: "Mélo", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c974e02a73a8c30738019a56", tracks: ["1ntro'p", "#TT", "Arsenik", "Parapluie", "La clé", "Mode AV", "Si j'savais", "Meuda", "Gasolina", "Soza", "Riri / No Camera", "M3lo", "Atasanté", "Roro", "Coucher de soleil"] },
            { titre: "BDLM Vol. 1", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d10ff5df541f71c69c106a21", tracks: ["MANON B", "Y.J", "GRAND PRIX", "RESTE-LA", "PLAISIR NOCIF", "T.I.A", "LA TOUR", "PAPILLON"] }
        ]
    },
    {
        id: "werenoi",
        nom: "Werenoi",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848124/bureau_du_rap/rappeurs/werenoi.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "2.8M Abonnés",
        bio: "La machine à hits du 93.",
        albums: [
            { titre: "Carré", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273cf93822043c831857ed3b6b4", tracks: ["Intro Rolex", "Maison hantée", "Ciao", "Figaro", "Grisaille", "Laboratoire", "Virus", "Tout seul", "L'ancien", "Vroum Vroum", "Satan 2", "Nos labels c'est du papel", "Boussole", "Escorte", "Salaire", "Rude Boy", "Chemin d'or"] },
            { titre: "Pyramide", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27315a77fc58cab8c163a1b7509", tracks: ["Intro", "Pyramide", "Maudit", "Dans un verre", "Location", "Télescope", "La vie de star", "Chaleur", "Je suis en moto", "Matelas", "Les codes", "3x filtré", "Faf", "10.03.2023", "Animal", "Picasso", "Seul"] },
            { titre: "Telegram 2", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c52c479e4abc2aa659e9ed88", tracks: ["Magot", "Bang", "3x filtré", "Mauvaise", "Dans un verre", "Tu connais", "Bipolaire", "Alpha"] }
        ]
    },
    {
        id: "sdm",
        nom: "SDM",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848156/bureau_du_rap/rappeurs/sdm.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "1.8M Abonnés",
        bio: "Ocho. La voix tonitruante du 92i.",
        albums: [
            {
                titre: "À la vie à la mort",
                annee: "2024",
                cover: "https://i.scdn.co/image/ab67616d0000b273a325e460149f501926931d71",
                tracks: ["PLUS RIEN", "CARTIER SANTOS", "TOKA", "JEUX D'ECHECS", "MAINTENANT ÇA VA", "POUR ELLE", "METALLICA", "DANS LA TÊTE", "SCORPION", "TOUT CE QU'IL NOUS RESTE"]
            },
            {
                titre: "Liens du 100",
                annee: "2022",
                cover: "https://i.scdn.co/image/ab67616d0000b27392c95d3cc8febc77abcc284e",
                tracks: ["Hier encore", "Mr. Ocho", "Bolide allemand", "Ragnar", "Nwar sur Nwar", "Si tu savais", "Cette année-là", "Fame", "Dans le club", "Franklin Saint", "2sang43", "Redescends", "File de gauche", "Le temps", "Sang40"]
            },
            {
                titre: "OCHO (Deluxe)",
                annee: "2021",
                cover: "https://i.scdn.co/image/ab67616d0000b273ec62df02695216324995130e",
                tracks: ["Intro", "Yakalelo", "Rousseau", "Titulaires", "Prince de la Calle", "Gâchette", "Appel manqué", "Daddy", "La vie de rêve", "Rentrer", "Keur nwar", "Droit de veto", "Cello", "Van Damme", "T'as peur", "Le bruit des applaudissements", "100-O", "Game Over", "Compte sur moi"]
            }
        ]
    },
    {
        id: "plk",
        nom: "PLK",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848165/bureau_du_rap/rappeurs/plk.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "885k Abonnés",
        bio: "Polak. L'efficacité incarnée.",
        albums: [
            { titre: "Enna", annee: "2020", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Enna", tracks: ["Bénef", "On sait jamais", "Les comptes", "Billet d'20", "Dégaine de bandit", "Dans les clips", "C'est mort", "Pourtant", "Mamie", "Alleluia", "Chandon et Moët", "Calme", "La vie c'est marrant", "3 en 1", "Toutes générations", "Au fond d'ma tête", "Pilote", "Terrible"] },
            { titre: "Polak", annee: "2018", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Polak", tracks: ["Intro", "Le sel", "Waow", "Séparés", "250", "Idiots", "Polak", "Go", "Bunkoeur", "Monégasque", "Hier", "Ils nous comprennent pas", "Olcho", "Dingue", "Sans suite"] }
        ]
    },
    {
        id: "jul",
        nom: "Jul",
        statut: "tendance",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848145/bureau_du_rap/rappeurs/jul.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "7M Abonnés",
        bio: "L'OVNI. Le plus gros vendeur.",
        albums: [
            { titre: "L'OVNI", annee: "2016", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=L'OVNI", tracks: ["On m'appelle l'ovni", "C'est le son de la gratte", "Tchikita", "Je dis rien", "E.T", "Je fais le sourd", "Qui a dit"] },
            { titre: "My World", annee: "2015", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848181/bureau_du_rap/covers/jul_my_world.jpg", tracks: ["En Y", "Wesh alors", "Comme d'hab", "Lova", "Mamasita", "Amnésia", "Dans l'appart", "Pour les vaillants", "Il me faut des billets"] },
            { titre: "La Machine", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848175/bureau_du_rap/covers/jul_la_machine.jpg", tracks: ["Folie", "Italia", "Sousou", "Bande organisée", "Toute la nuit", "Pas de love", "Ça sent bon", "Pour un rien", "Rentrez pas dans ma tête"] }
        ]
    },
    {
        id: "ninho",
        nom: "Ninho",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848159/bureau_du_rap/rappeurs/ninho.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "12.3M Abonnés",
        bio: "Jefe. Recordman des certifications.",
        albums: [
            { titre: "Jefe", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Jefe", tracks: ["Jefe", "VVS", "Vérité", "Arme de poing", "Sky Priority", "OG", "Aïcha", "Mood", "Athéna", "La maison que je voulais"] },
            { titre: "Destin", annee: "2019", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Destin", tracks: ["Sans peine", "La vie qu'on mène", "Goutte d'eau", "Paris c'est magique", "Jeune Lossa", "Maman ne le sait pas", "Putana", "À découvert", "L'ancien", "Jamais"] },
            { titre: "M.I.L.S 3", annee: "2020", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=M.I.L.S+3", tracks: ["M.I.L.S 3", "Lettre à une femme", "Zipette", "Promo", "Filon", "La puerta", "En chien", "Mauvais Djo", "Gros vendeurs"] }
        ]
    },
    {
        id: "hamza",
        nom: "Hamza",
        statut: "tendance",
        style: "Cloud / Aérien",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848143/bureau_du_rap/rappeurs/hamza.webp",
        certifications: { or: true, platine: true, diamant: false },
        chiffres: "1.8M Abonnés",
        bio: "Sauce God. Le roi du drip.",
        albums: [
            { titre: "Sincèrement", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Sincèrement", tracks: ["Introduction", "Free YSL", "Ma réalité", "Au bout de la nuit", "Sincèrement", "Codéine 19", "Sadio", "Tsunami", "Atasanté"] },
            { titre: "Paradise", annee: "2019", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Paradise", tracks: ["Paradise", "Validé", "HS", "Vibes", "Addiction", "1994", "Goleador", "Minuit 13", "Dale x Love Therapy"] }
        ]
    },
    {
        id: "yame",
        nom: "Yamê",
        statut: "tendance",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848189/bureau_du_rap/rappeurs/yam%C3%AA.jpg",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "442k Abonnés",
        bio: "La révélation 'Bécane'.",
        albums: [
            { titre: "ELOWI", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=ELOWI", tracks: ["Ayo Mba", "Mon bail", "Call of Valhalla", "Lowkey", "Bahwai", "Déter", "Bécane", "Business", "Quête"] }
        ]
    },
    {
        id: "fave",
        nom: "Favé",
        statut: "tendance",
        style: "Jersey",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848141/bureau_du_rap/rappeurs/fav%C3%A9.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "1M Abonnés",
        bio: "L'énergie Jersey. Ascension fulgurante.",
        albums: [
            { titre: "Il le fallait", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Il+le+fallait", tracks: ["Urus", "Flashback", "Mercedes", "Toxic", "Vibes", "Mode avion", "Favé"] }
        ]
    },
    {
        id: "houdi",
        nom: "Houdi",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848143/bureau_du_rap/rappeurs/houdi.jpg",
        chiffres: "121k Abonnés",
        bio: "Le rappeur masqué du 77.",
        albums: [
            { titre: "SUN7", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=SUN7", tracks: ["Sun7", "Médical", "Woka", "Grünt #54", "Sensation", "Mode", "Dernière ligne droite"] },
            { titre: "La Folie des Grandeurs", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=La+Folie", tracks: ["La folie des grandeurs", "Monde", "Belle chanson", "Mélancolie", "Doute"] }
        ]
    },
    {
        id: "la_mano_19",
        nom: "La Mano 1.9",
        statut: "tendance",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848213/bureau_du_rap/rappeurs/la_mano_19.jpg",
        chiffres: "749k Abonnés",
        bio: "La terreur du 19ème. Énergie brute.",
        albums: [
            { titre: "R.A.T.", annee: "2024", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=R.A.T.", tracks: ["R.A.T.", "Halla", "Trahison", "Cartel", "Zone", "La Mano"] }
        ]
    },
    {
        id: "kerchak",
        nom: "Kerchak",
        statut: "tendance",
        style: "Jersey",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848148/bureau_du_rap/rappeurs/kerchak.jpg",
        chiffres: "743k Abonnés",
        bio: "Le retour de la Jersey en France.",
        albums: [
            { titre: "Confiance", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Confiance", tracks: ["Sabor", "Peur", "Jane", "Calme", "Tarzan", "Génération Miracle", "Confiance"] }
        ]
    },
    {
        id: "timal",
        nom: "Timal",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848158/bureau_du_rap/rappeurs/timal.jpg",
        chiffres: "1.4M Abonnés",
        bio: "Trop chaud. Rap agressif.",
        albums: [
            { titre: "Arès", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Arès", tracks: ["Fuego", "Filtré", "La 13", "Arès", "Je me promène", "Bouteille"] },
            { titre: "Trop Chaud", annee: "2018", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Trop+Chaud", tracks: ["Arrivant", "Dans la ville", "Maria", "Du rire aux larmes", "La 9"] }
        ]
    },
    {
        id: "zola",
        nom: "Zola",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848153/bureau_du_rap/rappeurs/zola.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "170k Abonnés",
        bio: "Attitude rockstar et motos.",
        albums: [
            { titre: "Diamant du Bled", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Diamant+du+Bled", tracks: ["Amber", "Toute la journée", "Cartier Panthère", "Envie7vie", "Finish Him", "Gorgée", "L'info", "Cœur de Ice"] },
            { titre: "Survie", annee: "2020", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Survie", tracks: ["Leurs vies", "Pistou", "Papillon", "Ma jolie", "Wow", "Madame", "Pollos Hermanos", "Sanchez", "Vista", "Bad Bi", "Mauvais choix"] },
            { titre: "Cicatrices", annee: "2019", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Cicatrices", tracks: ["Baby Boy", "Fuckboi", "Mugiwara", "Spiderman", "L1 L2", "Extasy", "Kinshasa", "Astroboy", "Zolabeille", "7.65", "Alloicizolaski", "L", "California Girl", "Cicatrices", "B.A.L"] }
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
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848147/bureau_du_rap/rappeurs/la%20feve.webp",
        chiffres: "301k Abonnés",
        bio: "Le chef de file de la New Wave.",
        albums: [
            { titre: "ERRR", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848188/bureau_du_rap/covers/la_f%C3%A8ve_errr.jpg", tracks: ["BELEK", "OTW", "L'APPEL", "CASTRO", "NO HOOK", "SAOULÉ", "CRENSHAW", "RAT INTERLUDE", "ZAZA", "MAUVAIS PAYEUR", "VOIR AILLEURS", "BOXE INTERLUDE"] },
            { titre: "24", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848134/bureau_du_rap/covers/la_f%C3%A8ve_24.jpg", tracks: ["ZOMBIE", "24", "DJ", "LOYAL", "QUI ?", "RIP KEED", "OUTRO", "7W", "MAUVAIS"] },
            { titre: "KOLAF", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848167/bureau_du_rap/covers/la_f%C3%A8ve_kolaf.jpg", tracks: ["LA FOUDRE", "JEUNE INTERLUDE", "VILAIN", "TATOUE", "LADY D", "KOLAF", "DANS LA PIÈCE", "BELLES SOMMES"] }
        ]
    },
    {
        id: "alphawann",
        nom: "Alpha Wann",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848170/bureau_du_rap/rappeurs/alpha%20wann.webp",
        chiffres: "506k Abonnés",
        bio: "Le Don. La référence technique.",
        albums: [
            { titre: "UMLA", annee: "2018", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=UMLA", tracks: ["Stupéfiant et noir", "Pistolet Rose", "Langage Crypté", "Pour celles", "Olive & Tom", "1500", "Ça va ensemble", "Contrex", "La lumière dans les yeux", "Le piège"] },
            { titre: "don dada mixtape vol 1", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848137/bureau_du_rap/covers/alpha_wann_don_dada_mixtape_vol_1.jpg", tracks: ["mitsubishi", "philly flingo", "soldat tue soldat", "ny à fond", "san andreas", "dirty", "velux", "t'as capté"] },
            { titre: "Alph Lauren 3", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848139/bureau_du_rap/covers/alpha_wann_alph_lauren_3.jpg", tracks: ["Paire de Prada", "R5", "Courchevel", "Turban", "Loub", "Shanghaï", "Kim K", "Le jeune de l'année"] }
        ]
    },
    {
        id: "laylow",
        nom: "Laylow",
        statut: "pepite",
        style: "Cloud / Aérien",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848202/bureau_du_rap/rappeurs/laylow.webp",
        chiffres: "876k Abonnés",
        bio: "Mr Anderson. Visionnaire digital.",
        albums: [
            { titre: "TRINITY", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848127/bureau_du_rap/covers/laylow_trinity.jpg", tracks: ["Initialisation", "MEGATRON", "TRINITYVILLE", "VAMONOS", "PLUG", "PIRANA", "HILLZ", "AKIRA", "LOGICIEL TRISTE"] },
            { titre: "L'Étrange Histoire de Mr.Anderson", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Mr.Anderson", tracks: ["UN RÊVE ÉTRANGE", "L'HISTOIRE DE MR. ANDERSON", "IIV", "VOIR LE MONDE BRÛLER", "WINDOW SHOPPER PART. 1", "SPECIAL", "LOST FOREST"] },
            { titre: ".RAW-Z", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848144/bureau_du_rap/covers/laylow_raw-z.jpg", tracks: ["KANYE WEST", "CITY", "MALADIE", "VISA", "AMY", "GOGO", "SWISH", "BOTOX"] }
        ]
    },
    {
        id: "luther",
        nom: "Luther",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848205/bureau_du_rap/rappeurs/luther.webp",
        chiffres: "245k Abonnés",
        bio: "Le mystère d'Avignon.",
        albums: [
            { titre: "GARÇON", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=GARÇON", tracks: ["PK TU M'APL ?", "ALAKAZAM", "BLAKE & MORTIMER", "MA VIE D'AVANT", "LESSGUI", "LE SANG", "TORIEL", "GARÇON"] },
            { titre: "EXIT", annee: "2024", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=EXIT", tracks: ["INTRO", "ROUGE GORON", "MOSSY COBBLESTONE", "T3", "LOOK", "JOURNAL", "SEUIL", "CHÂTEAU FORT", "USINE", "WATERPROOF"] },
            { titre: "Trame", annee: "2020", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Trame", tracks: ["Plaies", "Mani", "Errance", "Trame", "Slow", "Hiver", "Le ciel est bleu", "Fin"] }
        ]
    },
    {
        id: "h_jeunecrack",
        nom: "H JeuneCrack",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848166/bureau_du_rap/rappeurs/h_jeunecrack.jpg",
        chiffres: "46k Abonnés",
        bio: "Le roi du DIY.",
        albums: [
            { titre: "3ème Cycle", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848200/bureau_du_rap/covers/h_jeunecrack_3%C3%A8me_cycle.jpg", tracks: ["La Trinité", "Musée", "3 Meufs", "Vrai Crack", "La Cantine", "L'éther", "Le joueur le plus précieux"] },
            { titre: "MATIÈRE PREMIÈRE", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848140/bureau_du_rap/covers/h_jeunecrack_mati%C3%A8re_premi%C3%A8re.jpg", tracks: ["Au max", "Mauvais", "Présidentiel flow", "La H", "Encore un matin", "T-Shirt blanc", "P.E.C.", "Cactus"] },
            { titre: "2ème Cycle", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848161/bureau_du_rap/covers/h_jeunecrack_2%C3%A8me_cycle.jpg", tracks: ["Introduction", "Onyx", "Donne moi le", "Etoiles", "Cycle", "Tout droit", "Pape du hood", "Fin"] }
        ]
    },
    {
        id: "mairo",
        nom: "Mairo",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848165/bureau_du_rap/rappeurs/mairo.webp",
        chiffres: "52k Abonnés",
        bio: "La technique suisse.",
        albums: [
            { titre: "omar chappier", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848142/bureau_du_rap/covers/mairo_omar_chappier.jpg", tracks: ["la mouche", "crack crack", "2 jackets", "nouvelle écriture", "dope sound", "merci bonne journée", "larousse", "pov 2023"] },
            { titre: "Rougemort", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848177/bureau_du_rap/covers/mairo_rougemort.jpg", tracks: ["Rougemort", "Attentat", "La vigne", "Erythrée", "Kill Bill", "M.A.I.R"] },
            { titre: "95 monde libre", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848133/bureau_du_rap/covers/mairo_95_monde_libre.jpg", tracks: ["g.o.a.t.", "eritrea", "satan 2", "coupe du monde", "superwak"] }
        ]
    },
    {
        id: "khali",
        nom: "Khali",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848169/bureau_du_rap/rappeurs/khali.webp",
        chiffres: "68k Abonnés",
        bio: "L'émotion nasillarde.",
        albums: [
            { titre: "LAÏLA", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=LAÏLA", tracks: ["COULEURS", "D&G", "ME3ZA", "LE MONDE EST À TOI", "FREE", "JAMAIS COMME ILS VONT", "JE FERAI DE MON MIEUX"] },
            { titre: "IL ME RESSEMBLE PAS NON PLUS", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=IL+ME+RESSEMBLE", tracks: ["PEUR ET DÉSIR", "NO PAIN NO GAIN", "UN TRUC ÉTRANGE", "DOULEUR FANTÔME", "LE MONDE EST À TOI 2"] }
        ]
    },
    {
        id: "solalune",
        nom: "So La Lune",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848119/bureau_du_rap/rappeurs/so_la_lune.jpg",
        chiffres: "123k Abonnés",
        bio: "La voix qui divise et fascine.",
        albums: [
            { titre: "Fissure de vie", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Fissure", tracks: ["Soleil mourant", "Fin heureuse", "Medellín", "Range Ro", "Guérison", "En bas", "Vide", "Dona"] },
            { titre: "L'enfant de la pluie", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=L'enfant", tracks: ["Intro (L'enfant de la pluie)", "Remontada", "99", "Perte de temps", "Au bord du précipice", "Opérationnelle", "Interlude"] },
            { titre: "Tsuki", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Tsuki", tracks: ["Tsuki", "Seven", "Rodéo", "Shinobi", "L'aube"] }
        ]
    },
    {
        id: "princewaly",
        nom: "Prince Waly",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848184/bureau_du_rap/rappeurs/prince%20waly.webp",
        chiffres: "52k Abonnés",
        bio: "Le style incarné.",
        albums: [
            { titre: "Moussa", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Moussa", tracks: ["Balotelli", "Problème", "Avertissement", "Mojo", "Mercutio", "Rottweiler", "Walygator"] },
            { titre: "BO Y Z", annee: "2019", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=BOYZ", tracks: ["Yacht", "BO Y Z", "Doggy Bag", "Marsellus Wallace", "Plan", "Smoke", "Californie"] },
            { titre: "Junior", annee: "2016", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Junior", tracks: ["Junior", "Zero", "Soudoyer", "Ginger", "Viseur", "Achille", "Pari"] }
        ]
    },
    {
        id: "benjaminepps",
        nom: "Benjamin Epps",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848137/bureau_du_rap/rappeurs/benjamin%20epps.webp",
        chiffres: "51k Abonnés",
        bio: "La voix de crécelle.",
        albums: [
            { titre: "Fantôme avec chauffeur", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Fantôme", tracks: ["Notorious", "Goom", "J'entends parler de toi", "Matlas", "Dieu bénisse les enfants", "Le plus grand"] },
            { titre: "La grande désillusion", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Désillusion", tracks: ["Bienvenue à Bellevue", "La pression", "Intellectuel violent", "Jeune", "Libre", "Marathon", "Tout va bien"] }
        ]
    },
    {
        id: "hugotsr",
        nom: "Hugo TSR",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848133/bureau_du_rap/rappeurs/hugo%20tsr.webp",
        chiffres: "319k Abonnés",
        bio: "Le fantôme du 18ème.",
        albums: [
            { titre: "Tant qu'on est là", annee: "2017", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Tant+qu'on+est+là", tracks: ["Rei", "Exercice", "Iceberg", "Tant qu'on est là", "La ligne verte", "Là-haut", "Autour de moi"] },
            { titre: "Fenêtre sur rue", annee: "2012", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Fenêtre", tracks: ["Point de départ", "Ujis", "Coma artificiel", "Fenêtre sur rue", "La salle d'attente", "Eldorado", "L'habitude de la poisse"] },
            { titre: "Une vie et quelques", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Une+vie", tracks: ["Périmètre", "Senseï", "Des voix résonnent", "Les mains sales", "Coloc à terre", "2.0.2.1", "Oublie-le"] }
        ]
    },
    {
        id: "demiportion",
        nom: "Demi Portion",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848149/bureau_du_rap/rappeurs/demi_portion.jpg",
        chiffres: "98k Abonnés",
        bio: "L'artisan. Rap sincère.",
        albums: [
            { titre: "Poids plume", annee: "2024", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Poids+plume", tracks: ["Poids plume", "1990", "Retour aux sources", "Petit bonhomme", "La bonne école", "Artisan"] },
            { titre: "La bonne école", annee: "2020", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=La+bonne", tracks: ["La bonne école", "Petit bonhomme", "Artisan", "Poids plume", "1990", "Retour aux sources"] }
        ]
    },
    {
        id: "souffrance",
        nom: "Souffrance",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848192/bureau_du_rap/rappeurs/souffrance.webp",
        chiffres: "32k Abonnés",
        bio: "Le kickeur de Montreuil.",
        albums: [
            { titre: "Eau de source", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Eau+de+source", tracks: ["Intro", "Au boulot", "Khalass", "D'où l'on vient", "Matrice", "Ciel gris", "93", "Métro"] },
            { titre: "Tour de magie", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Tour+de+magie", tracks: ["Intro", "Magicien", "Simba", "Banal", "Au pied du mur", "Poussière", "Kandinsky", "Chaque jour"] },
            { titre: "Tranche de vie", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Tranche", tracks: ["Intro", "Tranche de vie", "Sur le côté", "Les hommes", "Le temps", "L'addition", "Bruit qui court", "La vue"] }
        ]
    },
    {
        id: "isha",
        nom: "Isha",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848186/bureau_du_rap/rappeurs/isha.webp",
        chiffres: "3k Abonnés",
        bio: "Le sage.",
        albums: [
            { titre: "Labrador Bleu", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Labrador", tracks: ["Intro", "La réincarnation de la queue du diable", "FIFA", "Bouteille de gaz", "Tueur de dragon", "A l'époque", "Maître nageur"] },
            { titre: "La Vie Augmente, Vol. 3", annee: "2020", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=LVA3", tracks: ["Durag", "Les Magiciens", "Idole", "Magma", "Tradition", "Bad Boy", "La Vie Augmente", "Décorer les murs"] },
            { titre: "La Vie Augmente, Vol. 2", annee: "2018", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=LVA2", tracks: ["Tosma", "Domam", "L'augmentation", "Rien", "243", "Au grand jamais", "Mp2m", "La maladie"] }
        ]
    },
    {
        id: "limsa",
        nom: "Limsa d'Aulnay",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848194/bureau_du_rap/rappeurs/limsa%20d_aulnay.webp",
        chiffres: "53k Abonnés",
        bio: "La fluidité.",
        albums: [
            { titre: "Logique, Pt. 2", annee: "2020", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Logique2", tracks: ["Seul Two", "4 décembre", "Le Ptit", "ASB", "Duper", "Kany"] },
            { titre: "Logique, Pt. 3", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Logique3", tracks: ["Intro", "Logique", "Jdid", "Le bouchon", "Starting Block", "Comme la lune", "Outro"] },
            { titre: "Bitume Caviar (avec Isha)", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Bitume", tracks: ["Clio 4", "Le plan A", "Inchallah", "A l'étranger", "Tard le soir", "Le chant des cigales", "SR-71", "CR7"] }
        ]
    },
    {
        id: "furax",
        nom: "Furax Barbarossa",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848171/bureau_du_rap/rappeurs/furax%20barbossa.webp",
        chiffres: "53k Abonnés",
        bio: "L'ogre.",
        albums: [
            { titre: "Caravelle", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848149/bureau_du_rap/covers/furax_barbarossa_caravelle.jpg", tracks: ["Intro", "Caravelle", "A l'isolement", "Le poids du monde", "L'encre de nos plumes", "Mauvais œil", "L'ogre"] },
            { titre: "À l'isolement", annee: "2020", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Isolement", tracks: ["Intro", "A l'isolement", "Mauvais œil", "J'ai la haine", "Le meilleur des mondes", "C'est pas grave", "Fin de règne"] },
            { titre: "Testa Nera", annee: "2014", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Testa+Nera", tracks: ["Le parloir", "L'exécution", "La machine", "Testa Nera", "Le contenu", "La France", "Les 3 singes", "Le jugement"] }
        ]
    },
    {
        id: "jazzybazz",
        nom: "Jazzy Bazz",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848172/bureau_du_rap/rappeurs/jazzy%20bazz.webp",
        chiffres: "253k Abonnés",
        bio: "L'élégance.",
        albums: [
            { titre: "Memoria", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Memoria", tracks: ["Memoria", "Cœur de ice", "D.ieu", "Panorama", "Albiceleste", "Nouvelles", "Sablier", "Zone 19"] },
            { titre: "Nuit", annee: "2018", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Nuit", tracks: ["Crépuscule", "El Presidente", "Eternité", "Leticia", "Trompes de Fallope", "Stalker", "Cinquante-cinq", "Sentiments"] },
            { titre: "P-Town", annee: "2016", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=P-Town", tracks: ["P-Town", "Les chemins", "Joker", "Lay Back", "3.14 Boogie", "Le Syndrome", "Visions", "Adrénaline"] }
        ]
    },
    {
        id: "georgio",
        nom: "Georgio",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848202/bureau_du_rap/rappeurs/georgio.webp",
        bio: "Le rap littéraire et rock.",
        albums: [
            { titre: "Héra", annee: "2016", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Héra", tracks: ["L'espoir meurt en dernier", "Du bout de mes doigts", "Héra", "No Future", "Brûle", "Svetlana et Maïakovski", "La terre, je la dévore", "La vue du sang"] },
            { titre: "Sacré", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Sacré", tracks: ["Soto", "Près du feu", "Full moon", "Vers le haut", "Danse", "Emotions masquées", "A l'abri", "Parallèle"] },
            { titre: "XX5", annee: "2018", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=XX5", tracks: ["Hier", "J'en sais rien", "Miroir", "Dans mon élément", "Seul", "Barbara", "Haute", "J'me couche tard"] }
        ]
    },
    {
        id: "zamdane",
        nom: "Zamdane",
        statut: "pepite",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848183/bureau_du_rap/rappeurs/zamdan.webp",
        bio: "La mélancolie solaire.",
        albums: [
            { titre: "Couleur de ma peine", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Couleur", tracks: ["Tout ce qu'il voulait", "Le monde par ma fenêtre", "Incomplet", "Fauve", "Stradivarius", "1,2,3,4", "Naïf", "Boyka"] },
            { titre: "SOLSAD", annee: "2024", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=SOLSAD", tracks: ["Le grand cirque", "Mélancolie criminel", "Printemps", "Bobo", "Million", "Loin d'ici", "Poussière", "A l'ammoniaque"] },
            { titre: "Affamé - Saison 2", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Affamé", tracks: ["Affamé #6", "Affamé #7", "Affamé #8", "Affamé #9", "Affamé #10", "Affamé #11", "Affamé #12", "Affamé #13"] }
        ]
    },
    {
        id: "lujipeka",
        nom: "Lujipeka",
        statut: "pepite",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848164/bureau_du_rap/rappeurs/lujipeka.webp",
        bio: "L'énergie spontanée.",
        albums: [
            { titre: "Montagnes Russes", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Montagnes", tracks: ["Poupée russe", "Pas à ma place", "0.6", "L'eclipse", "Jusqu'au bout", "Meme", "Ahou", "L'autre côté"] },
            { titre: "L.U.J.I.", annee: "2020", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=LUJI", tracks: ["L.U.J.I.", "Meme", "Ahou", "Palace", "L'autre côté", "Bientot", "On ira", "Le sum"] },
            { titre: "P.E.K.A", annee: "2020", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=PEKA", tracks: ["L.U.J.I.", "Meme", "Ahou", "Palace", "L'autre côté", "Bientot", "On ira", "Le sum"] }
        ]
    },
    {
        id: "jewelusain",
        nom: "Jewel Usain",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848189/bureau_du_rap/rappeurs/jewel%20usain.webp",
        bio: "Le bosseur.",
        albums: [
            { titre: "Où les garçons grandissent", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=OLGG", tracks: ["Intro", "Où les garçons grandissent", "Eleanor", "Bleu marine", "Je resterrai", "Je sais", "Jeanne", "Bâtiment"] },
            { titre: "Mode Difficile", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Mode+Difficile", tracks: ["Intro", "Mode Difficile", "Bruce Wayne", "Skurt", "Carré", "CTRL", "Pablito", "Maladie"] },
            { titre: "La rage au ventre", annee: "2015", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=La+Rage", tracks: ["La rage au ventre", "A la dure", "Faut que je brille", "J'ai mal", "Je suis", "Ma vie", "Mon monde", "Pas le temps"] }
        ]
    },
    {
        id: "scylla",
        nom: "Scylla",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848156/bureau_du_rap/rappeurs/scylla.webp",
        bio: "La voix grave.",
        albums: [
            { titre: "Pleine Lune", annee: "2018", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Pleine+Lune", tracks: ["Charbon", "Blade Runner", "L'enfant et la mer", "Clash", "Cicatrices", "Solitude", "Le fantôme sous les toits", "Encore"] },
            { titre: "Abysses", annee: "2013", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Abysses", tracks: ["Abysses", "Second souffle", "Plume d'ange", "Répondez-moi", "Douleurs muettes", "La tête dans les étoiles", "Le salaire de la peur", "Tout va bien"] },
            { titre: "BX Vice", annee: "2019", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=BX+Vice", tracks: ["BX Vice", "Château de cartes", "Le monde est à mes pieds", "Rien d'spécial", "Grand méchant loup", "Cendres", "Vivre", "Sakura"] }
        ]
    },

    // ==========================================
    // 🎤 CONFIRMÉS (Sans Tag)
    // ==========================================
    {
        id: "nekfeu",
        nom: "Nekfeu",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848176/bureau_du_rap/rappeurs/nekfeu.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Cyborg. Le technicien parfait.",
        albums: [
            { titre: "Les Étoiles Vagabondes", annee: "2019", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=LEV", tracks: ["Les étoiles vagabondes", "Alunissons", "Cheum", "Takotsubo", "Menteur menteur", "Ciel noir"] },
            { titre: "Cyborg", annee: "2016", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Cyborg", tracks: ["Humanoïde", "Mauvaise graine", "Squa", "Réalité augmentée", "Avant tu riais", "Esquimaux"] },
            { titre: "Feu", annee: "2015", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Feu", tracks: ["Martin Eden", "Mon âme", "Le horla", "Nique les clones", "Rêve d'avoir des rêves", "Tempête", "Egérie", "Reuf"] }
        ]
    },
    {
        id: "orelsan",
        nom: "Orelsan",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848213/bureau_du_rap/rappeurs/orelsan.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le narrateur. Il raconte la vie des gens normaux.",
        albums: [
            { titre: "Civilisation", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Civilisation", tracks: ["Shonen", "La Quête", "Du propre", "Bébéboa", "Rêve mieux", "Seul avec du monde autour"] },
            { titre: "La fête est finie", annee: "2017", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=La+fête", tracks: ["San", "La fête est finie", "Basique", "Tout va bien", "Défaite de famille", "La lumière"] },
            { titre: "Le chant des sirènes", annee: "2011", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Sirènes", tracks: ["Raelsan", "Le chant des sirènes", "Plus rien ne m'étonne", "Mauvaise idée", "Double vie", "Finir mal", "Si seul", "Des trous dans la tête"] }
        ]
    },
    {
        id: "vald",
        nom: "Vald",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848178/bureau_du_rap/rappeurs/vald.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le génie incompris.",
        albums: [
            { titre: "XEU", annee: "2018", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=XEU", tracks: ["Primitif", "Seum", "DQTP", "Possédé", "Chépakichui", "Désaccordé"] },
            { titre: "Ce monde est cruel", annee: "2019", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Ce+monde", tracks: ["Poche pleine", "NQNTMQMQMB", "Journal pers", "Ce monde est cruel", "Pensionman", "Ma star"] },
            { titre: "Agartha", annee: "2017", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Agartha", tracks: ["Acacia", "Megadeth", "Si j'arrêtais", "Je t'aime", "Totem", "L.D.S"] }
        ]
    },
    {
        id: "dinos",
        nom: "Dinos",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848204/bureau_du_rap/rappeurs/dinos.webp",
        certifications: { or: true, platine: true, diamant: false },
        bio: "Le Spleen.",
        albums: [
            { titre: "Hiver à Paris", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Hiver", tracks: ["Rive Droite", "Moins un", "Chrome Hearts", "Modus Vivendi", "Porte de Mesrine", "Simyaci"] },
            { titre: "Stamina, Memento", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Stamina", tracks: ["Diptyque", "Moins un", "Paranoïaque", "Maman m'aime", "Prends soin de toi", "Je Wanda"] },
            { titre: "Taciturne", annee: "2019", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Taciturne", tracks: ["On meurt bientôt", "XNXX", "OMRI", "N'tiekar", "Oskur", "No Love"] }
        ]
    },
    {
        id: "kobalad",
        nom: "Koba LaD",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848154/bureau_du_rap/rappeurs/koba_lad.jpg",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le style du Bat 7.",
        albums: [
            { titre: "Détail", annee: "2020", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Détail", tracks: ["Encore", "Dans l'avion", "Pas de reine", "Chambre 140", "Feu", "7 sur 7"] },
            { titre: "L'Affranchi", annee: "2019", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=L'Affranchi", tracks: ["Koba du 7", "Cellophané", "Quadrillé", "Matin", "C'est moi", "Amitiés gâchées"] },
            { titre: "VII", annee: "2018", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=VII", tracks: ["Intro", "Chambre 122", "Rentable", "Train de vie", "J'encaisse", "La C"] }
        ]
    },
    {
        id: "ziak",
        nom: "Ziak",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848131/bureau_du_rap/rappeurs/ziak.jpg",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le mystère de la Drill.",
        albums: [
            { titre: "Akimbo", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Akimbo", tracks: ["Parasite", "La kiffance", "Vrai", "Akimbo", "Rhum & machette", "Shonen"] },
            { titre: "Chrome", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Chrome", tracks: ["Démon", "Chrome", "Tombé pour elle", "Même pas un grincement", "Seul", "Prière"] }
        ]
    },
    {
        id: "oboy",
        nom: "Oboy",
        style: "Cloud / Aérien",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848185/bureau_du_rap/rappeurs/oboy.jpg",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Mumble rap sombre et sexy.",
        albums: [
            { titre: "OMEGA", annee: "2019", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=OMEGA", tracks: ["Alpha", "Wu-Tang", "Boy", "R10", "Rien à fêter", "Olympe"] },
            { titre: "No Crari", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=No+Crari", tracks: ["Louis V", "TDB", "Cruel", "Cosmos", "Air", "YSL"] },
            { titre: "Southside", annee: "2018", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Southside", tracks: ["Cobra", "Moula", "Nuit", "Veste", "Extra", "Cabri"] }
        ]
    },
    {
        id: "sch",
        nom: "SCH",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848168/bureau_du_rap/rappeurs/sch.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le S. Voix grave.",
        albums: [
            { titre: "JVLIVS", annee: "2018", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=JVLIVS", tracks: ["Le code", "VNTM", "Pharmacie", "Otto", "Skydweller", "Facile"] },
            { titre: "JVLIVS II", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=JVLIVS+II", tracks: ["Gibraltar", "Marché noir", "Four", "Crack", "La batte", "Le coup d'avance"] },
            { titre: "A7", annee: "2015", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=A7", tracks: ["John Lennon", "A7", "Solide", "Gomorra", "Mauvaises idées", "Liquide"] }
        ]
    },
    {
        id: "pnl",
        nom: "PNL",
        style: "Cloud / Aérien",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848121/bureau_du_rap/rappeurs/pnl.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "La Légende QLF.",
        albums: [
            { titre: "Dans la légende", annee: "2016", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Dans+la+légende", tracks: ["DA", "Naha", "Dans la légende", "Mira", "J'suis QLF", "La vie est belle"] },
            { titre: "Deux Frères", annee: "2019", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Deux+Frères", tracks: ["Au DD", "Autre monde", "Chang", "Blanka", "91's", "A l'ammoniaque"] },
            { titre: "Le Monde Chico", annee: "2015", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Le+Monde+Chico", tracks: ["Le monde ou rien", "Sur Paname", "Oh lala", "J'suis PNL", "Laisse", "La danse de la pluie"] }
        ]
    },
    {
        id: "damso",
        nom: "Damso",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848123/bureau_du_rap/rappeurs/damso.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Dems.",
        albums: [
            { titre: "Ipséité", annee: "2017", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Ipséité", tracks: ["Nwaar Is The New Black", "#QuedusaalVie", "Mosaïque solitaire", "Dieu ne ment jamais", "Signaler", "Kietu"] },
            { titre: "Lithopédion", annee: "2018", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Lithopédion", tracks: ["Introduction", "Festival de rêves", "Baltringue", "Julien", "Silence", "Feu de bois"] },
            { titre: "QALF", annee: "2020", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=QALF", tracks: ["MEVTR", "LIFE LIFE", "DEUX TOILES DE MER", "COEUR EN MIETTES", "POUR L'ARGENT", "BPM"] }
        ]
    },
    {
        id: "freeze",
        nom: "Freeze Corleone",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848182/bureau_du_rap/rappeurs/freeze%20corleone.webp",
        certifications: { or: true, platine: true, diamant: false },
        bio: "Le Chen. Rap codifié.",
        albums: [
            { titre: "LMF", annee: "2020", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=LMF", tracks: ["Freeze Raël", "Hors ligne", "Scellé Part. 2", "Tarkov", "Rap catéchisme", "Stretch 4"] },
            { titre: "Projet Blue Beam", annee: "2018", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Blue+Beam", tracks: ["Intro", "Jeremy Lin", "38 Spécial", "Sacrifice de masse", "Sali", "Fentanyl"] },
            { titre: "ADC", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=ADC", tracks: ["MW2", "Kpop", "L'homme méthode", "Shavkat", "Amérique du Sud", "Bill Clinton"] }
        ]
    },
    {
        id: "2zer",
        nom: "2zer",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848209/bureau_du_rap/rappeurs/2zer.jpg",
        chiffres: "90k Abonnés",
        bio: "Membre de 1995 et du S-Crew.",
        albums: [
             { titre: "Décisions", annee: "2019", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Décisions", tracks: ["Décisions", "Routine", "Clan", "Choix", "Option", "Alternative", "Possibilité", "Eventualité"] },
             { titre: "Zer", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Zer", tracks: ["Zer", "Washington", "95", "Hauts-de-Seine", "Boulogne", "Billancourt", "Pont de Sèvres", "Trap"] }
        ]
    },
    {
        id: "3010",
        nom: "3010",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848191/bureau_du_rap/rappeurs/3010.jpg",
        chiffres: "40k Abonnés",
        bio: "Rappeur et producteur visionnaire.",
        albums: [
             { titre: "Nemo", annee: "2015", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Nemo", tracks: ["Intro", "Nemo", "Outro", "Poisson", "Océan", "Mer", "Eau", "Bleu"] },
             { titre: "Program", annee: "2019", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Program", tracks: ["Program", "3010", "Paris", "Ville", "Lumière", "Nuit", "Jour", "Matin"] }
        ]
    },
    {
        id: "1d1r",
        nom: "1D1R",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848162/bureau_du_rap/rappeurs/1d1r.webp",
        chiffres: "30k Abonnés",
        bio: "Talent brut.",
        albums: [
             { titre: "Meraki", annee: "2025", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Meraki", tracks: ["Intro", "Meraki", "Beldia", "Guedro", "La street", "Pas le temps", "C'est la vie", "Outro"] }
        ]
    },
    {
        id: "63og",
        nom: "63OG",
        statut: "pepite",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848205/bureau_du_rap/rappeurs/63og.webp",
        chiffres: "25k Abonnés",
        bio: "La Trap sombre aux influences US.",
        albums: [
             { titre: "6TR9C9", annee: "2025", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=6TR9C9", tracks: ["Intro", "6TR9C9", "Big Drip", "No Cap", "Money", "Gang", "Shooter", "Trap House"] }
        ]
    },
    {
        id: "404billy",
        nom: "404Billy",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848192/bureau_du_rap/rappeurs/404billy.jpg",
        bio: "Sombre et technique.",
        albums: [
             { titre: "SAMO.", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848162/bureau_du_rap/covers/404billy_samo.jpg", tracks: ["Samo Era", "U. Paix & Amour", "N. B1jam1", "D. Extremist", "E. Musique Noire", "R. JeanJass Speech", "G. Cracovie", "R. Monsieur X"] },
             { titre: "Supernova", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848122/bureau_du_rap/covers/404billy_supernova.jpg", tracks: ["Sombre", "RVRE", "Prends de la vitesse", "404", "Espèce", "Rage", "Titre", "Vérité", "Noir", "Supernova"] },
             { titre: "Process", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848190/bureau_du_rap/covers/404billy_process.jpg", tracks: ["Process", "Error", "Loading", "System Failure", "Reboot", "Virus", "Data", "Shutdown"] }
        ]
    },
    {
        id: "1plike140",
        nom: "1PLIKÉ140",
        statut: "tendance",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848151/bureau_du_rap/rappeurs/1plik%C3%A9140.jpg",
        certifications: { or: true, platine: true, diamant: false },
        chiffres: "642k Abonnés",
        bio: "La Drill de Clamart. Flow sombre et menaçant.",
        albums: [
            { 
                titre: "1PLIKTOI (Vol. 1 & 2)", 
                annee: "2020", 
                cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=1PLIKTOI", 
                tracks: ["Lossa", "Canada", "Dans mon assiette", "Maïna", "Tranquille", "P.A.B", "Dolce Vita", "Lebara", "Cruel", "Maman", "140", "Ong Bak", "Mauvais", "Est-ce que t'assumes"] 
            },
            { 
                titre: "ARRÊTEZ-LE ! (Volume 1 & 2)", 
                annee: "2022", 
                cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=ARRETEZ-LE", 
                tracks: ["Arrêtez-le", "Tranquillement", "Elle", "Perso", "Virements", "60", "Rari", "On l'a", "Belek", "Canada Remix"] 
            }
        ]
    },
    {
        id: "100blaze",
        nom: "100 Blaze",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/100_blaze.jpg",
        certifications: { or: false, platine: false, diamant: false },
        chiffres: "205k Abonnés",
        bio: "Le marseillais aux influences américaines.",
        albums: [
            { 
                titre: "Depuis minot", 
                annee: "2019", 
                cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Depuis+minot", 
                tracks: ["Savoir", "Binks (feat. Koba LaD)", "Fini", "Gucci", "Moula", "Depuis minot", "Ma vie", "J'ai pas le temps", "Avec toi", "Shine", "Love"] 
            }
        ]
    },
    {
        id: "8ruki",
        nom: "8ruki",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848128/bureau_du_rap/rappeurs/8ruki.jpg",
        certifications: { or: false, platine: false, diamant: false },
        chiffres: "12k Abonnés",
        bio: "Le boss de la Plug en France.",
        albums: [
             { titre: "INT8TION", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848128/bureau_du_rap/covers/8ruki_int8tion.jpg", tracks: ["y'a des gars", "ferme la", "OH LAla!!", "ANDREW TATE!!", "C'que j'en pense", "Blueface", "SWAG", "OUh!! (SPICE BOMB)", "Special", "On Go"] },
             { titre: "Green Lobby", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/8ruki_green_lobby.jpg", tracks: ["Lameshit", "Final Boss", "33R", "Blueface", "Rukidonmaj", "STFU", "Juul", "Fafa", "Univ8rs (maman)", "Biff"] },
             { titre: "PoweredByRuki", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848146/bureau_du_rap/covers/8ruki_poweredbyruki.jpg", tracks: ["AYA NAKAMURA*", "YOONIE.Comb*", "CARTIER*"] }
        ]
    },
    {
        id: "aboudebeing",
        nom: "Abou Debeing",
        statut: "tendance",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848166/bureau_du_rap/rappeurs/abou_debeing.jpg",
        certifications: { or: true, platine: false, diamant: false },
        chiffres: "557k Abonnés",
        bio: "Le hitmaker du Wati B.",
        albums: [
            { 
                titre: "Street Love", 
                annee: "2019", 
                cover: "https://placehold.co/400x400/1a1a1a/ff4500?text=Street+Love", 
                tracks: ["C'est mort", "Calme", "Qu'une vie", "Égoïste", "Petit de la tess", "Bye Bye", "Tout est permis", "La force", "Respectez", "Mon frère"] 
            }
        ]
    },
    {
        id: "akhenaton",
        nom: "Akhenaton",
        statut: "legende",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848193/bureau_du_rap/rappeurs/akhenaton.jpg",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "237k Abonnés",
        bio: "La légende marseillaise, leader d'IAM.",
        albums: [
            { 
                titre: "Métèque et Mat", 
                annee: "1995", 
                cover: "https://placehold.co/400x400/1a1a1a/FFD700?text=Métèque+et+Mat", 
                tracks: ["La face B", "Bad Boys de Marseille", "Prométhée", "Métèque et Mat", "Au fin fond d'une contrée", "Je ne suis pas à plaindre", "Un brin de haine", "Eclater un type des Assedic", "J'ai pas de face"] 
            }
        ]
    },
    {
        id: "femtogo",
        nom: "Femtogo",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848148/bureau_du_rap/rappeurs/femtogo.jpg",
        bio: "Baby Hayabusa.",
        albums: [
             { titre: "PRETTY DOLLCORPSE", annee: "2025", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=PRETTY+DOLLCORPSE", tracks: ["WHITE CHAMBER TALK", "100 000 LUMEN", "HANK J", "BACHA BAZI WHISTLEBLOWER", "GEIGER COUNTER", "EVIL KNIEVEL", "SIXTH FLOOR", "G. MCKENNA", "PUKE SOMETHING", "MIRRROIR", "SEPTICÉMIE", "LE MÔME"] },
             { titre: "archives", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848208/bureau_du_rap/covers/femtogo_archives.jpg", tracks: ["ZAGA", "ANY MERCY FORBIDDEN"] }
        ]
    },
    {
        id: "nes",
        nom: "NeS",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848203/bureau_du_rap/rappeurs/nes.webp",
        bio: "Technique et style.",
        albums: [
             { titre: "ÇA VA ALLER", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848158/bureau_du_rap/covers/nes_%C3%A7a_va_aller.jpg", tracks: ["CVA", "A/R", "SCOREBOARD", "LES SAPES QUE J'VEUX", "-94°C", "4X4", "RER C", "LE SOURIRE D'UNE TOMBE"] },
             { titre: "COSMIC", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848138/bureau_du_rap/covers/nes_cosmic.jpg", tracks: ["SPACESHIP", "Exosquelette", "Lex Luthor", "Ninana", "Évidence", "Colibri", "Export", "COSMIC"] }
        ]
    },
    {
        id: "malo",
        nom: "Malo",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848173/bureau_du_rap/rappeurs/malo.webp",
        bio: "Flow tout terrain.",
        albums: [
             { titre: "FROIDCOMMEDEHORS", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848178/bureau_du_rap/covers/malo_froidcommedehors.jpg", tracks: ["4X4", "FROIDCOMMEDEHORS", "LA CAGE", "AU REVOIR", "X3", "PAS DE SEMBLANT", "PORSCHE", "VODOO", "MÉDICATION"] },
             { titre: "404", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=404", tracks: ["404", "Error", "Not Found"] }
        ]
    },
    {
        id: "kekra",
        nom: "Kekra",
        statut: "pepite",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848132/bureau_du_rap/rappeurs/kekra.jpg",
        bio: "Le masqué de Courbevoie.",
        albums: [
             { titre: "Vréel 3", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848159/bureau_du_rap/covers/kekra_vr%C3%A9el_3.jpg", tracks: ["Charbonne", "Pull Up", "Intermission", "Poches Pleines", "Tout Seul", "TLB", "Rap de Zulu", "Gros", "Pas Millionné", "Lexro", "Envoie La Monnaie 3.0", "Capuché"] },
             { titre: "Land", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848211/bureau_du_rap/covers/kekra_land.jpg", tracks: ["Frérot", "10 balles", "Les autres", "Viceland", "J'fais pas ça", "Batman", "Wing Chun", "C'est bon", "Segpa", "Trabajo"] },
             { titre: "Stratos", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848196/bureau_du_rap/covers/kekra_stratos.jpg", tracks: ["Stratos", "Iverson", "J'arrête", "Ingé son", "Bloc de glace"] }
        ]
    },
    {
        id: "bbjacques",
        nom: "B.B. Jacques",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848151/bureau_du_rap/rappeurs/b.b_jacques.webp",
        bio: "L'intensité.",
        albums: [
             { titre: "Poésie d'une pulsion", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848126/bureau_du_rap/covers/bb_jacques_po%C3%A9sie_dune_pulsion.jpg", tracks: ["Fend Le Ciel", "Comme Une Cicatrice", "Déchirée", "La Promesse De L'aube", "Enfin Seul", "Loin D'ici", "Une Impression De Déjà-Vu", "Bleu Cristal", "Lnsc", "Océan Sonore"] },
             { titre: "New Blues, Old Wine", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848197/bureau_du_rap/covers/bb_jacques_new_blues%2C_old_wine.jpg", tracks: ["HARMONIE", "NDSM", "INTÉRIEUR SCANDINAVE", "MÉTRO", "SPORT DE RICHE", "ALEX ADLER", "NO LOVE", "CINCINNATI", "PARDON", "INTERLUDE", "BLUE BIRD", "FUCK LA FAME", "RAINBOW"] }
        ]
    },
    {
        id: "menacesantana",
        nom: "Menace Santana",
        statut: "pepite",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848180/bureau_du_rap/rappeurs/menace_santana.jpg",
        bio: "L'ambiance film d'horreur.",
        albums: [
             { titre: "Into The Dark", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848123/bureau_du_rap/covers/menace_santana_into_the_dark.jpg", tracks: ["1809", "Il Était Une Fois", "FREDDY KRUEGER", "Le Cauchemar Continue", "45 Seconds", "Belek mS", "Into The Dark", "Halloween"] },
             { titre: "!", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848185/bureau_du_rap/covers/menace_santana_%21.jpg", tracks: ["Michael Myers", "Skiboy", "Vendredi 13", "Cauchemar", "Adios"] }
        ]
    },
    {
        id: "deenburbigo",
        nom: "Deen Burbigo",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848160/bureau_du_rap/rappeurs/deen_burbigo.jpg",
        bio: "Grand Cru.",
        albums: [
             { titre: "OG SAN II", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848212/bureau_du_rap/covers/deen_burbigo_og_san_ii.jpg", tracks: ["AM", "Oji", "Sennin", "Jdid", "Mansa", "Désolé", "Savane", "Dommage", "Rêve de gosse", "Tout ce qu'il faut"] },
             { titre: "Cercle vertueux", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848185/bureau_du_rap/covers/deen_burbigo_cercle_vertueux.jpg", tracks: ["Tout est noir", "Cercle vertueux", "Vroom", "Jeu d'échecs", "Pura vida"] },
             { titre: "Grand Cru", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848179/bureau_du_rap/covers/deen_burbigo_grand_cru.jpg", tracks: ["On y va", "Me réveiller", "Pas une autre", "Tu rêves", "Fils de riche"] }
        ]
    },
    {
        id: "34murphy",
        nom: "34Murphy",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848177/bureau_du_rap/rappeurs/34murphy.jpg",
        bio: "Mélodies introspectives.",
        albums: [
             { titre: "la chouette", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848154/bureau_du_rap/covers/34murphy_la_chouette.jpg", tracks: ["Encore un", "No Meta", "Gunz", "Milwaukee", "Tout comme", "L'amour et la haine", "Spécial", "24/24", "Sans fin"] },
             { titre: "9m²", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848150/bureau_du_rap/covers/34murphy_9m%C2%B2.jpg", tracks: ["9m2", "Cage", "Liberté"] },
             { titre: "fata morgana", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848157/bureau_du_rap/covers/34murphy_fata_morgana.jpg", tracks: ["Mirage", "Désert", "Oasis"] }
        ]
    },
    {
        id: "lalaace",
        nom: "Lala &ce",
        statut: "pepite",
        style: "Cloud / Aérien",
        image: "img/RAP-data/lala_&ce.webp",
        bio: "Le flow le plus cool.",
        albums: [
             { titre: "SOLSTICE", annee: "2024", cover: "img/RAP-data/covers/lala_&ce_solstice.jpg", tracks: ["Intro", "No More Time", "Santos", "Licorne", "Drogue d'hiver", "Skit: RadioLaLigne", "Jalouse", "Money to Get to", "BUT", "Sexyy Red", "Apocalypse Sitcom", "Djinzin"] },
             { titre: "Everything Tasteful", annee: "2021", cover: "img/RAP-data/covers/lala_&ce_everything_tasteful.jpg", tracks: ["Sous l'eau", "Show Me Love", "Sipa", "Parapluie", "In Luv Again"] },
             { titre: "Le son d'après", annee: "2019", cover: "img/RAP-data/covers/lala_&ce_le_son_daprès.jpg", tracks: ["Wet", "Amen", "Coulée", "Cellophane"] }
        ]
    },
    {
        id: "keeqaid",
        nom: "Keeqaid",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848207/bureau_du_rap/rappeurs/keeqaid.jpg",
        chiffres: "40k Abonnés",
        bio: "L'énergie brute du 93.",
        albums: [
             { titre: "PATRON", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848163/bureau_du_rap/covers/keeqaid_patron.jpg", tracks: ["Abana", "Arranger", "Bails", "Barzante", "Bâtard", "BÉBÉ", "Bénéfice", "Blablabla"] },
             { titre: "PURIZÉ", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848120/bureau_du_rap/covers/keeqaid_puriz%C3%A9.jpg", tracks: ["Pur", "Mélange", "Chimie", "Dose", "Qualité", "Client", "Four", "Bénéfice"] },
             { titre: "ANTICIPE", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848204/bureau_du_rap/covers/keeqaid_anticipe.jpg", tracks: ["Avant", "Après", "Maintenant", "Futur", "Passé", "Présent", "Demain", "Hier"] }
        ]
    },
    {
        id: "diditrix",
        nom: "Diddi Trix",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848170/bureau_du_rap/rappeurs/didi_trix.jpg",
        chiffres: "80k Abonnés",
        bio: "Le flow bondissant de Bondy.",
        albums: [
             { titre: "Trix City", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848136/bureau_du_rap/covers/didi_trix_trix_city.jpg", tracks: ["Bizz", "Dans la caisse", "Bédo", "Wow", "Périmètre", "Compton", "Yo Diddi", "Chien d'la casse"] },
             { titre: "Cartel de Bondy", annee: "2020", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Cartel", tracks: ["Cartel", "Bondy", "Nord"] },
             { titre: "Dope Boyz", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848197/bureau_du_rap/covers/didi_trix_dope_boyz.jpg", tracks: ["Dope", "Boyz", "Gang"] }
        ]
    },
    {
        id: "junglejack",
        nom: "Jungle Jack",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848200/bureau_du_rap/rappeurs/jungle_jack.jpg",
        chiffres: "25k Abonnés",
        bio: "Technique et flows précis.",
        albums: [
             { titre: "JUNGLE DES ILLUSIONS VOL 2", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848187/bureau_du_rap/covers/jungle_jack_jungle_des_illusions_vol_2.jpg", tracks: ["CHARBON ET DEVOUEMENT", "KABUKI", "SYSTÈME D", "L'ÉQUILIBRISTE", "VUE IMPRENABLE SUR LA JUNGLE", "QUARTIERS EST", "L'HOMME AU PLAN"] },
             { titre: "JUNGLE DES ILLUSIONS VOL 1", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848180/bureau_du_rap/covers/jungle_jack_jungle_des_illusions_vol_1.jpg", tracks: ["Illusion", "Réalité", "Mirage", "Fantasme", "Rêve", "Cauchemar", "Songe", "Chimère"] },
             { titre: "Cognacs & Cigarettes", annee: "2025", cover: "img/RAP-data/covers/jungle_jack_cognacs_&_cigarettes.jpg", tracks: ["Cognac", "Cigarette", "Fumée", "Verre", "Bar", "Nuit", "Jazz", "Blues"] }
        ]
    },
    {
        id: "l2b_gang",
        nom: "L2B Gang",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848153/bureau_du_rap/rappeurs/l2b.jpg",
        chiffres: "60k Abonnés",
        bio: "L'énergie brute du groupe.",
        albums: [
             { titre: "94 bois, Vol. 2", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848199/bureau_du_rap/covers/l2b_94_bois%2C_vol_2.jpg", tracks: ["Montant", "Équipe de Daddy", "Amis d'enfance", "Jeune Banlieusard", "Bitume", "Mec D'ici", "Mauvais Djo", "Elle & Moi"] },
             { titre: "94 bois", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848140/bureau_du_rap/covers/l2b_94_bois.jpg", tracks: ["94 Bois", "Traficante", "Cartel", "Poudrière", "Binks", "Zone", "Secteur", "Quartier"] }
        ]
    },
    {
        id: "h_la_drogue",
        nom: "H. La Drogue",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848163/bureau_du_rap/rappeurs/h_la_drogue.jpg",
        chiffres: "100k Abonnés",
        bio: "Le 92 dans sa forme street.",
        albums: [
             { titre: "Drogue", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848210/bureau_du_rap/covers/h_la_drogue_drogue.jpg", tracks: ["Seklenland Pt.5", "Sonorité", "Navou", "Mauvais Mélange", "Seklenland Pt.1", "Drogue", "Trafic", "Deal"] },
             { titre: "Beretta", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848198/bureau_du_rap/covers/h_la_drogue_beretta.jpg", tracks: ["Beretta", "Seklenland Pt.6", "Tir", "Arme", "Balle", "Chargeur", "Crosse", "Gachette"] }
        ]
    },
    {
        id: "maureen",
        nom: "Maureen",
        statut: "pepite",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848139/bureau_du_rap/rappeurs/maureen.jpg",
        chiffres: "150k Abonnés",
        bio: "Shatta Queen.",
        albums: [
             { titre: "BAD QUEEN", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848201/bureau_du_rap/covers/maureen_bad_queen.jpg", tracks: ["Jiggle", "Kompet", "C'est quoi ça", "Ding Dong", "Pum Fat", "Kompet x Jiggle", "Bad Queen", "Trône"] },
             { titre: "Tic", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848126/bureau_du_rap/covers/maureen_tic.jpg", tracks: ["Tic", "Tac", "Toc", "Tuc", "Tec", "Tyc", "Tzc", "Txc"] }
        ]
    },
    {
        id: "greenmontana",
        nom: "Green Montana",
        style: "Cloud / Aérien",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848167/bureau_du_rap/rappeurs/green_montana.jpg",
        certifications: { or: true, platine: true, diamant: false },
        chiffres: "400k Abonnés",
        bio: "La froideur mélodique.",
        albums: [
             { titre: "Alaska", annee: "2020", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Alaska", tracks: ["Trouble", "Les ennuis", "Maman", "Risques", "J'roule", "Billie Jean", "Ducci", "Palm Angels"] },
             { titre: "Melancholia 999", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Melancholia", tracks: ["Evidemment", "Fumée", "Neymar", "999", "Melancholia", "Tristesse", "Solitude", "Pluie"] },
             { titre: "Nostalgia+", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Nostalgia", tracks: ["Parfum", "Waldorf", "Super héros", "Nostalgie", "Souvenir", "Mémoire", "Oubli", "Passé"] }
        ]
    },
    {
        id: "larry",
        nom: "Larry",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848178/bureau_du_rap/rappeurs/larry.jpg",
        certifications: { or: true, platine: false, diamant: false },
        chiffres: "500k Abonnés",
        bio: "L'énergie de Strasbourg.",
        albums: [
             { titre: "Cité Blanche", annee: "2020", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Cité+Blanche", tracks: ["Woin Woin", "Enfant compliqué", "Sacoche", "Cité", "Blanche", "Neige", "Hiver", "Froid"] },
             { titre: "Petit Prince", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Petit+Prince", tracks: ["Colis", "Booster", "Gosses", "Prince", "Petit", "Roi", "Reine", "Couronne"] },
             { titre: "L.A", annee: "2024", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=LA", tracks: ["V2", "Porsche", "R1", "L.A", "Los Angeles", "USA", "California", "Dream"] }
        ]
    },
    {
        id: "kpri",
        nom: "Kpri",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848209/bureau_du_rap/rappeurs/kpri.jpg",
        chiffres: "80k Abonnés",
        bio: "L'ancien de Lyonzon.",
        albums: [
             { titre: "Kpri Tape Vol 1", annee: "2020", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Vol1", tracks: ["Intro", "Kpri", "Lyon", "Tape", "Vol 1", "Début", "Commencement", "Origine"] },
             { titre: "Kpri Tape Vol 2", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Vol2", tracks: ["Vol 2", "667", "Drill", "Suite", "Continuation", "Progression", "Avancement", "Evolution"] },
             { titre: "Kpri Tape Vol 3", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Vol3", tracks: ["Vol 3", "Fin", "Outro", "Conclusion", "Terminaison", "Aboutissement", "Final", "Dénouement"] }
        ]
    },
    {
        id: "beendo_z",
        nom: "Beendo Z",
        statut: "pepite",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848203/bureau_du_rap/rappeurs/beendo_z.jpg",
        chiffres: "50k Abonnés",
        bio: "Inspiré de faits réels.",
        albums: [
             { titre: "L'Élu", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=L'Élu", tracks: ["Le Papa", "Comics", "L'Élu", "Est-ce que c'est vrai ?", "Booska Z", "Chrome", "EDL 75", "Cas Contact"] }
        ]
    },
    {
        id: "jeunelion",
        nom: "Jeune Lion",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848174/bureau_du_rap/rappeurs/jeune_lion.jpg",
        bio: "L'esprit d'Abidjan.",
        albums: [
             { titre: "HIGHLY SPIRITUAL", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848183/bureau_du_rap/covers/jeune_lion_highly_spiritual.jpg", tracks: ["INTRO MYSTIC (DIEU)", "LION NOUVELLE VAGUE", "23", "SOUL", "PETER TOSH", "RICH", "DISPENSARY", "ROUGE LIBANAIS", "KONGO"] },
             { titre: "BEFORE BABYLONE BURNT", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848135/bureau_du_rap/covers/jeune_lion_before_babylone_burnt.jpg", tracks: ["BABYLONE", "BURNT"] }
        ]
    },
    {
        id: "inocasablanca",
        nom: "Ino Casablanca",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848186/bureau_du_rap/rappeurs/ino_casablanca.jpg",
        bio: "Fusion unique.",
        albums: [
             { titre: "TAMARA", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848144/bureau_du_rap/covers/ino_casablanca_tamara.jpg", tracks: ["NOUVO GROOVE", "ALBUFEIRA", "AVANT LA FIN", "FUCK LARR", "CIAO, MY LOVE !", "PARAPLUI"] },
             { titre: "DEMNA", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848161/bureau_du_rap/covers/ino_casablanca_demna.jpg", tracks: ["DEMNA"] }
        ]
    },
    {
        id: "folies",
        nom: "Folie's",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848168/bureau_du_rap/rappeurs/folie%27s.webp",
        chiffres: "83 Abonnés",
        bio: "Univers coloré.",
        albums: [
             { titre: "Folie's je t'aime", annee: "2024", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Folie's", tracks: ["ILY Intro", "F*Love", "Nosleeve", "BAD!", "Nymphomaniac", "IHY Outro"] }
        ]
    },
    {
        id: "gapman",
        nom: "Gapman",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848171/bureau_du_rap/rappeurs/gapman.jpg",
        bio: "La Trap du Nord.",
        albums: [
             { titre: "Prochaine Chèvre", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848206/bureau_du_rap/covers/gapman_prochaine_ch%C3%A8vre.jpg", tracks: ["Draco / Intro", "Mephisto", "Lundi", "21", "Piège", "Crazy Story", "Monopole", "Souvent"] }
        ]
    },
    {
        id: "jima",
        nom: "Jima",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848129/bureau_du_rap/rappeurs/jima.jpg",
        chiffres: "7k Abonnés",
        bio: "Underground et créatif.",
        albums: [
             { titre: "JIMALDUIN", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848199/bureau_du_rap/covers/jima_jimalduin.jpg", tracks: ["⭢", "sam est =", "attention!! screamer à 0:00", "avance2bz", "staross EX"] }
        ]
    },
    {
        id: "tkkf",
        nom: "TKKF",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848190/bureau_du_rap/rappeurs/tkkf.jpg",
        chiffres: "18k Abonnés",
        bio: "Hyperpop Rap.",
        albums: [
             { titre: "pale blue dot", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848152/bureau_du_rap/covers/tkkf_pale_blue_dot.jpg", tracks: ["0gravité", "Olive et TON-618", "absolute black", "Voyager 1", "Voyager 2", "La fin du voyage", "bye! blue"] }
        ]
    },
    {
        id: "ptitesoeur",
        nom: "Ptite Soeur",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848175/bureau_du_rap/rappeurs/ptite_soeur.jpg",
        chiffres: "53k Abonnés",
        bio: "Talent émergent.",
        albums: [
             { titre: "PRETTY DOLLCORPSE", annee: "2025", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848194/bureau_du_rap/covers/ptite_soeur_pretty_dollcorpse.jpg", tracks: ["WHITE CHAMBER TALK", "100 000 LUMEN", "HANK J", "BACHA BAZI WHISTLEBLOWER", "GEIGER COUNTER", "EVIL KNIEVEL", "SIXTH FLOOR", "G. MCKENNA", "PUKE SOMETHING", "MIRRROIR", "SEPTICÉMIE", "LE MÔME"] }
        ]
    }
];