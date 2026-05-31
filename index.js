const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const themes = [
  {
    bg: "#1e3a8a", // deep blue
    glow: "rgba(147, 197, 253, 0.8)",
  },
  {
    bg: "#065f46", // green
    glow: "rgba(110, 231, 183, 0.8)",
  },
  {
    bg: "#7c2d12", // dark orange/brown
    glow: "rgba(251, 146, 60, 0.8)",
  },
  {
    bg: "#4c1d95", // purple
    glow: "rgba(216, 180, 254, 0.8)",
  },
  {
    bg: "#0f172a", // almost black blue
    glow: "rgba(56, 189, 248, 0.8)",
  },
  {
    bg: "#831843", // pink/magenta
    glow: "rgba(244, 114, 182, 0.8)",
  },
  {
    bg: "#164e63", // teal
    glow: "rgba(94, 234, 212, 0.8)",
  },
  {
    bg: "#3f3f46", // gray
    glow: "rgba(212, 212, 216, 0.8)",
  },
  {
    bg: "#b91c1c", // red
    glow: "rgba(248, 113, 113, 0.8)",
  },
  {
    bg: "#92400e", // warm yellow/brown
    glow: "rgba(253, 224, 71, 0.8)",
  },
];

let currentThemeIndex = 0;
let theme = themes[currentThemeIndex];

function drawBackground() {
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const gridSize = 20;

canvas.addEventListener("pointermove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  const radius = 50;

  drawBackground();

  for (let x = 0; x < canvas.width; x += gridSize) {
    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(x, y, 2, 2);
    }
  }

  const glow = ctx.createRadialGradient(x, y, 0, x, y, radius);

  glow.addColorStop(0, theme.glow);
  glow.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = glow;

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
});

document.querySelector(".button").addEventListener("click", () => {
  currentThemeIndex++;

  if (currentThemeIndex >= themes.length) {
    currentThemeIndex = 0;
  }

  theme = themes[currentThemeIndex];

  drawBackground();
});
