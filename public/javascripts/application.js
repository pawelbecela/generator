var dev, osc;

function audioCallback(buffer, channelCount){
    // Fill the buffer with the oscillator output.
    osc.append(buffer, channelCount);
}

window.addEventListener('load', function(){
    // Create an instance of the AudioDevice class
   
}, true);

$(document).ready(function() {
  $(".on").click(function() {
    dev = audioLib.AudioDevice(audioCallback /* callback for the buffer fills */, 2 /* channelCount */);
    // Create an instance of the Oscillator class
    osc = audioLib.Oscillator(dev.sampleRate /* sampleRate */, 440 /* frequency */); 
  });
  $(".off").click(function(){
    dev = audioLib.AudioDevice(audioCallback /* callback for the buffer fills */, 2 /* channelCount */);
    // Create an instance of the Oscillator class
    osc = audioLib.Oscillator(dev.sampleRate /* sampleRate */, 660 /* frequency */);
  });
});