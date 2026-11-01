# Guide du portfolio — Lorenzo Brun Di Dia

Ce guide est écrit pour quelqu'un qui n'a jamais codé. Tu n'as besoin de modifier que **deux fichiers** au quotidien :

- `data/projects.js` → tes projets
- `data/site.js` → tes textes, tes liens, ta showreel

Le reste (mise en page, animations, etc.) se fait tout seul.

---

## Sommaire

1. [Ce qu'il y a dans le dossier](#1-ce-quil-y-a-dans-le-dossier)
2. [Ouvrir le site sur ton PC](#2-ouvrir-le-site-sur-ton-pc)
3. [Les 4 règles d'or pour modifier un fichier](#3-les-4-règles-dor-pour-modifier-un-fichier)
4. [Ajouter, modifier, supprimer un projet](#4-ajouter-modifier-supprimer-un-projet)
5. [Tailles et formats d'images](#5-tailles-et-formats-dimages)
6. [Changer la couleur, les polices, les textes et les liens](#6-changer-la-couleur-les-polices-les-textes-et-les-liens)
7. [Ajouter ta showreel ou ton modèle 3D](#7-ajouter-ta-showreel-ou-ton-modèle-3d)
8. [Activer le formulaire de contact (optionnel)](#8-activer-le-formulaire-de-contact-optionnel)
9. [Mettre le site en ligne gratuitement](#9-mettre-le-site-en-ligne-gratuitement)
10. [Brancher un nom de domaine (plus tard)](#10-brancher-un-nom-de-domaine-plus-tard)
11. [En cas de problème](#11-en-cas-de-problème)
12. [Pages légales](#12-pages-légales)

---

## 1. Ce qu'il y a dans le dossier

```
index.html          Page d'accueil          ┐
work.html           Grille des projets      │  Ne pas modifier :
project.html        Modèle de page projet   │  ces pages se remplissent
about.html          Page About              │  toutes seules.
contact.html        Page Contact            │
404.html            Page "introuvable"      ┘

data/
  site.js           ★ Tes textes, liens, showreel, traductions FR
  projects.js       ★ TOUS tes projets

css/
  style.css         Apparence. Tu ne touches qu'au tout début (couleur, polices)

js/
  app.js            Le moteur du site (ne pas toucher)
  lightbox.js       Le plein écran des images (ne pas toucher)

assets/
  images/projects/  Un sous-dossier par projet (neytiri, sinraptor, demoreel-2026…)
  images/about/     Ta photo
  video/            Ta showreel
  models/           Ton modèle 3D .glb
  cv/               Ton CV en PDF
  favicon.svg       Petite icône de l'onglet du navigateur

GUIDE.md            Ce guide
```

Les fichiers `LISEZ-MOI.txt` dans les dossiers d'images te rappellent quels noms de fichiers sont attendus. Tu peux les supprimer quand tu veux.

Le dossier caché `.claude` est un réglage technique qui m'a servi à lancer le site pendant qu'on travaillait : tu peux l'ignorer ou le supprimer.

---

## 2. Ouvrir le site sur ton PC

### Méthode la plus simple
**Double-clique sur `index.html`.** Le site s'ouvre dans ton navigateur. C'est tout.

Après chaque modification d'un fichier, enregistre-le puis appuie sur **F5** dans le navigateur pour voir le changement.

### Pour modifier les fichiers : installe VS Code (gratuit, recommandé)
Le Bloc-notes de Windows fonctionne, mais **Visual Studio Code** (code.visualstudio.com) colore le code et signale les erreurs de virgule en rouge, ce qui évite 90 % des problèmes.

1. Installe VS Code.
2. Menu **Fichier → Ouvrir le dossier…** → choisis le dossier du site.
3. Clique sur `data/projects.js` dans la colonne de gauche pour l'ouvrir.

### Si tu utilises un modèle 3D (.glb)
Pour des raisons de sécurité, le navigateur refuse de charger un fichier 3D quand on ouvre le site par double-clic. Pour le voir sur ton PC :

1. Dans VS Code, clique sur l'icône **Extensions** (les 4 petits carrés à gauche).
2. Cherche **Live Server** et installe-la.
3. Fais un clic droit sur `index.html` → **Open with Live Server**.

Le site s'ouvre alors à une adresse du type `http://127.0.0.1:5500`, et se recharge tout seul à chaque enregistrement. Une fois en ligne, le modèle 3D fonctionne normalement.

---

## 3. Les 4 règles d'or pour modifier un fichier

Les fichiers `data/*.js` sont du texte avec une ponctuation précise. Respecte ces 4 règles et tout ira bien :

1. **Le texte est entre guillemets droits** : `"Mon projet"`. Si ton texte contient un guillemet `"`, écris `\"`. L'apostrophe `'` ne pose aucun problème.
2. **Chaque ligne `nom: valeur` se termine par une virgule** `,`
3. **Chaque `{` a son `}`, chaque `[` a son `]`.**
4. **Les nombres n'ont pas de guillemets** (`year: 2026`), pas plus que `true` / `false` (`featured: true`).

Les lignes qui commencent par `//` et les zones entre `/*` et `*/` sont des **commentaires** : le site les ignore. Tu peux en écrire pour toi.

**Texte bilingue.** N'importe quel texte peut être écrit de deux façons :

```js
title: "Forest Spirit",                                   // anglais seulement
title: { en: "Forest Spirit", fr: "Esprit de la forêt" }, // anglais + français
```

Si tu n'écris que l'anglais, la version FR du site affiche l'anglais. Pratique pour traduire plus tard.

**Retour à la ligne dans une description** : écris `\n\n` pour commencer un nouveau paragraphe.

---

## 4. Ajouter, modifier, supprimer un projet

### Ajouter un projet en 2 étapes

**Étape 1 — Les images.**
Crée un dossier dans `assets/images/projects/`. Son nom est le **slug** du projet : en minuscules, sans espaces, sans accents, avec des tirets. Par exemple `forest-spirit`.
Dépose tes images dedans :

```
assets/images/projects/forest-spirit/
  cover.webp     ← grande image en haut de la page projet
  thumb.webp     ← vignette dans les grilles (optionnelle)
  01.webp
  02.webp
  03.webp
```

**Étape 2 — Le bloc de texte.**
Ouvre `data/projects.js`, copie ce bloc et colle-le **juste après le `},` du dernier projet** (avant la ligne `];` tout en bas) :

```js
  {
    slug: "forest-spirit",
    title: "Forest Spirit",
    category: ["Character", "Groom"],
    year: 2026,
    featured: true,
    context: "School project — ARTFX",
    role: "Character Artist — sculpt, groom, lookdev",
    software: ["Maya", "ZBrush", "XGen", "Substance 3D Painter", "Arnold"],
    description: "A forest creature covered in moss-like fur.\n\nThe groom was built in XGen with three layers of clumping.",
    cover: "cover.webp",
    thumbnail: "thumb.webp",
    gallery: [
      { src: "01.webp", size: "1920x1080", caption: "Final render" },
      { src: "02.webp", size: "1080x1350", half: true },
      { src: "03.webp", size: "1080x1350", half: true },
    ],
    videos: [
      { url: "https://vimeo.com/123456789", caption: "Turntable" },
    ],
    breakdown: [
      { title: "Groom", text: "Guides, clumping and noise.", images: [ { src: "bd-groom.webp" } ] },
    ],
  },
```

Enregistre, appuie sur F5 : le projet apparaît sur la page Work (et sur l'accueil si `featured: true`), et sa page est créée automatiquement.

### Les champs, un par un

| Champ | Obligatoire ? | Rôle |
|---|---|---|
| `slug` | **oui** | Identifiant unique = nom exact du dossier d'images. Il apparaît dans l'adresse de la page : `project.html?p=forest-spirit` |
| `title` | **oui** | Titre affiché |
| `category` | conseillé | `"Groom"` ou plusieurs : `["Character", "Groom"]`. Les filtres de la page Work se créent tout seuls à partir de ce que tu écris ici |
| `year` | conseillé | Année, sans guillemets |
| `featured` | non | `true` = affiché dans "Selected Work" sur l'accueil (6 maximum, dans l'ordre du fichier) |
| `listed` | non | `false` = la page existe mais n'apparaît ni sur l'accueil ni dans Work (c'est le cas de la page de ta démo, ouverte par le bouton sous la vidéo) |
| `videosFirst` | non | `true` = la section vidéo s'affiche avant la galerie |
| `context` | non | École, perso, client… |
| `role` | non | Ton rôle sur le projet |
| `software` | non | Liste des logiciels |
| `description` | non | Texte de présentation (`\n\n` = nouveau paragraphe) |
| `cover` | conseillé | Grande image du haut |
| `thumbnail` | non | Vignette des grilles. Si absente, la cover est utilisée (recadrée) |
| `gallery` | non | Liste d'images. Voir détails ci-dessous |
| `videos` | non | Liste de vidéos. La section est masquée si la liste est vide |
| `breakdown` | non | Étapes de fabrication. La section est masquée si `[]` ou absente |

**Une image de galerie** peut contenir :

- `src` : le nom du fichier (cherché dans le dossier du projet). Tu peux aussi mettre un chemin complet (`"assets/…"`) ou un lien `https://…`
- `size` : les dimensions, par exemple `"1920x1080"`. Elles servent seulement à dessiner le bon placeholder tant que l'image manque, et à réserver la place pendant le chargement
- `caption` : une légende (optionnelle)
- `alt` : une description pour les personnes malvoyantes (optionnelle ; sinon la légende ou le titre est utilisé)
- `half: true` : l'image prend une demi-largeur. Mets-en deux à la suite pour les avoir côte à côte (sur mobile elles s'empilent)

**Une vidéo** : `{ url: "...", caption: "..." }`. L'`url` peut être :

- un lien YouTube : `https://www.youtube.com/watch?v=XXXXXXXXXXX` ou `https://youtu.be/XXXXXXXXXXX`
- un lien Vimeo : `https://vimeo.com/123456789`
- un fichier local `.mp4` déposé dans le dossier du projet : `"turntable.mp4"`. Tu peux ajouter `poster: "turntable-poster.webp"`, une image affichée avant la lecture

**Une étape de breakdown** : `{ title: "...", text: "...", images: [ ... ] }` (les images s'écrivent comme celles de la galerie).

**Un slider avant / après** dans une étape de breakdown : ajoute `compare` (l'image « avant » s'affiche à droite). Les deux images doivent avoir exactement le même cadrage.

```js
      { title: "Compositing", text: "...",
        compare: { before: "rendu-brut.webp", after: "comp-final.webp", size: "1920x804" } },
```

### Modifier un projet
Change le texte entre guillemets, enregistre, F5.
Pour remplacer une image, garde le même nom de fichier et écrase l'ancienne dans le dossier (si le navigateur affiche encore l'ancienne image, fais **Ctrl + F5**).

### Supprimer un projet
Sélectionne tout son bloc, de la ligne `{` jusqu'à la ligne `},` incluse, et supprime-le. Tu peux aussi supprimer son dossier d'images.
Pour le **masquer sans le supprimer**, entoure le bloc de `/*` et `*/`.

### Changer l'ordre
L'ordre dans `projects.js` = l'ordre sur le site (et pour « projet précédent / suivant »). Couper-coller un bloc entier suffit.

### Des exemples complets
Les projets d'exemple ont été retirés. Pour t'inspirer, regarde les blocs `neytiri` (avec slider avant/après) et `sinraptor` (avec vidéos et breakdown en 5 étapes) dans `data/projects.js`. Un modèle vide à copier se trouve tout en bas du fichier.

---

## 5. Tailles et formats d'images

| Usage | Format (ratio) | Taille conseillée | Poids visé |
|---|---|---|---|
| **Couverture** (`cover`) | 16:9 paysage | 2560 × 1440 (1920 × 1080 minimum) | < 500 Ko |
| **Vignette** (`thumbnail`) | 4:5 portrait | 1200 × 1500 | < 250 Ko |
| **Galerie** pleine largeur | libre (16:9 conseillé) | 2560 px de large | < 600 Ko |
| **Galerie** demi-largeur (`half`) | libre (4:5 ou 1:1 conseillés) | 1400 px de large | < 350 Ko |
| **Photo About** | 4:5 portrait | 1200 × 1500 | < 250 Ko |

- La couverture et la vignette sont **recadrées automatiquement** pour remplir leur cadre. Garde ton sujet bien centré.
- Les images de galerie s'affichent **entières**, sans recadrage, quel que soit leur format.

**Format de fichier : WebP** (`.webp`) de préférence. Il est 2 à 3 fois plus léger qu'un JPG à qualité égale, ce qui rend le site rapide. Le JPG et le PNG fonctionnent aussi.

**Convertir en WebP gratuitement :** va sur **squoosh.app**, glisse ton image, choisis « WebP » à droite, qualité 80 à 85, redimensionne si besoin, puis télécharge. Photoshop sait aussi le faire (Fichier → Exporter → Exporter sous → WebP).

**Noms de fichiers :** minuscules, sans espaces ni accents (`01.webp`, `groom-closeup.webp`). Le nom écrit dans `projects.js` doit être **exactement** le même, extension comprise. Windows masque parfois les extensions : dans l'Explorateur, onglet **Affichage → Afficher → Extensions de noms de fichiers**.

**Image manquante ou mal nommée ?** Pas de panique : un placeholder gris apparaît à sa place (« Your render here — 1920 × 1080 »). C'est souvent le signe d'une faute de frappe dans le nom.

Les images sont chargées en différé (*lazy-loading*) : seules celles visibles à l'écran sont téléchargées, ce qui garde le site rapide même avec beaucoup d'images.

---

## 6. Changer la couleur, les polices, les textes et les liens

### La couleur d'accent
Ouvre `css/style.css`. Ligne 13 :

```css
  --accent: #FF5A36;          /* ← TA COULEUR D'ACCENT */
```

Remplace `#FF5A36` par le code de ta couleur (trouve-le sur **coolors.co** ou avec la pipette de Photoshop). Elle change partout d'un coup.
Choisis une couleur assez **lumineuse** pour rester lisible sur le fond sombre. Si elle est très claire (jaune, vert pâle), garde `--on-accent` foncé ; si elle est sombre, mets `--on-accent: #ECE9E2;`.

Les autres couleurs (fond, texte, gris) sont juste en dessous, si un jour tu veux les ajuster.

### Les polices
Les polices sont **hébergées sur ton site** (dossier `assets/fonts`), et non chargées depuis Google. Ainsi, aucune donnée de tes visiteurs n'est envoyée à un tiers, ce qui t'évite un bandeau de consentement (RGPD).

Pour changer de police, le plus simple est de me le demander. Si tu veux le faire toi-même :
1. Va sur **gwfh.mranftl.com/fonts** (google-webfonts-helper, gratuit), cherche la police, coche « latin » et « latin-ext », puis télécharge les fichiers `.woff2`.
2. Dépose-les dans `assets/fonts/`.
3. En haut de `css/style.css`, remplace les blocs `@font-face` de l'ancienne police par ceux que fournit le site (en corrigeant le chemin en `../assets/fonts/…`).
4. Remplace le nom de la police dans `--font-hero`, `--font-display` ou `--font-body`.

Polices actuelles : **Anton** (ton nom sur l'accueil, dans le style du carton de ta démo, réglable avec `--font-hero`), **Bricolage Grotesque** (titres en très gras + texte), **Geist Mono** (petites étiquettes).
La graisse des titres se règle avec `--display-weight` (de 600, plus léger, à 800, très gras).
Autres polices grasses gratuites qui iraient bien : **Syne**, **Unbounded**, **Archivo**, **Familjen Grotesk**.

### Tes textes et tes liens
Tout est dans `data/site.js`, rangé par section et commenté :

- `name` : ton nom tel qu'il s'affiche partout. Dans le grand titre de l'accueil, chaque mot flotte séparément
- `heroImage` : l'image qui flotte à droite de ton nom sur l'accueil (ses bords se fondent automatiquement dans le fond). `""` pour la retirer : le nom, les icônes et l'accroche sont alors centrés (c'est le réglage actuel ; le visage de Neytiri reste disponible dans `assets/images/hero.webp`)
- `tools` : les icônes des logiciels sous ton nom. Pour en ajouter une, dépose un PNG carré clair sur fond transparent dans `assets/images/tools/` et copie une ligne `{ name: "...", icon: "..." },`
- `role`, `tagline` : ton titre et ta phrase d'accroche (provisoire, à réécrire)
- `email`, `location`
- `socials` : tes réseaux. Pour en ajouter un, copie une ligne `{ label: "...", url: "..." },`
- `about` : bio, formation, compétences, logiciels, langues, chemin du CV
- `contact` : texte d'intro de la page Contact
- `ui` : tous les petits textes de l'interface (menus, boutons) en anglais **et** en français

### La langue
- `defaultLang: "en"` : langue affichée à la première visite.
- `showLangSwitch: false` : cache le bouton EN / FR (le site reste en anglais).
- Le choix du visiteur est mémorisé par son navigateur.

### Ton CV et ta photo
- **CV** : le bouton « Download CV » est masqué pour l'instant. Pour l'afficher, dépose ton CV dans `assets/cv/` (par exemple `Lorenzo-Brun-Di-Dia-CV.pdf`), puis dans `data/site.js` écris `cv: "assets/cv/Lorenzo-Brun-Di-Dia-CV.pdf",`
- **Photo** : dépose `portrait.webp` dans `assets/images/about/`.

---

## 7. Ajouter ta showreel ou ton modèle 3D

Dans `data/site.js`, bloc `showreel`.

### Une vidéo en boucle (fichier)
1. Exporte ta showreel en **MP4 (H.264)**, 1920 × 1080, **sans son** (elle tourne en muet), idéalement **moins de 15 Mo**. Le logiciel gratuit **HandBrake** fait ça très bien (préréglage « Fast 1080p30 », puis onglet Audio → retirer la piste).
2. Nomme-la `showreel.mp4` et dépose-la dans `assets/video/`.
3. Vérifie que `type: "video"` est bien écrit.

Elle se lit automatiquement, en boucle et en muet, avec un bouton Pause (et ne démarre pas toute seule chez les personnes qui ont réduit les animations dans leur système). Tu peux ajouter une image d'attente : `poster: "assets/video/poster.webp"`.

### Une vidéo YouTube ou Vimeo (conseillé si ta vidéo est lourde)
```js
    video: "https://vimeo.com/123456789",
```
Vimeo s'intègre plus proprement en « fond vidéo » que YouTube.

### Un modèle 3D interactif
1. Exporte ton modèle en **.glb** (glTF binaire), idéalement **moins de 15 Mo**. Depuis Maya, le plus simple est souvent : export FBX → import dans **Blender** (gratuit) → Fichier → Export → glTF 2.0 → format « glTF Binary (.glb) », avec l'option de compression Draco cochée.
   *Bon à savoir pour un groom :* les courbes XGen ou Houdini ne passent pas dans un .glb. Il faut les convertir en *hair cards* (bandes de polygones texturées) ou en mesh.
2. Nomme-le `character.glb` et dépose-le dans `assets/models/`.
3. Mets `type: "model"`.

Le visiteur peut tourner le modèle à la souris ou au doigt. L'outil utilisé, `<model-viewer>` de Google, est gratuit et se charge automatiquement.

### Le bouton sous la vidéo
`page: "demoreel-2026"` dans le bloc `showreel` affiche, sous la vidéo de l'accueil, un bouton vers la page de ce projet (avec le breakdown). Mets `page: ""` pour retirer le bouton. Les boutons Son et Pause se trouvent aussi sous la vidéo, pour ne pas cacher tes titres incrustés.

### Aucun des deux pour l'instant
Laisse tel quel : un placeholder élégant « Showreel coming soon » s'affiche. Pour masquer complètement la section : `type: "none"`.

---

## 8. Activer le formulaire de contact (optionnel)

Par défaut, la page Contact affiche ton email (lien cliquable + bouton « Copier »). C'est suffisant pour un portfolio. Si tu veux en plus un formulaire :

1. Crée un compte gratuit sur **formspree.io** (50 messages par mois offerts).
2. Clique sur **New Form**, donne-lui un nom, et renseigne ton email.
3. Formspree te donne une adresse du type `https://formspree.io/f/xyzabcd`. Copie seulement la fin, ici `xyzabcd`.
4. Dans `data/site.js`, bloc `contact` : `formspreeId: "xyzabcd",`

Le formulaire apparaît alors sur la page Contact, et les messages arrivent dans ta boîte mail. Le premier envoi te demandera de confirmer ton adresse chez Formspree.

---

## 9. Mettre le site en ligne gratuitement

Deux options gratuites, sans abonnement. **Netlify Drop** est la plus simple ; **GitHub Pages** est très répandue et te donne une adresse en `.github.io`.

### Option A — Netlify (glisser-déposer, 5 minutes)

1. Va sur **app.netlify.com/drop**.
2. Glisse **le dossier entier du site** dans la zone indiquée.
3. Le site est en ligne en quelques secondes, à une adresse du type `random-name-123.netlify.app`.
4. Crée un compte gratuit (bouton proposé sur la page) pour **garder** le site. Sans compte, il est supprimé au bout d'une heure.
5. Change l'adresse : **Site configuration → Change site name** → par exemple `lorenzo-brundidia` donne `lorenzo-brundidia.netlify.app`.

**Mettre à jour plus tard :** dans Netlify, ouvre ton site → onglet **Deploys** → glisse à nouveau le dossier entier dans la zone en bas de la page.

### Option B — GitHub Pages (sans jamais taper de commande)

1. Crée un compte gratuit sur **github.com**. Ton pseudo fera partie de l'adresse.
2. En haut à droite : **+** → **New repository**.
   - *Repository name* : `ton-pseudo.github.io` (remplace par ton vrai pseudo GitHub, exactement).
   - Coche **Public**, puis **Create repository**.
3. Sur la page qui s'affiche, clique sur le lien **uploading an existing file**.
4. Ouvre le dossier du site sur ton PC, **sélectionne tout son contenu** (Ctrl + A, pas le dossier lui-même) et glisse-le dans la page. Les sous-dossiers sont conservés.
5. En bas, clique sur **Commit changes**.
6. Va dans **Settings → Pages**. Sous *Build and deployment* : Source = **Deploy from a branch**, Branch = **main**, dossier **/ (root)** → **Save**.
7. Attends 1 à 2 minutes : ton site est en ligne à `https://ton-pseudo.github.io`.

**Mettre à jour plus tard :** dans ton dépôt GitHub, **Add file → Upload files**, glisse les fichiers modifiés (en respectant les dossiers), puis **Commit changes**. Si tu glisses un fichier qui existe déjà, il est remplacé.
Si tu veux un outil plus confortable, **GitHub Desktop** (gratuit) synchronise ton dossier en un clic, toujours sans ligne de commande.

**Limites à connaître :** GitHub refuse les fichiers de plus de 100 Mo (et prévient dès 50 Mo). Pour une showreel lourde, passe par Vimeo ou YouTube (section 7).

---

## 10. Brancher un nom de domaine (plus tard)

Un nom de domaine (par ex. `lorenzobrundidia.com`) coûte environ 10 à 15 € par an chez un registrar : OVH, Gandi, Porkbun, Cloudflare… C'est la seule dépense possible, et elle est **optionnelle** : l'adresse `.netlify.app` ou `.github.io` est gratuite à vie.

### Avec Netlify
1. Achète le domaine chez le registrar de ton choix.
2. Dans Netlify : ton site → **Domain management → Add a domain** → tape ton domaine.
3. Netlify affiche les réglages DNS à recopier chez ton registrar (rubrique « DNS » ou « Zone DNS »). Le plus simple est souvent d'accepter de laisser Netlify gérer le DNS (**Netlify DNS**) : tu copies alors 4 adresses de « serveurs de noms » chez ton registrar.
4. Attends quelques heures (parfois jusqu'à 24 h). Le HTTPS (cadenas) est activé automatiquement et gratuitement.

### Avec GitHub Pages
1. Dans ton dépôt : **Settings → Pages → Custom domain** → tape `www.tondomaine.com` → **Save**.
2. Chez ton registrar, zone DNS, ajoute :
   - un enregistrement **CNAME** : nom `www` → valeur `ton-pseudo.github.io`
   - quatre enregistrements **A** pour le domaine nu (nom `@`) : `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Quand GitHub l'autorise (quelques heures plus tard), coche **Enforce HTTPS**.

---

## 11. En cas de problème

**La page affiche « Oups — le fichier data/… contient une erreur »**
Il y a une faute de ponctuation dans le fichier indiqué. Dans 9 cas sur 10, c'est :
- une **virgule oubliée** entre deux lignes ou entre deux projets (`},` entre deux blocs) ;
- un **guillemet** non fermé ;
- une accolade `{ }` ou un crochet `[ ]` en trop ou manquant.

Pour trouver la ligne exacte : appuie sur **F12** dans le navigateur → onglet **Console**. L'erreur indique le fichier et le numéro de ligne (par ex. `projects.js:42`). Dans VS Code, la faute est soulignée en rouge.
En dernier recours : **Ctrl + Z** dans ton éditeur pour annuler tes dernières modifications.

**Un projet n'apparaît pas**
- Vérifie que son bloc n'est pas resté entre `/*` et `*/`.
- Sur l'accueil, seuls les projets avec `featured: true` apparaissent (6 maximum).

**Une image reste en placeholder gris**
- Le nom dans `projects.js` doit être identique au nom du fichier (majuscules et extension comprises : `01.webp` ≠ `01.WEBP` ≠ `01.jpg`).
- Le dossier doit porter exactement le nom du `slug`.
- Sur la version en ligne, vérifie que l'image a bien été envoyée (sur GitHub, ouvre le dossier pour voir si elle y est).

**Je ne vois pas mes modifications**
Enregistre le fichier (Ctrl + S), puis **Ctrl + F5** dans le navigateur (rechargement complet). En ligne, attends 1 à 2 minutes après l'envoi.
Les navigateurs gardent les fichiers du site en mémoire jusqu'à 10 minutes. Pour forcer tous les visiteurs à recharger tout de suite, les pages HTML appellent les fichiers avec un numéro de version (`style.css?v=20261101-2`) : il suffit de changer ce numéro dans toutes les pages (je le fais à chaque mise en ligne).

**Le modèle 3D ne s'affiche pas sur mon PC**
C'est normal en double-cliquant sur `index.html` : utilise Live Server (section 2). En ligne, cela fonctionne.

**Deux projets ouvrent la même page**
Ils ont le même `slug`. Chaque projet doit avoir un slug unique (la Console F12 te prévient).

---

## 12. Pages légales

Le site comporte deux pages, accessibles depuis le pied de page :
- **Mentions légales & confidentialité** (`legal.html`) : éditeur, hébergeur (GitHub), registrar (Cloudflare), propriété intellectuelle, et la politique de données personnelles (RGPD).
- **Conditions d'utilisation** (`terms.html`) : ce que les visiteurs ont le droit de faire avec tes contenus.

Leurs textes, en français et en anglais, sont dans **`data/legal.js`**. Mets à jour la date `updated` quand tu les modifies.

**Pourquoi il n'y a pas de bandeau cookies :** le site ne dépose aucun cookie, n'utilise aucune statistique ni publicité, et les polices comme les vidéos sont hébergées sur le site lui-même. Seul ton choix de langue (EN/FR) est mémorisé dans le navigateur du visiteur, ce qui est exempté de consentement.

**À mettre à jour si tu changes ces points :**
- Si tu actives le **formulaire Formspree**, ajoute dans la section « Données personnelles » qu'il transmet le nom, l'email et le message à Formspree (formspree.io).
- Si tu ajoutes des **statistiques** (Google Analytics, etc.) ou des **vidéos YouTube/Vimeo intégrées**, il faudra un bandeau de consentement : demande-moi avant.
- Si tu deviens **auto-entrepreneur** et utilises le site pour ton activité, les mentions légales devront inclure ton numéro SIRET et une adresse professionnelle.

**Protection contre l'IA :** les mentions légales et la balise `tdm-reservation` présente dans chaque page indiquent que tu t'opposes à l'utilisation de tes images pour entraîner des IA (droit prévu par l'article L.122-5-3 du Code de la propriété intellectuelle).

Ces textes sont un modèle sérieux et adapté à un portfolio personnel, mais ils ne remplacent pas l'avis d'un juriste.
