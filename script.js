const envelope = document.getElementById("envelope");
const intro = document.getElementById("intro");
const book = document.getElementById("book");
const sections = document.getElementById("sections");

const flowers = document.getElementById("flowers");

const bgMusic = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

const pages = document.querySelectorAll(".page");
let currentPage = 0;
let opened = false;

/* Envelope Click */
envelope.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  envelope.classList.add("open");

  /* Start Music */
  bgMusic.play();

  /* Confetti */
  confetti({
    particleCount: 180,
    spread: 120,
    origin: { y: 0.6 },
  });

  /* Flowers appear */
  flowers.style.display = "block";

  /* Unlock scrolling */
  setTimeout(() => {
    document.body.classList.remove("locked");
  }, 1200);

  /* Show content */
  setTimeout(() => {
    intro.style.display = "none";
    book.classList.remove("hidden");
    sections.classList.remove("hidden");
  }, 1500);
});

/* Page Navigation */
document.getElementById("next").addEventListener("click", () => {
  pages[currentPage].classList.remove("active");
  currentPage = (currentPage + 1) % pages.length;
  pages[currentPage].classList.add("active");
});

document.getElementById("prev").addEventListener("click", () => {
  pages[currentPage].classList.remove("active");
  currentPage = (currentPage - 1 + pages.length) % pages.length;
  pages[currentPage].classList.add("active");
});

/* Music Toggle */
musicToggle.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.textContent = "🎵";
  } else {
    bgMusic.pause();
    musicToggle.textContent = "🔇";
  }
});