/* =====================================================================
   LIGHTBOX.JS — affichage plein écran des images de la galerie.
   Clavier : ← → pour naviguer, Échap pour fermer. Swipe sur mobile.
   Tu n'as pas besoin de modifier ce fichier.
   ===================================================================== */
(function () {
  "use strict";

  let dialog, image, caption, counter, btnClose, btnPrev, btnNext;
  let items = [], index = 0, opener = null, touchX = null;
  const pad = (n) => String(n).padStart(2, "0");

  function build() {
    dialog = document.createElement("dialog");
    dialog.className = "lightbox";
    dialog.innerHTML = `
      <div class="lightbox__bar">
        <span class="eyebrow lightbox__count"></span>
        <button type="button" class="lightbox__btn" data-lb="close"></button>
      </div>
      <div class="lightbox__stage">
        <button type="button" class="lightbox__nav lightbox__nav--prev" data-lb="prev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button>
        <img alt="">
        <button type="button" class="lightbox__nav lightbox__nav--next" data-lb="next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button>
        <p class="lightbox__caption eyebrow"></p>
      </div>`;
    document.body.appendChild(dialog);

    image = dialog.querySelector("img");
    caption = dialog.querySelector(".lightbox__caption");
    counter = dialog.querySelector(".lightbox__count");
    btnClose = dialog.querySelector('[data-lb="close"]');
    btnPrev = dialog.querySelector('[data-lb="prev"]');
    btnNext = dialog.querySelector('[data-lb="next"]');

    dialog.addEventListener("click", (e) => {
      const action = e.target.closest("[data-lb]")?.dataset.lb;
      if (action === "close") dialog.close();
      else if (action === "prev") go(-1);
      else if (action === "next") go(1);
      else if (e.target.classList.contains("lightbox__stage")) dialog.close(); // clic à côté de l'image
    });
    dialog.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    });
    dialog.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
    dialog.addEventListener("touchend", (e) => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
      touchX = null;
    });
    dialog.addEventListener("close", () => {
      document.documentElement.style.overflow = "";
      opener?.focus();
    });
  }

  function show() {
    const it = items[index];
    image.style.animation = "none"; void image.offsetWidth; image.style.animation = "";
    image.src = it.src;
    image.alt = it.alt || "";
    caption.textContent = it.caption || "";
    counter.textContent = `${pad(index + 1)} / ${pad(items.length)}`;
    btnPrev.hidden = btnNext.hidden = items.length < 2;
  }

  function go(step) {
    if (items.length < 2) return;
    index = (index + step + items.length) % items.length;
    show();
  }

  function open(list, start, labels = {}) {
    if (!list.length) return;
    if (!dialog) build();
    items = list;
    index = Math.max(0, start);
    opener = document.activeElement;
    btnClose.textContent = labels.close || "Close";
    btnPrev.setAttribute("aria-label", labels.prev || "Previous");
    btnNext.setAttribute("aria-label", labels.next || "Next");
    dialog.setAttribute("aria-label", "Image viewer");
    show();
    dialog.showModal();
    document.documentElement.style.overflow = "hidden";
  }

  window.Lightbox = { open };
})();
