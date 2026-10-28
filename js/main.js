/* ==========================================================================
   Genel etkileşimler: sticky header, mobil menü, kaydırma animasyonu
   ========================================================================== */

// CSS, animasyon başlangıç durumunu sadece JS çalışıyorsa uygular
document.documentElement.classList.add("js");

/* Sticky header: sayfa kayınca gölge ve koyu zemin alır */
const header = document.querySelector(".site-header");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 10);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

/* Mobil menü */
const navToggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
const desktopQuery = window.matchMedia("(min-width: 768px)");

function setMenuOpen(isOpen) {
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

navToggle.addEventListener("click", () => {
  setMenuOpen(navToggle.getAttribute("aria-expanded") !== "true");
});

// Menüdeki bir linke tıklanınca menü kapanır
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});

// Escape ile kapanır ve odak butona döner
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    navToggle.focus();
  }
});

// Masaüstü genişliğine geçilince açık kalan menü durumunu sıfırla
desktopQuery.addEventListener("change", (event) => {
  if (event.matches) setMenuOpen(false);
});

/* Kaydırma animasyonu: .reveal öğeleri görünür olunca belirir */
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // animasyon bir kez oynar
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  // Eski tarayıcılarda içerik gizli kalmasın
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
