const body = document.querySelector('body');
const pink = document.getElementById('pink');
const purple = document.getElementById('purple');
const golden = document.getElementById('golden');

function getColor() {
    const pinkVal = Math.floor((pink.value / 100) * 255);
    const purpleVal = Math.floor((purple.value / 100) * 255);
    const goldenVal = Math.floor((golden.value / 100) * 255);
    const alpha = pink.value / 100; 
    return `rgba(${pinkVal}, ${purpleVal}, ${goldenVal}, ${alpha})`;
}

function setColor() {
    body.style.background = getColor();
}

setColor();

pink.addEventListener('input', setColor);  
purple.addEventListener('input', setColor);  
golden.addEventListener('input', setColor);  