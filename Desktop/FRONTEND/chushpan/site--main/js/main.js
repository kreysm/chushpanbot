const audio = document.getElementById('myAudio');
const playButton = document.getElementById('playButton');
const playIcon = document.getElementById('playIcon');

playButton.addEventListener('click', function(event) {
  event.preventDefault();
  if (audio.paused) {
    audio.play();
    playIcon.src = 'images/pause.png';  // Путь к картинке для паузы
  } else {
    audio.pause();
    playIcon.src = 'images/play.png';  // Путь к картинке для воспроизведения
  }
});