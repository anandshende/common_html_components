var speakWord = function (event) {
    var target = event.target;
    var word = target.innerText;
    
    var voiceProperties = new SpeechSynthesisUtterance(word);
    voiceProperties.volume = 1;
    voiceProperties.pitch = 0;
    voiceProperties.lang = 'en-EN';
    
    var synth = window.speechSynthesis;
    synth.speak(voiceProperties);
};