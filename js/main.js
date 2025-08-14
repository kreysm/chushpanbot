const audio = document.getElementById('myAudio');
const playButton = document.getElementById('playButton');
const playIcon = document.getElementById('playIcon');

playButton.addEventListener('click', function(event) {
  event.preventDefault();
  if (audio.paused) {
    audio.play();
    playIcon.src = 'images/pause.png';  
  } else {
    audio.pause();
    playIcon.src = 'images/play.png';  
  }
});

$('.burger, .overlay').on('click', function(e) {
  e.preventDefault();

  if ($('.header__top').hasClass('header__top--open')) {
    $('.header__top').removeClass('header__top--open');
    $('.overlay').removeClass('overlay--show');
  } else {

    $('.header__top').addClass('header__top--open');
    $('.overlay').addClass('overlay--show');
  }
});