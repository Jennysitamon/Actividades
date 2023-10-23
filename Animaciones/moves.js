const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let direction = 1;

// 1 derecha
// 2 abajo
// 3 izquierda
// 4 arriba

let headSize = 20; 
let speed = 4; 
let cupcakes = []; 

function ghost(x, y) {
    ctx.font = headSize + 'px Serif';
    ctx.fillText('👩🏼‍🦲', x, y);
}

function drawCupcake(x, y) {
    ctx.font = '20px Serif';
    ctx.fillText('🧁', x, y);
}

let idx = 0;
let idy = 0;

function generateCupcakes(count) {
    for (let i = 0; i < count; i++) {
        const cupcake = {
            indexX: Math.floor(Math.random() * 650),
            indexY: Math.floor(Math.random() * 400)
        };
        cupcakes.push(cupcake);
    }
}

generateCupcakes(10);

setInterval(() => {
    ctx.clearRect(0, 0, 650, 400);

    for (let i = 0; i < cupcakes.length; i++) {
        const cupcake = cupcakes[i];
        if (idx >= cupcake.indexX - headSize / 2 && idx <= cupcake.indexX + 20 + headSize / 2 &&
            idy >= cupcake.indexY - headSize / 2 && idy <= cupcake.indexY + 20 + headSize / 2) {
            headSize += 5; 
            cupcakes.splice(i, 1); 
        }
    }

    cupcakes.forEach(cupcake => drawCupcake(cupcake.indexX, cupcake.indexY));
    ghost(idx, idy);
    switch (direction) {
        case 1:
            idx += speed;
            break;
        case 2:
            idy += speed;
            break;
        case 3:
            idx -= speed;
            break;
        case 4:
            idy -= speed;
    }
    if (idx > 650) idx = 10;
    if (idy > 400) idy = 10;
    if (idx < 10) idx = 650;
    if (idy < 10) idy = 400;

    if (cupcakes.length === 0) {
        generateCupcakes(10); 
    }
}, 50);

document.querySelector('body')
    .addEventListener('keydown', function (e) {
        switch (e.key) {
            case 'ArrowUp':
                direction = 4;
                break;
            case 'ArrowRight':
                direction = 1;
                break;
            case 'ArrowLeft':
                direction = 3;
                break;
            case 'ArrowDown':
                direction = 2;
                break;
        }
    });
