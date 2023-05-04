// expose.js

window.addEventListener('DOMContentLoaded', init);
//jsConfetti.addConfetti()
//var currentHorn = "";//current horn that is being shown on page
const jsConfetti = new JSConfetti();
function init() {
  // TODO
  document.getElementById("horn-select").addEventListener("change", changeImage);
  document.querySelector('button').addEventListener("click", playSound);   
  document.querySelector('button').addEventListener("click", confetti);   
  document.getElementById("volume").addEventListener("change", changeVolume);
  //document.getElementById("volume-controls").getElementsByTagName("img")[0].src='assets/icons/volume-level-1.svg';
}

function playSound() {
  let audio = new Audio("assets/audio/"+document.getElementById("horn-select").value+".mp3");
  audio.volume = document.getElementById("volume").value/100;
  audio.play();
}

function changeImage(){
  document.querySelector("img").src="assets/images/" + document.getElementById("horn-select").value + ".svg";
}

function changeVolume() {
  let volume = document.getElementById("volume").value;
  if (volume == 0){
    document.getElementById("volume-controls").getElementsByTagName("img")[0].src="assets/icons/volume-level-0.svg";
  }else if (volume < 33){
    document.getElementById("volume-controls").getElementsByTagName("img")[0].src="assets/icons/volume-level-1.svg";
  }
  else if (volume < 67){
    document.getElementById("volume-controls").getElementsByTagName("img")[0].src="assets/icons/volume-level-2.svg";
  }
  else {
    document.getElementById("volume-controls").getElementsByTagName("img")[0].src="assets/icons/volume-level-3.svg";
  }
}

function confetti(){
  if(document.getElementById("horn-select").value == "party-horn"){
    jsConfetti.addConfetti();
  }
}