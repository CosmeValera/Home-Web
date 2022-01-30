/*TODO: me dice referenceError, intentar solucionar*/
// async function cargarMasDispositivos() {
//   // const respuesta = $.getJSON("./pugToImport.json");
//   const respuesta = await fetch("./pugToImport.json");
//   console.table(respuesta[0]);
//   // console.table(respues  ta[0].specs[0]);

//   console.log(respuesta.ok);
//   // if (respuesta.ok) {

//   document.querySelector("tbody").innerHTML += crearDispositivos({
//     dispositivos: respuesta,
//   });
//   // }
// }

async function cargarMasDispositivos() {
  console.log("HOLA");
  respuesta = await fetch("./pugToImport.json")
    .then((response) => response.json());
    // .then((json) => console.log(json)); //Esto hay que comentarlo pq sino la respuesta vale console.log(json) o sea undefined 

  document.querySelector("tbody").innerHTML += crearDispositivos({
    dispositivos: respuesta,
  });
}

// function hola() {
//   alert("Hola");
// }

console.log("1");
document
  .getElementById("boton")
  .addEventListener("click", cargarMasDispositivos);
//Esto es para que se esperee a que la ventana se ejecute
// window.addEventListener('load', cargarMasDispositivos, false);
console.log("2");
//Cargar usuarios usando pug
// cargarMasDispositivos();
