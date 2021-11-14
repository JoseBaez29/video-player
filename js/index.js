const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");
const $progress = document.querySelector("#progress");

$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);
$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);
$backward.addEventListener("click", handleBackward);
$forward.addEventListener("click", handleForward);
$progress.addEventListener("input", handleInput);

function handleLoaded() {
  $progress.max = $video.duration;
  console.log("Ha cargado mi video", $video.duration);
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
  // console.log("Video actual: ", $video.currentTime);
}

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}

function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
}

function handleBackward() {
  $video.currentTime -= 10;
  console.log("atrasar 10 segundos ", $video.currentTime);
}

function handleForward() {
  $video.currentTime += 10;
  console.log("adelantar 10 segundos ", $video.currentTime);
}

function handleInput() {
  console.log($progress.value);
  $video.currentTime = $progress.value;
}
