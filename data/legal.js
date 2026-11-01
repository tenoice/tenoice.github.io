/* =====================================================================
   LEGAL.JS — textes des pages « Mentions légales & confidentialité »
   (legal.html) et « Conditions d'utilisation » (terms.html).
   ---------------------------------------------------------------------
   • Chaque section a un titre et une liste de paragraphes, en FR et EN.
   • Les adresses email et les liens https://… deviennent cliquables.
   • Pense à mettre à jour la date "updated" quand tu modifies un texte.
   • Si tu actives un jour le formulaire Formspree ou des statistiques,
     il faudra compléter la section « Données personnelles ».
   ===================================================================== */

window.LEGAL = {

  /* ------------------------------------------------------------------
     MENTIONS LÉGALES & CONFIDENTIALITÉ
     ------------------------------------------------------------------ */
  legal: {
    title: { en: "Legal notice & privacy", fr: "Mentions légales & confidentialité" },
    updated: { en: "November 1, 2026", fr: "1er novembre 2026" },
    sections: [
      {
        title: { en: "Publisher", fr: "Éditeur du site" },
        body: {
          fr: [
            "Le site lorenzobrundidia.com est un portfolio personnel et non commercial, édité par Lorenzo Brun Di Dia, particulier.",
            "Contact : brundidialorenzo@gmail.com",
            "Directeur de la publication : Lorenzo Brun Di Dia.",
            "Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), l'éditeur, personne physique agissant à titre non professionnel, ne publie pas son adresse postale personnelle. Ses éléments d'identification sont connus de l'hébergeur.",
          ],
          en: [
            "lorenzobrundidia.com is a personal, non-commercial portfolio published by Lorenzo Brun Di Dia, private individual.",
            "Contact: brundidialorenzo@gmail.com",
            "Publication director: Lorenzo Brun Di Dia.",
            "In accordance with French law no. 2004-575 of 21 June 2004 (LCEN), the publisher, a private individual acting in a non-professional capacity, does not publish a personal postal address. His identification details are known to the hosting provider.",
          ],
        },
      },
      {
        title: { en: "Hosting & domain", fr: "Hébergement & nom de domaine" },
        body: {
          fr: [
            "Hébergement : GitHub Pages — GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis — https://github.com",
            "Nom de domaine : Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, États-Unis — https://www.cloudflare.com",
          ],
          en: [
            "Hosting: GitHub Pages — GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States — https://github.com",
            "Domain name: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, United States — https://www.cloudflare.com",
          ],
        },
      },
      {
        title: { en: "Intellectual property", fr: "Propriété intellectuelle" },
        body: {
          fr: [
            "L'ensemble des contenus de ce site (rendus, images, vidéos, modèles, textes et mise en page) est la propriété de Lorenzo Brun Di Dia, sauf mention contraire. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable est interdite (articles L.122-4 et suivants du Code de la propriété intellectuelle).",
            "Fouille de textes et de données : conformément à l'article L.122-5-3 du Code de la propriété intellectuelle (article 4 de la directive (UE) 2019/790), l'auteur s'oppose à toute fouille de textes et de données sur les contenus de ce site, y compris pour l'entraînement de systèmes d'intelligence artificielle.",
            "Neytiri est un personnage de la franchise Avatar, propriété de ses ayants droit (20th Century Studios / Lightstorm Entertainment). Le projet présenté est une étude personnelle, sans but commercial et sans lien avec ces sociétés.",
            "Les noms et logos des logiciels cités (ZBrush, Maya, Arnold, Blender, Nuke, Substance 3D Painter, DaVinci Resolve, Yeti, Houdini) sont des marques de leurs propriétaires respectifs. Ils sont utilisés uniquement pour indiquer les outils employés.",
            "Polices : Anton, Bricolage Grotesque et Geist Mono, sous licence SIL Open Font License 1.1.",
          ],
          en: [
            "All content on this site (renders, images, videos, models, texts and layout) is the property of Lorenzo Brun Di Dia unless stated otherwise. Any reproduction, display, modification or use, in whole or in part, without prior written permission is prohibited (French Intellectual Property Code, articles L.122-4 et seq.).",
            "Text and data mining: in accordance with article L.122-5-3 of the French Intellectual Property Code (article 4 of Directive (EU) 2019/790), the author reserves all rights and opts out of any text and data mining of this site's content, including for training artificial intelligence systems.",
            "Neytiri is a character from the Avatar franchise, owned by its rights holders (20th Century Studios / Lightstorm Entertainment). The project shown is a personal, non-commercial study with no affiliation with these companies.",
            "The names and logos of the software mentioned (ZBrush, Maya, Arnold, Blender, Nuke, Substance 3D Painter, DaVinci Resolve, Yeti, Houdini) are trademarks of their respective owners, used only to indicate the tools employed.",
            "Fonts: Anton, Bricolage Grotesque and Geist Mono, under the SIL Open Font License 1.1.",
          ],
        },
      },
      {
        title: { en: "Personal data", fr: "Données personnelles" },
        body: {
          fr: [
            "Responsable du traitement : Lorenzo Brun Di Dia — brundidialorenzo@gmail.com",
            "Ce site ne propose ni compte, ni formulaire, ni newsletter. Il n'utilise aucun outil de mesure d'audience, aucune publicité et aucun cookie. Les polices, les vidéos et les outils d'affichage sont hébergés sur le site lui-même : aucune donnée n'est envoyée à des services tiers lors de votre visite.",
            "Si une vidéo hébergée sur YouTube ou Vimeo est proposée, elle n'est chargée qu'après un clic de votre part sur « Lire la vidéo » : la plateforme concernée peut alors collecter des données selon sa propre politique de confidentialité. Sans ce clic, aucune connexion n'est établie avec elle.",
            "Votre choix de langue (EN / FR) est mémorisé dans votre navigateur (stockage local) uniquement pour vous éviter de le refaire. Il n'est jamais transmis et vous pouvez l'effacer à tout moment depuis les réglages de votre navigateur. Ce stockage étant strictement nécessaire à une fonction que vous demandez, il ne requiert pas de consentement.",
            "Comme tout hébergeur, GitHub enregistre des données techniques de connexion (dont l'adresse IP) pour assurer la sécurité et le fonctionnement du service. Ces données peuvent être traitées aux États-Unis ; GitHub adhère au Data Privacy Framework UE–États-Unis. Voir sa déclaration de confidentialité : https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement",
            "Si vous m'écrivez par email, votre adresse et votre message servent uniquement à vous répondre. Ils ne sont ni partagés ni utilisés à d'autres fins, et sont conservés au plus le temps de nos échanges.",
            "Conformément au RGPD (articles 15 à 21) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition sur vos données. Pour l'exercer : brundidialorenzo@gmail.com. Vous pouvez aussi adresser une réclamation à la CNIL : https://www.cnil.fr",
            "Les liens vers ArtStation, LinkedIn et Instagram mènent à des sites tiers, soumis à leurs propres politiques de confidentialité.",
          ],
          en: [
            "Data controller: Lorenzo Brun Di Dia — brundidialorenzo@gmail.com",
            "This site offers no account, form or newsletter. It uses no analytics, no advertising and no cookies. Fonts, videos and display tools are hosted on the site itself: no data is sent to third-party services when you visit.",
            "If a video hosted on YouTube or Vimeo is offered, it is only loaded after you click \"Play video\": the platform may then collect data under its own privacy policy. Without that click, no connection to it is made.",
            "Your language choice (EN / FR) is stored in your browser (local storage) only so you don't have to choose again. It is never transmitted and you can clear it at any time in your browser settings. As this storage is strictly necessary for a feature you request, it does not require consent.",
            "Like any hosting provider, GitHub logs technical connection data (including IP addresses) to ensure the security and operation of the service. This data may be processed in the United States; GitHub participates in the EU–U.S. Data Privacy Framework. See its privacy statement: https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement",
            "If you email me, your address and message are used only to reply to you. They are not shared or used for any other purpose, and are kept no longer than our exchange requires.",
            "Under the GDPR (articles 15 to 21) and the French Data Protection Act, you have the right to access, rectify, erase, restrict and object to the processing of your data. To exercise these rights: brundidialorenzo@gmail.com. You may also lodge a complaint with the CNIL: https://www.cnil.fr",
            "Links to ArtStation, LinkedIn and Instagram lead to third-party sites governed by their own privacy policies.",
          ],
        },
      },
    ],
  },

  /* ------------------------------------------------------------------
     CONDITIONS D'UTILISATION
     ------------------------------------------------------------------ */
  terms: {
    title: { en: "Terms of use", fr: "Conditions d'utilisation" },
    updated: { en: "November 1, 2026", fr: "1er novembre 2026" },
    sections: [
      {
        title: { en: "Purpose", fr: "Objet" },
        body: {
          fr: ["Les présentes conditions encadrent l'utilisation du site lorenzobrundidia.com, portfolio personnel de Lorenzo Brun Di Dia présentant ses travaux en 3D. En naviguant sur le site, vous acceptez ces conditions."],
          en: ["These terms govern the use of lorenzobrundidia.com, the personal portfolio of Lorenzo Brun Di Dia showcasing his 3D work. By browsing the site, you accept these terms."],
        },
      },
      {
        title: { en: "Access", fr: "Accès au site" },
        body: {
          fr: ["Le site est accessible gratuitement et sans inscription. L'éditeur peut à tout moment le modifier, le mettre à jour ou en suspendre l'accès, notamment pour maintenance, sans préavis ni garantie de disponibilité."],
          en: ["The site is free to access and requires no registration. The publisher may modify, update or suspend access to it at any time, including for maintenance, without notice and without any guarantee of availability."],
        },
      },
      {
        title: { en: "Permitted use", fr: "Utilisation autorisée des contenus" },
        body: {
          fr: [
            "Vous pouvez consulter les contenus pour votre usage personnel et partager des liens vers les pages du site.",
            "Sauf autorisation écrite préalable, il est interdit de télécharger, copier, reproduire, modifier, republier ou exploiter commercialement les rendus, images, vidéos et textes du site, ainsi que de les utiliser pour constituer des jeux de données ou entraîner des systèmes d'intelligence artificielle.",
            "Pour toute demande d'utilisation : brundidialorenzo@gmail.com",
          ],
          en: [
            "You may view the content for your personal use and share links to the site's pages.",
            "Unless you have prior written permission, you may not download, copy, reproduce, modify, republish or commercially exploit the renders, images, videos and texts on this site, nor use them to build datasets or train artificial intelligence systems.",
            "For any usage request: brundidialorenzo@gmail.com",
          ],
        },
      },
      {
        title: { en: "Links", fr: "Liens" },
        body: {
          fr: ["Vous pouvez créer un lien vers ce site, à condition de ne pas présenter ses contenus comme les vôtres ni les afficher à l'intérieur d'un autre site (cadre ou iframe). Les liens sortants vers des sites tiers sont fournis pour information : l'éditeur n'est pas responsable de leur contenu."],
          en: ["You may link to this site, provided you do not present its content as your own or display it within another site (frame or iframe). Outbound links to third-party sites are provided for information only: the publisher is not responsible for their content."],
        },
      },
      {
        title: { en: "Liability", fr: "Responsabilité" },
        body: {
          fr: ["Les contenus sont proposés à titre de présentation. L'éditeur s'efforce de les tenir exacts et à jour mais ne saurait être tenu responsable d'une erreur, d'une indisponibilité du site ou d'un dommage indirect résultant de son utilisation."],
          en: ["Content is provided for presentation purposes. The publisher strives to keep it accurate and up to date but cannot be held liable for errors, unavailability of the site or any indirect damage resulting from its use."],
        },
      },
      {
        title: { en: "Reporting content", fr: "Signaler un contenu" },
        body: {
          fr: ["Si vous estimez qu'un contenu porte atteinte à vos droits, écrivez à brundidialorenzo@gmail.com en précisant la page concernée et le motif : il sera examiné et, si nécessaire, retiré rapidement."],
          en: ["If you believe any content infringes your rights, write to brundidialorenzo@gmail.com stating the page concerned and the reason: it will be reviewed and, if necessary, promptly removed."],
        },
      },
      {
        title: { en: "Changes & applicable law", fr: "Modifications & droit applicable" },
        body: {
          fr: ["Ces conditions peuvent être modifiées à tout moment ; la version en vigueur est celle publiée sur cette page. Elles sont régies par le droit français. En cas de litige, et à défaut de solution amiable, les tribunaux français compétents seront saisis. En cas de différence entre les versions, la version française fait foi."],
          en: ["These terms may be changed at any time; the version in force is the one published on this page. They are governed by French law. In the event of a dispute, and failing an amicable solution, the competent French courts shall have jurisdiction. In case of discrepancy between versions, the French version prevails."],
        },
      },
    ],
  },
};
