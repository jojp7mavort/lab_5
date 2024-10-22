//Código síncrono vs asíncrono
    //Síncrono
console.log("1")
let x = () => {
    console.log("Código síncrono")
}
x();
console.log("2")
console.log("3")



console.log("################################")
    //Asíncrono
console.log("1")
let y = setTimeout(() => {
    console.log("Código asíncrono")
}, 4000);
console.log("2")
console.log("3")



//Promesas
const conexionBDDExterna = (datosConexion)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datosConexion ? resolve("Conexión satisfactoria") : reject("Conexión rechazada")
        },3000)
    })
}

conexionBDDExterna(true)
    .then(x => console.log(x))
    .catch(error => console.log(error));


const clima = fetch("https://api.openweathermap.org/data/2.5/weather?lat=-0.038823&lon=-78.982557&appid=325e170126e812ae5378d0f369507692")

clima
    .then(x => x.json())
    .then(resultado => console.log(resultado, "\n\n\n\n"))
    .catch(error => console.log(error));




//Async/Await
let lk = async () => {
    const clima = fetch("https://api.openweathermap.org/data/2.5/weather?lat=-0.038823&lon=-78.982557&appid=325e170126e812ae5378d0f369507692")

    clima
        .then(x => x.json())
        .then(resultado => console.log("Aync/Await", resultado))
        .catch(error => console.log(error));

}
lk();