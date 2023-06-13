function playVideo() {
  var video = document.getElementById("video_background");
  video.play();
}

function pauseVideo() {
  var video = document.getElementById("video_background");
  video.pause();
}

function playRingtone() {
  const ringtone = document.getElementById('ringtone');
  ringtone.volume = 0.5;
  ringtone.currentTime = 0;
  ringtone.play();
}
