
//Acceso a los elementos HTML del DOM

let x = document.body;  //Accede a todo el contenido que se encuentra dentro del tag "body"
console.log(x);

let links = document.links;
console.log("Enlaces: ", links);


    // "imagenes" almacena en una colección HTML los datos de todos los elementos img del dom
let imagenes = document.images;
console.log("Imagenes: ", imagenes);

console.log("Imagen 3: ", imagenes[2]); //Las colecciones se pueden comportar de manera similar a un array.
                                        //Así, se accede a un elemento de la coleccción en específico, en este caso, al elemento en la posición 2.

console.log("\n\n\n")
let formularios = document.forms;       //Acceso a todos los formularios del DOM
console.log("Formularios: ", formularios);
console.log("ClassList de los formularios\n", document.forms[0].classList); //devuleve un DOMTokenList que funciona de manera similar a un array, almacenando como elementos cada clase del elemento especificado.
console.log("ClassName de los formularios\n", document.forms[1].className, "\n\n", document.forms[2].className); //Devuelve un string con toda la clase del elemento en cuestión en el mismo string, siendo más difícil de manipular una clase en particular, pero mucho más simple si se desea modificarla por completo sin contemplaciones.


const y = document.getElementsByClassName("formulario");    //Accede a los elementos que tienen la clase ingresada
console.log("Formularios clase: ", y, "Formulario clase 1: ", y[0]);

const elementoPorId = document.getElementById("listarpokemon");
console.log("Por id: ", elementoPorId);

let formularioPrimero = document.querySelector(".formulario"); //Selecciona el primer elemento indicado que encuentre
console.log("Query selector: ", formularioPrimero);

let todosFormularios = document.querySelectorAll(".formulario") //Selecciona todos los elementos indicados. Similar a getElementesByClassName pero con cualquier identificados.

//Modificar el contenido
document.getElementById("descripcionBreve").textContent = "Modificar contenido de etiqueta"


//Modificar el estilo
let formularioOriginal = document.forms
console.log(formularioOriginal[0]);
let jl = document.getElementById("descripcionBreve");
jl.style.border = "20px green solid";


//Agregar nuevo elemento
let contenedor = document.getElementById("list-memes");
let button = document.createElement("button");
button.innerText = "Elemento de prueba";
contenedor.appendChild(button);

//Eliminar elemento
button.remove();



//Eventos - se pueden agregar eventos al HTML por medio de clases, id, etiquetas
let buton = document.createElement("button");
buton.innerText = "Enviar";

buton.addEventListener("click", ()=>{
    alert("Envió correctamente");
})


contenedor.appendChild(buton);







