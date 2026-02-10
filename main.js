// Reloj estilo Win95
function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  clock.textContent = `${h}:${m}`;
}

setInterval(updateClock, 1000);
updateClock();

// Ventanas arrastrables
document.querySelectorAll('.window').forEach(win => {
  const titleBar = win.querySelector('.title-bar');
  let offsetX = 0;
  let offsetY = 0;
  let dragging = false;

  titleBar.addEventListener('mousedown', e => {
    dragging = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
  });

  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    win.style.left = `${e.clientX - offsetX}px`;
    win.style.top = `${e.clientY - offsetY}px`;
  });

  document.addEventListener('mouseup', () => {
    dragging = false;
  });
});
