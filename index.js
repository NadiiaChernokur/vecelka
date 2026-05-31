const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* ---------------- THEMES ---------------- */

const themes = [
  { bg: "#1e3a8a" },
  { bg: "#065f46" },
  { bg: "#7c2d12" },
  { bg: "#4c1d95" },
  { bg: "#0f172a" },
  { bg: "#831843" },
  { bg: "#164e63" },
  { bg: "#3f3f46" },
  { bg: "#b91c1c" },
  { bg: "#92400e" },
];

let currentThemeIndex = 0;
let theme = themes[currentThemeIndex];

/* ---------------- SETTINGS ---------------- */

const settings = {
  cellSize: 12,
  effectRadius: 60,
};

/* ---------------- STATE ---------------- */

let mouseX = 0;
let mouseY = 0;

/* ---------------- INPUT ---------------- */

canvas.addEventListener("pointermove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

/* ---------------- BACKGROUND ---------------- */

function drawBackground() {
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

/* ---------------- GRID EFFECT ---------------- */

function drawGrid() {
  const cellSize = settings.cellSize;

  for (let x = 0; x < canvas.width; x += cellSize) {
    for (let y = 0; y < canvas.height; y += cellSize) {
      const dx = x - mouseX;
      const dy = y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const intensity = Math.max(0, 1 - dist / settings.effectRadius);

      if (intensity > 0.05) {
        ctx.fillStyle = `rgba(255,255,255,${intensity * 0.25})`;
        ctx.fillRect(x, y, cellSize - 1, cellSize - 1);
      }
    }
  }
}

/* ---------------- RENDER LOOP ---------------- */

function animate() {
  drawBackground();
  drawGrid();

  requestAnimationFrame(animate);
}

animate();

/* ---------------- THEME BUTTON ---------------- */

document.querySelector(".button").addEventListener("click", () => {
  currentThemeIndex++;

  if (currentThemeIndex >= themes.length) {
    currentThemeIndex = 0;
  }

  theme = themes[currentThemeIndex];
});
