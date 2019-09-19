window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio) return; // Stop the function from running if there is no keyCode assigned

    audio.currentTime = 0; // Rewinds audio to 0, so no need to wait until it ends to use it again
    audio.play();

    key.classList.add('playing');
}


function removeTransition(e) {
    if (e.propertyName !== 'transform') return // Skip it if it's not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));