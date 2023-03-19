const body = document.querySelector('body');
const xCount = document.querySelector('.xcount');
const yCount = document.querySelector('.ycount');

body.addEventListener('mousemove', handleEvent);

function handleEvent(event) {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    xCount.innerText = xPos;
    yCount.innerText = yPos;

}