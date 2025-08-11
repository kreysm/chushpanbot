const audio = document.getElementById('myAudio');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', function(event) {
  event.preventDefault();  
  
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});