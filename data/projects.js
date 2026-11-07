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
   • Les projets sont classés automatiquement du plus récent au plus
     ancien, d'après "date" (année-mois, ex. "2026-02"). L'ordre dans
     ce fichier n'a donc pas d'importance. "order: 1" fait passer un
     projet en fin de liste, quelle que soit sa date.
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
    year: 2025,
    date: "2025-12",                          // année-mois : sert à classer les projets (le plus récent en haut)
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
    date: "2026-02",
    order: 1,                                 // placé en dernier, après Neytiri (malgré sa date plus récente)
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

  /* ------------------------------------------------------------------
     N7-T1.2 — casque (images extraites de "HELMET PRESENTATION.pdf")
     ------------------------------------------------------------------ */
  {
    slug: "n7-t1-2",
    title: "N7-T1.2",
    category: ["Hard Surface"],
    year: 2026,                               // à vérifier
    date: "2026-11",                          // projet le plus récent (mois à confirmer)
    featured: true,
    // context: "School project — ARTFX",     // à compléter : école ou perso ?
    role: { en: "Concept, modeling, UVs, texturing, lookdev, rendering", fr: "Concept, modélisation, UVs, texturing, lookdev, rendu" },
    // software: ["Maya", "ZBrush", "Substance 3D Painter"],   // à compléter
    description: {
      en: "A sci-fi helmet, taken from concept to final render.\n\nI gathered helmets with organic, almost insect-like shapes, and technical designs with tubes, respirators and side modules. From the organic references, I kept the fluid volumes and a separate jaw, so the helmet reads as a shell rather than military gear. The technical helmets gave me the round ear module and the rear nozzle. For the palette, I chose an almost fully black base with two turquoise sensors on the forehead and a dark amber visor, finished with a fine mesh texture that echoes the respirator grilles.",
      fr: "Un casque de science-fiction, mené du concept jusqu'au rendu final.\n\nJ'ai rassemblé des casques aux formes organiques, presque insectoïdes, et des designs techniques avec tubes, respirateurs et modules latéraux. Des références organiques, j'ai gardé les volumes fluides et une mâchoire séparée, pour que le casque se lise comme une carapace plutôt que comme un équipement militaire. Les casques techniques m'ont donné le module d'oreille rond et la buse arrière. Pour la palette, j'ai choisi une base presque entièrement noire, deux capteurs turquoise sur le front et une visière ambre foncé, avec une fine texture de maille qui rappelle les grilles des respirateurs.",
    },
    cover: "cover.webp",                      // rendu sur socle
    thumbnail: "thumb.webp",                  // affiche verticale
    gallery: [
      { src: "presentation.webp",     size: "2560x1440", caption: "N7-T1.2 — presentation" },
      { src: "lights-off-front.webp", size: "1000x1000", half: true, caption: "Lights off" },
      { src: "lights-off-rear.webp",  size: "1000x1000", half: true },
      { src: "anim-lit.webp",         size: "1280x720",  half: true, caption: "Animated render stills" },
      { src: "anim-dark.webp",        size: "1280x720",  half: true },
    ],
    breakdown: [
      { title: "Concept", text: { en: "Exploring the line, concept line, then color concept.", fr: "Recherche de silhouette, line de concept, puis concept couleur." },
        images: [{ src: "bd-concept.webp", size: "2550x860" }] },
      { title: "Modeling", text: {
          en: "Between the concept phase and the 3D model, the helmet's appearance evolved: the slit became an amber, wraparound visor; the row of LEDs was replaced by two cyan sensors; the cables vanished, giving way to a smooth shell featuring round ports; and the chin section now retains only its perforated grille.",
          fr: "Entre la phase de concept et le modèle 3D, l'apparence du casque a évolué : la fente est devenue une visière ambre enveloppante, la rangée de LED a laissé place à deux capteurs cyan, les câbles ont disparu au profit d'une coque lisse percée de ports ronds, et la mentonnière ne garde plus que sa grille perforée." },
        images: [
          { src: "bd-wire-front.webp", size: "821x712", half: true },
          { src: "bd-wire-back.webp",  size: "841x754", half: true },
        ] },
      { title: "UVs", text: { en: "UV layout checked with a test pattern.", fr: "Dépliage UV vérifié avec une mire de test." },
        images: [
          { src: "bd-uv-1.webp", size: "810x775", half: true },
          { src: "bd-uv-2.webp", size: "774x691", half: true },
        ] },
      { title: "Textures", text: { en: "Four materials: the main mesh shell, the secondary surfaces, cables & caps, and the amber glass of the visor.", fr: "Quatre matériaux : la coque principale maillée, les surfaces secondaires, les câbles et embouts, et le verre ambre de la visière." },
        images: [
          { src: "bd-mat-main.webp",      size: "900x900", half: true, caption: "Main" },
          { src: "bd-mat-secondary.webp", size: "900x900", half: true, caption: "Secondary" },
          { src: "bd-mat-cables.webp",    size: "900x900", half: true, caption: "Cables / Caps" },
          { src: "bd-mat-glass.webp",     size: "900x900", half: true, caption: "Glass" },
        ] },
      { title: "Visor", text: { en: "Drag the line: with visor on the left, without on the right.", fr: "Fais glisser la ligne : avec visière à gauche, sans visière à droite." },
        compare: { before: "render-no-visor.webp", after: "render-visor.webp", size: "2560x1440" } },
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
    date: "2026-03",                          // année-mois : le plus récent s'affiche en premier
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
