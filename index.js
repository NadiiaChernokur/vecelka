const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let currentColor = "green";

function drawBackground() {
  ctx.fillStyle = currentColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("pointermove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  drawBackground();

  const radius = 50;
  ctx.fillStyle = "white";

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
});
