// Loading Screen Logic
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    loadingScreen.style.pointerEvents = "none";
    document.body.style.overflow = "auto";
  }, 1000);
});

// Custom Cursor Movement
const cursor = document.getElementById("custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});
