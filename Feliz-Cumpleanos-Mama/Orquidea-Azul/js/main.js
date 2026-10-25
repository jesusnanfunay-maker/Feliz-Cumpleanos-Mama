const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');

function updateButton() {
  if (audio.paused) {
    playBtn.textContent = '▶ Escuchar mensaje';
    playBtn.classList.remove('playing');
  } else {
    playBtn.textContent = '❚❚ Pausar';
    playBtn.classList.add('playing');
  }
}

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play().then(updateButton).catch(() => {
      alert('Toca de nuevo para escuchar.');
    });
  } else {
    audio.pause();
    updateButton();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    audio.play().then(updateButton).catch(() => {});
  }, 600);
});

audio.addEventListener('ended', updateButton);
