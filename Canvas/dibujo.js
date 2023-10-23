const lienzo = document.querySelector('#lienzo');

const ctx = lienzo.getContext('2d');

//yo
ctx.strokeStyle = 'pink'; 
ctx.lineWidth = 2;

ctx.beginPath();
ctx.arc(200, 300, 20, 0, Math.PI * 2);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(200, 320);
ctx.lineTo(200, 360);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 360);
ctx.lineTo(190, 380);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 360);
ctx.lineTo(210, 380);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(200, 330);
ctx.lineTo(190, 320);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(200, 330);
ctx.lineTo(210, 320);
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.lineWidth = 2;


ctx.strokeStyle = 'black';
ctx.lineWidth = 2;

const radioCirculos = 4; 
const cantidadCirculos = 3; 

// Calcular la posición inicial del cabello
const xInicial = 240;
const yInicial = 275;

// Espaciado entre círculos
const espaciado = 10;

// Dibujar los círculos para simular el cabello chino
for (let i = 0; i < cantidadCirculos; i++) {
  const x = xInicial + i * espaciado;
  const y = yInicial + Math.random() * 5;
  ctx.beginPath();
  ctx.arc(x, y, radioCirculos, 0, Math.PI * 2);
  ctx.stroke();
}




ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(195, 295, 2, 0, Math.PI * 2); 
ctx.fill();

ctx.beginPath();
ctx.arc(205, 295, 2, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(200, 300, 8, 0, Math.PI, false);
ctx.stroke();


ctx.strokeStyle = 'blue'; 


ctx.beginPath();
ctx.arc(250, 300, 20, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 320);
ctx.lineTo(250, 360);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 360);
ctx.lineTo(240, 380);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 360);
ctx.lineTo(260, 380);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 330);
ctx.lineTo(240, 320);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 330);
ctx.lineTo(260, 320);
ctx.stroke();

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(245, 295, 2, 0, Math.PI * 2); // Ojo izquierdo
ctx.fill();

ctx.beginPath();
ctx.arc(255, 295, 2, 0, Math.PI * 2); // Ojo derecho
ctx.fill();

ctx.beginPath();
ctx.arc(250, 300, 8, 0, Math.PI, false);
ctx.stroke();

