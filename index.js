//TODOme dice referenceError, intentar solucionar
async function cargarUsuarios() {
  const respuesta = await require("./pugToImport.json");
  if (respuesta.ok) {
    console.table(respuesta[0]);
    console.table(respuesta[0].specs);

    document.querySelector("tbody").innerHTML += crearDispositivos({
      dispositivos: respuesta,
    });
  }
}

//Cargar usuarios usando pug
cargarUsuarios();
