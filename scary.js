function playSound(audioName){
  let audio = new Audio(audioName);
  audio.loop=true;
  audio.play();
}
playSound("Dead Forest.mp3");


function showMoreWords() {
  var scrollContent = document.getElementById("scroll-content");
  var scrollHeight = scrollContent.scrollHeight;
  var scrollTop = scrollContent.scrollTop;
  var clientHeight = scrollContent.clientHeight;
  if (scrollHeight - (scrollTop + clientHeight) < 50) {
    scrollContent.style.height = (scrollHeight + 500) + "px";
  }
}