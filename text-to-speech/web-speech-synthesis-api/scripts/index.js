var speakWord = function (event) {
    var target = event.target;
    var word = target.innerText;
    
    var voiceProperties = new SpeechSynthesisUtterance(word);
    var synth = window.speechSynthesis;
    synth.speak(voiceProperties);
};