//TODO no me va el fetch, y de todas formas puedo hacer fetch a un txt que tengo dentro?
//TODO 2, cuando me vaya eso implementar la plantilla PUG y ponerle un if por si esa spec tiene barra o no
async function cargarUsuarios() {
    const respuesta = await fetch("./pugToImport.txt");
    console.log(respuesta)

}


//Cargar usuarios usando pug
cargarUsuarios();