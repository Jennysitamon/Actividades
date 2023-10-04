const names = ["Roblox", "Jenysita", "Abichita", "Jake"]

const getNamesPromise = (valor) => new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            console.log('Ejecuta promesa');
            if(valor){
            resolve(names);
            } else {
            reject(new Error('Fallo!'));
            }
        },1000)
    }
)

//console.log(getNamesPromise);
//promesas permiten trabajar con obj sincronos

console.log('Inicia petición')
getNamesPromise(1).then(
    (datos) => {
        console.log(datos);
        console.log('Finaliza peticion')
    }
    )
    .catch(error => console.log(error))
console.log('Continua ejecución')