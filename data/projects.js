/* =====================================================================
   PROJECTS.JS — tous tes projets sont ici.
   ---------------------------------------------------------------------
   AJOUTER UN PROJET EN 2 ÉTAPES :
   1) Crée un dossier  assets/images/projects/NOM-DU-PROJET/
      et dépose tes images dedans (cover.webp, thumb.webp, 01.webp…).
   2) Copie un bloc { ... } ci-dessous, colle-le, change les textes.
      "slug" doit être EXACTEMENT le nom du dossier.

   • Les noms d'images simples ("cover.webp") sont cherchés dans le
     dossier du projet. Un chemin complet ("assets/…") ou un lien
     "https://…" fonctionne aussi.
   • Image manquante ou mal nommée = placeholder gris, jamais de casse.
   • L'ordre des projets ici = l'ordre sur le site (et pour
     "projet précédent / suivant").
   • Tout champ optionnel peut être supprimé ou laissé vide.
   ===================================================================== */

window.PROJECTS = [

  /* ------------------------------------------------------------------
     DEMOREEL 2026 — images extraites de la démo (à remplacer par
     des rendus HD quand tu veux, en gardant les mêmes noms)
     ------------------------------------------------------------------ */
  {
    slug: "demoreel-2026",
    title: "Demoreel 2026",
    category: ["Demoreel", "School", "Personal"],
    year: 2026,
    listed: false,                            // n'apparaît ni sur l'accueil ni dans Work : on y accède par le bouton sous la démo
    featured: false,
    context: { en: "Second-year demoreel — ARTFX", fr: "Démo de 2e année — ARTFX" },
    role: { en: "Character, groom, texturing, assets, lighting, rendering", fr: "Character, groom, texturing, assets, éclairage, rendu" },
    software: ["Maya", "Blender", "ZBrush", "Substance 3D Painter", "Yeti", "Arnold", "Nuke", "DaVinci Resolve"],
    description: {
      en: "A mix of personal projects and second-year work from ARTFX. Proud of how this one turned out.\n\nMy main focus was creature design and CFX, especially grooming with Yeti (Peregrine Labs). This direction grew out of the Neytiri project — a real challenge given my lack of experience with this type of workflow, but still my personal favorite to this day.",
      fr: "Un mélange de projets personnels et de travaux de 2e année à ARTFX. Je suis fier du résultat.\n\nJe me suis surtout concentré sur le creature design et le CFX, en particulier le groom avec Yeti (Peregrine Labs). Cette direction est née du projet Neytiri — un vrai défi vu mon manque d'expérience sur ce type de workflow, mais qui reste encore aujourd'hui mon préféré.",
    },
    cover: "cover.webp",
    thumbnail: "thumb.webp",
    videosFirst: true,                        // la vidéo s'affiche avant la galerie
    videos: [
      { url: "assets/video/showreel.mp4", caption: "Demoreel 2026" },
    ],
    gallery: [
      { src: "05-neytiri.webp",          size: "1920x804", caption: "Neytiri — sculpt, texturing, groom" },
      { src: "06-neytiri-closeup.webp",  size: "1920x804" },
      { src: "01-sinraptor.webp",        size: "1920x804", caption: "Sinraptor — all aspects" },
      { src: "03-alien.webp",            size: "1920x804", caption: "Alien — Out of Sight" },
      { src: "02-phoenix.webp",          size: "1920x804", caption: "Phoenix — Encapsulated World" },
      { src: "04-formule1.webp",         size: "1920x804", caption: "Formule 1 — hard surface" },
      { src: "07-diorama.webp",          size: "1920x804", caption: "Diorama — hard surface & comp" },
    ],
    breakdown: [
      { title: "Neytiri — groom", text: { en: "Grayscale, wireframe, guide curves, strand IDs and groom beauty.", fr: "Grayscale, wireframe, courbes guides, strand IDs et beauty du groom." },
        images: [{ src: "bd-neytiri-groom.webp", size: "1920x804" }] },
      { title: "Sinraptor — rig & anim", text: { en: "Final animation, controls, joints and alpha passes.", fr: "Animation finale, contrôleurs, joints et passes alpha." },
        images: [{ src: "bd-sinraptor-rig.webp", size: "1920x804" }] },
    ],
  },

  /* ------------------------------------------------------------------
     NEYTIRI — images extraites de la démo
     ------------------------------------------------------------------ */
  {
    slug: "neytiri",
    title: "Neytiri",
    category: ["Character", "Groom", "Personal"],
    year: 2026,                               // à vérifier
    featured: true,
    context: { en: "Personal project", fr: "Projet personnel" },
    role: { en: "Sculpt, texturing, groom, compositing", fr: "Sculpt, texturing, groom, compositing" },
    software: ["Maya", "ZBrush", "Substance 3D Painter", "Yeti", "Arnold", "Nuke"],   // à vérifier
    description: {
      en: "A character study of Neytiri from Avatar — sculpt, textures and a full braided groom.\n\nThis is the project where my focus on creature work and CFX began: my first real groom in Yeti (Peregrine Labs). A real challenge given how new this workflow was to me, but still my personal favorite to this day.",
      fr: "Une étude de personnage de Neytiri, d'Avatar — sculpt, textures et un groom complet de tresses.\n\nC'est le projet qui a lancé mon intérêt pour le travail de créature et le CFX : mon premier vrai groom sous Yeti (Peregrine Labs). Un vrai défi vu la nouveauté de ce workflow pour moi, mais qui reste encore aujourd'hui mon projet préféré.",
    },
    cover: "cover.webp",
    thumbnail: "thumb.webp",
    gallery: [
      { src: "01-front.webp",         size: "1920x804" },
      { src: "02-three-quarter.webp", size: "1920x804" },
      { src: "03-back.webp",          size: "1920x804" },
      { src: "04-closeup.webp",       size: "1920x804" },
    ],
    breakdown: [
      { title: "Sculpt & groom", text: { en: "Grayscale, wireframe, guide curves, strand IDs and groom beauty.", fr: "Grayscale, wireframe, courbes guides, strand IDs et beauty du groom." },
        images: [{ src: "bd-groom-sheet.webp", size: "1920x804" }] },
      { title: "Textured", text: { en: "Skin textures and headband before the groom.", fr: "Textures de peau et bandeau, avant le groom." },
        images: [
          { src: "bd-textured-front.webp", size: "1000x804", half: true },
          { src: "bd-textured-34.webp",    size: "1000x804", half: true },
        ] },
      { title: "Compositing", text: { en: "Drag the line: final comp on the left, render before compositing on the right.", fr: "Fais glisser la ligne : compositing final à gauche, rendu avant compositing à droite." },
        // compare = slider avant / après (l'« avant » s'affiche à droite)
        compare: { before: "bd-comp-before.webp", after: "bd-comp-after.webp", size: "1920x804" } },
    ],
  },

  /* ------------------------------------------------------------------
     SINRAPTOR — images de la démo + page ArtStation
     ------------------------------------------------------------------ */
  {
    slug: "sinraptor",
    title: "Sinraptor",
    category: ["Character", "Personal"],
    year: 2026,
    featured: true,
    context: { en: "Personal project", fr: "Projet personnel" },
    role: { en: "Full pipeline — sculpt, retopo, texturing, rig, animation, environment, render & comp", fr: "Pipeline complet — sculpt, retopo, texturing, rig, animation, environnement, rendu & comp" },
    software: ["ZBrush", "Substance 3D Painter", "Blender", "Nuke"],
    description: {
      en: "A full Sinraptor, from first sculpt to final shot. I handled the entire production pipeline: sculpting and modeling, then retopology and baking for a clean, optimized mesh. I then designed the rig and animated the creature to truly bring it to life.\n\nFor the texturing, I combined Substance Painter with hand-painted details in Blender. I also used Blender to build the environment, and handled the compositing in Nuke to achieve the final look. This end-to-end workflow allowed me to push the realism of the skin and the overall integration of the shot.",
      fr: "Un Sinraptor complet, de la première sculpture au plan final. J'ai pris en charge tout le pipeline de production : sculpt et modélisation, puis retopologie et baking pour un maillage propre et optimisé. J'ai ensuite conçu le rig et animé la créature pour lui donner vie.\n\nPour les textures, j'ai combiné Substance Painter et des détails peints à la main dans Blender. J'ai aussi construit l'environnement dans Blender, puis réalisé le compositing dans Nuke pour obtenir le rendu final. Ce workflow de bout en bout m'a permis de pousser le réalisme de la peau et l'intégration globale du plan.",
    },
    cover: "render-head.webp",                // rendu ArtStation (net, sans compression vidéo)
    thumbnail: "thumb.webp",                  // gros plan de la tête (vignette de l'accueil et de Work)
    videosFirst: true,
    videos: [
      { url: "shot-closeup.mp4", poster: "shot-closeup-poster.webp", caption: "Close-up shot" },
      { url: "shot-forest.mp4",  poster: "shot-forest-poster.webp",  caption: "Forest shot" },
    ],
    gallery: [
      { src: "01-closeup.webp",   size: "1920x804" },
      { src: "02-forest.webp",    size: "1920x804" },
    ],
    breakdown: [
      { title: "Sculpt", text: { en: "Retopologized mesh, then the detailed sculpt.", fr: "Maillage retopologisé, puis le sculpt détaillé." },
        images: [
          { src: "bd-retopo.webp",   size: "1187x667", half: true, caption: "Retopo" },
          { src: "bd-detailed.webp", size: "1188x667", half: true, caption: "Detailed sculpt" },
        ] },
      { title: "Texture", text: { en: "Substance Painter textures with hand-painted details in Blender.", fr: "Textures Substance Painter et détails peints à la main dans Blender." },
        images: [
          { src: "bd-textured.webp",     size: "1183x667" },
          { src: "bd-sculpt-side.webp",  size: "1000x804", half: true },
          { src: "bd-sculpt-front.webp", size: "1000x804", half: true },
        ] },
      { title: "Rig & anim", text: { en: "Rig, then final animation with controls, joints and alpha passes.", fr: "Rig, puis animation finale avec contrôleurs, joints et passes alpha." },
        images: [
          { src: "bd-rigged.webp", size: "1189x668" },
          { src: "bd-rig.webp",    size: "1920x804" },
        ] },
      { title: "Set dressing", text: { en: "Clay render, then the forest set built around the creature in Blender.", fr: "Rendu clay, puis le décor de forêt construit autour de la créature dans Blender." },
        images: [
          { src: "bd-clay.webp", size: "1000x804", half: true },
          { src: "bd-set.webp",  size: "1000x804", half: true },
        ] },
      { title: "Render & comp", text: { en: "Final lighting, render and compositing in Nuke.", fr: "Éclairage, rendu et compositing finaux dans Nuke." },
        images: [{ src: "bd-comp.webp", size: "1920x804" }] },
    ],
  },

  /* ==================================================================
     MODÈLE VIDE À COPIER
     Il est désactivé car il se trouve à l'intérieur de ce commentaire.
     Copie de la ligne "{" jusqu'à la ligne "}," (incluses), puis colle
     au-dessus de ce cadre, juste après le projet précédent.
     ==================================================================
  {
    slug: "mon-nouveau-projet",
    title: "Mon nouveau projet",
    category: "Character",
    year: 2026,
    featured: false,
    context: "Personal project",
    role: "Character Artist",
    software: ["Maya", "ZBrush"],
    description: "Short description.",
    cover: "cover.webp",
    thumbnail: "thumb.webp",
    gallery: [
      { src: "01.webp", size: "1920x1080", caption: "" },
    ],
    videos: [
      // { url: "https://www.youtube.com/watch?v=XXXXXXXXXXX", caption: "Turntable" },
      // { url: "https://vimeo.com/123456789" },
    ],
    breakdown: [],
  },
     ================================================================== */

];
