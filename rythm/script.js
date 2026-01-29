const lanes = document.querySelectorAll('.lane');
let score = 0;
const scoreEl = document.getElementById('score');

let lastSpawn = 0;
const spawnRate = 250; // ms zwischen noten

function spawnLoop(timestamp) {
  if (timestamp - lastSpawn > spawnRate) {
    const lane = lanes[Math.floor(Math.random() * lanes.length)];
    const note = document.createElement('div');
    note.className = 'note';
    note.dataset.key = lane.dataset.key;
    note.style.animationDuration = '1.5s';
    note.addEventListener('animationend', () => note.remove());
    lane.appendChild(note);
    lastSpawn = timestamp;
  }
  requestAnimationFrame(spawnLoop);
}

// spawn loop starten
requestAnimationFrame(spawnLoop);

// gucken ob gehittet
document.addEventListener('keydown', e => {
  const key = e.key.toLowerCase();
  document.querySelectorAll(`.note[data-key="${key}"]`).forEach(note => {
    const rect = note.getBoundingClientRect();
    const hitZone = document.getElementById('hit-zone').getBoundingClientRect();
    if (!(rect.bottom < hitZone.top || rect.top > hitZone.bottom)) {
      note.remove();
      scoreEl.textContent = `Score: ${score += 10}`;
    }
  });
});
