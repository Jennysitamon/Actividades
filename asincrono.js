const names = ["Roblox", "Jenysita", "Abichita", "Jake"]
console.log(names);
///
function getNames(){
    return names;
}
console.log(getNames());
///
function asynGetNames(){
    setTimeout(() => {
        console.log('Ejecuta función');
        return names;
    }, 3000);
}
///
console.log('Inicia petición');
console.log(asynGetNames());
console.log('Termina petición');
///