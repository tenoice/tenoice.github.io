/* =====================================================================
   SITE.JS — tes textes, tes liens, ta showreel.
   ---------------------------------------------------------------------
   Règles simples :
   • Le texte est entre guillemets "comme ceci".
   • Chaque ligne se termine par une virgule.
   • Un texte peut être bilingue : { en: "Hello", fr: "Bonjour" }
     ou juste en anglais : "Hello" (le FR affichera alors l'anglais).
   • Les lignes qui commencent par // sont des commentaires (ignorées).
   ===================================================================== */

window.SITE = {

  /* ---------- Identité ---------- */
  name: "Lorenzo Brun Di Dia",   // chaque espace = un mot séparé dans le grand titre de l'accueil
  role: {
    en: "Character Artist & Groom Artist — 3D Generalist",
    fr: "Character Artist & Groom Artist — Généraliste 3D",
  },
  // Phrase d'accroche provisoire : modifie-la librement.
  tagline: {
    en: "I build believable characters, from the first sculpt to the last strand of hair.",
    fr: "Je crée des personnages crédibles, de la première sculpture à la dernière mèche de cheveux.",
  },
  location: "Montpellier, France",
  email: "brundidialorenzo@gmail.com",

  /* ---------- Accueil : image qui flotte à droite du nom ----------
     "" = pas d'image : le nom et les icônes sont alors centrés.
     Pour remettre le visage : heroImage: "assets/images/hero.webp" */
  heroImage: "",

  /* ---------- Icônes des logiciels sous ton nom (ordre = ordre d'affichage) ----------
     Icône : image carrée claire sur fond transparent (PNG), dans assets/images/tools/ */
  tools: [
    { name: "ZBrush",               icon: "assets/images/tools/zbrush.png" },
    { name: "Maya",                 icon: "assets/images/tools/maya.png" },
    { name: "Blender",              icon: "assets/images/tools/blender.png" },
    { name: "Nuke",                 icon: "assets/images/tools/nuke.png" },
    { name: "Substance 3D Painter", icon: "assets/images/tools/substance-painter.png" },
    { name: "DaVinci Resolve",      icon: "assets/images/tools/davinci-resolve.png" },
    { name: "Yeti",                 icon: "assets/images/tools/yeti.png" },
    { name: "Arnold",               icon: "assets/images/tools/arnold.png" },
    { name: "Houdini",              icon: "assets/images/tools/houdini.svg" },
  ],

  /* ---------- Réseaux (ordre = ordre d'affichage) ---------- */
  socials: [
    { label: "ArtStation", url: "https://www.artstation.com/lorenzo_brun" },
    { label: "LinkedIn",   url: "https://www.linkedin.com/in/lorenzobrun/" },
    { label: "Instagram",  url: "https://www.instagram.com/lorenzo__bdd/" },
  ],

  /* ---------- Langue ---------- */
  defaultLang: "en",      // "en" ou "fr"
  showLangSwitch: true,   // false pour cacher le bouton EN / FR

  /* ---------- Showreel / modèle 3D (page d'accueil) ----------
     type: "video"  → une vidéo en boucle (fichier .mp4 OU lien YouTube / Vimeo)
     type: "model"  → un modèle 3D .glb que l'on peut tourner à la souris
     type: "none"   → la section est masquée
     Si le fichier n'existe pas encore, un placeholder s'affiche. */
  showreel: {
    type: "video",
    video: "assets/video/showreel.mp4",
    poster: "",                              // image affichée avant la lecture (optionnel)
    model: "assets/models/character.glb",
    label: { en: "Demoreel 2026", fr: "Demoreel 2026" },
    page: "demoreel-2026",                   // slug du projet ouvert par le bouton sous la vidéo ("" = pas de bouton)
  },

  /* ---------- Page d'accueil ---------- */
  featuredLimit: 6,       // nombre max de projets dans "Selected Work"

  /* ---------- Ordre des filtres sur la page Work ----------
     Les catégories absentes de cette liste s'ajoutent automatiquement à la fin. */
  categoriesOrder: ["Character", "Groom", "Personal", "School"],

  /* ---------- Page About ---------- */
  about: {
    portrait: "assets/images/about/portrait.webp",   // ta photo (format portrait 4:5)
    bio: {
      en: "I'm a third-year Character Design student at ARTFX in Montpellier. As a 3D generalist I work across the whole pipeline — modeling, sculpting, texturing, lookdev, lighting and rendering — with a particular focus on character design and grooming: hair, fur, and everything that makes a creature feel alive.\n\nI care about anatomy, silhouette and the small details that sell a character up close.",
      fr: "Je suis étudiant en 3e année de Character Design à ARTFX Montpellier. Généraliste 3D, je travaille sur tout le pipeline — modélisation, sculpture, texturing, lookdev, éclairage et rendu — avec une spécialisation en character design et en groom : cheveux, poils, fourrure, tout ce qui rend une créature vivante.\n\nJ'accorde une grande importance à l'anatomie, à la silhouette et aux petits détails qui rendent un personnage crédible de près.",
    },
    education: [
      {
        years: "2024 — present",
        school: "ARTFX — Montpellier",
        title: { en: "Character Design (3D) — 3rd year", fr: "Character Design (3D) — 3e année" },
      },
    ],
    skills: {
      en: ["Character modeling & sculpting", "Grooming — hair, fur, facial hair", "Texturing & lookdev", "Retopology & UVs", "Lighting & rendering", "Full 3D pipeline"],
      fr: ["Modélisation & sculpture de personnages", "Groom — cheveux, fourrure, pilosité", "Texturing & lookdev", "Retopologie & UVs", "Éclairage & rendu", "Pipeline 3D complet"],
    },
    software: ["Maya", "ZBrush", "Substance 3D Painter", "Yeti", "Houdini", "Blender", "Arnold", "Nuke", "DaVinci Resolve"],
    languages: { en: "French (native), English (professional)", fr: "Français (natif), anglais (professionnel)" },
    cv: "assets/cv/Lorenzo-Brundidia-CV.pdf",
  },

  /* ---------- Page Contact ----------
     Formulaire optionnel : crée un compte gratuit sur formspree.io,
     crée un formulaire et colle ici son identifiant (ex. "xyzabcd").
     Laisse "" pour n'afficher que l'email. */
  contact: {
    formspreeId: "",
    intro: {
      en: "This site is simply a place to share what I make. If you'd like to talk characters, grooms or creatures — or just say hi — my inbox is open.",
      fr: "Ce site sert simplement à partager ce que je fais. Si tu veux parler personnages, groom ou créatures — ou juste dire bonjour — ma boîte mail est ouverte.",
    },
  },

  /* ---------- Textes de l'interface (menus, boutons…) ---------- */
  ui: {
    en: {
      nav_work: "Work", nav_about: "About", nav_contact: "Contact", menu: "Menu", close: "Close",
      skip: "Skip to content", portfolio: "Portfolio",
      selected_work: "Selected Work", all_projects: "All projects", view_project: "View project",
      work_title: "Work", filter_all: "All", filter_label: "Filter projects by category",
      overview: "Overview", drag_rotate: "Drag to rotate",
      year: "Year", role: "Role", software: "Software", context: "Context", category: "Category",
      gallery: "Gallery", videos: "Video", breakdown: "Breakdown",
      prev: "Previous project", next: "Next project", back_to_work: "Back to all projects",
      not_found: "This project doesn't exist (yet).",
      about_title: "About", education: "Education", skills: "Skills", languages: "Languages",
      download_cv: "Download CV (PDF)",
      contact_title: "Let's talk.", email: "Email", elsewhere: "Elsewhere", copy: "Copy", copied: "Copied",
      form_title: "Or send a message", form_name: "Name", form_email: "Your email", form_message: "Message",
      form_send: "Send message", form_sending: "Sending…", form_ok: "Thanks — your message has been sent.",
      form_error: "Something went wrong. Please email me directly.",
      placeholder: "Your render here", placeholder_video: "Your video here", placeholder_portrait: "Your portrait here",
      showreel_soon: "Showreel coming soon", model_soon: "3D model coming soon",
      pause: "Pause video", play: "Play video", sound_on: "Sound on", sound_off: "Sound off",
      reel_page: "Demoreel breakdown",
      compare_before: "Before", compare_after: "After", compare_label: "Before / after comparison",
      open_image: "Open image fullscreen", back_top: "Back to top", rights: "All rights reserved",
      lang_label: "Language", page_404: "This page wandered off.", home: "Back home",
      legal_nav: "Legal", legal_link: "Legal notice & privacy", terms_link: "Terms of use", updated: "Last updated",
    },
    fr: {
      nav_work: "Projets", nav_about: "À propos", nav_contact: "Contact", menu: "Menu", close: "Fermer",
      skip: "Aller au contenu", portfolio: "Portfolio",
      selected_work: "Projets choisis", all_projects: "Tous les projets", view_project: "Voir le projet",
      work_title: "Projets", filter_all: "Tous", filter_label: "Filtrer les projets par catégorie",
      overview: "Aperçu", drag_rotate: "Glisse pour tourner",
      year: "Année", role: "Rôle", software: "Logiciels", context: "Contexte", category: "Catégorie",
      gallery: "Galerie", videos: "Vidéo", breakdown: "Breakdown",
      prev: "Projet précédent", next: "Projet suivant", back_to_work: "Retour aux projets",
      not_found: "Ce projet n'existe pas (encore).",
      about_title: "À propos", education: "Formation", skills: "Compétences", languages: "Langues",
      download_cv: "Télécharger mon CV (PDF)",
      contact_title: "Parlons-en.", email: "Email", elsewhere: "Ailleurs", copy: "Copier", copied: "Copié",
      form_title: "Ou envoie un message", form_name: "Nom", form_email: "Ton email", form_message: "Message",
      form_send: "Envoyer", form_sending: "Envoi…", form_ok: "Merci — ton message a bien été envoyé.",
      form_error: "Une erreur est survenue. Écris-moi directement par email.",
      placeholder: "Ton rendu ici", placeholder_video: "Ta vidéo ici", placeholder_portrait: "Ta photo ici",
      showreel_soon: "Showreel bientôt disponible", model_soon: "Modèle 3D bientôt disponible",
      pause: "Mettre en pause", play: "Lire la vidéo", sound_on: "Activer le son", sound_off: "Couper le son",
      reel_page: "Détails de la démo",
      compare_before: "Avant", compare_after: "Après", compare_label: "Comparaison avant / après",
      open_image: "Ouvrir l'image en plein écran", back_top: "Haut de page", rights: "Tous droits réservés",
      lang_label: "Langue", page_404: "Cette page s'est égarée.", home: "Retour à l'accueil",
      legal_nav: "Informations légales", legal_link: "Mentions légales & confidentialité", terms_link: "Conditions d'utilisation", updated: "Dernière mise à jour",
    },
  },
};
