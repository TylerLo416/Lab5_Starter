// explore.js

//speech.lang = "en";
window.addEventListener('DOMContentLoaded', init);
window.addEventListener("voiceschanged", loadVoices);


function init() {
  //console.log(speech.getVoices());
  //let utterance = new SpeechSynthesisUtterance("Hello world!");
  //speechSynthesis.speak(utterance);

  speechSynthesis;

  setTimeout(() => {
    const voices = window.speechSynthesis.getVoices();
    loadVoices();
    
  }, 500  );

  //smiley face + play the sounds
  document.querySelector("button").addEventListener("click", speakOut);
}

function loadVoices(){
  //const voices = window.speechSynthesis.getVoices();

  //the list of voices
  for (let i = 0; i < window.speechSynthesis.getVoices().length; i++) {
    console.log("2");
    const option = document.createElement("option");
    option.textContent = `${window.speechSynthesis.getVoices()[i].name} (${window.speechSynthesis.getVoices()[i].lang})`;

    if (window.speechSynthesis.getVoices()[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", window.speechSynthesis.getVoices()[i].lang);
    option.setAttribute("data-name", window.speechSynthesis.getVoices()[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}

function speakOut() {
  const voices = window.speechSynthesis.getVoices();
  const option = document.getElementById("voice-select").selectedOptions[0].getAttribute("data-name");
  const synth = window.speechSynthesis;
  const utterThis =new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value);
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === option) {
      utterThis.voice = voices[i];
    }
  }

  let faceImage = document.querySelector('img');
  synth.speak(utterThis);

  utterThis.onstart = () => {
    faceImage.src = 'assets/images/smiling-open.png';
  };

  utterThis.onend = () => {
    faceImage.src = 'assets/images/smiling.png';
  };
  
}
