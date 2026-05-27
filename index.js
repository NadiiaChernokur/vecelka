window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.addEventListener("pointermove", (e) => {
    const ctx = canvas.getContext("2d");
    ctx.fillRect(100, 100, 100, 100);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gradient = ctx.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height,
    );

    gradient.addColorStop(0, "#ff0080");
    gradient.addColorStop(0.5, "#7928ca");
    gradient.addColorStop(1, "#00d4ff");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const rect = canvas.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";

    const eraseGradient = ctx.createRadialGradient(x, y, 0, x, y, 100);

    eraseGradient.addColorStop(0, "rgba(0,0,0,1)");

    eraseGradient.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = eraseGradient;

    ctx.beginPath();

    ctx.arc(x, y, 100, 0, Math.PI * 2);

    ctx.fill();

    console.log("mouse move:", e.clientX, e.clientY);
  });
});

// document.querySelector("body").addEventListener("touchmove", (e) => {
//   console.log("body move:", e.clientX, e.clientY);
// });
