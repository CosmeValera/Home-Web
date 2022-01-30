//Cuando pinchas al boton se crean mas dispositivos
async function cargarMasDispositivos() {
  let respuesta = await fetch("./pugToImport.json").then((response) =>
    response.json()
  );
  // .then((json) => console.log(json)); //Esto hay que comentarlo pq sino la respuesta vale console.log(json) o sea undefined

  document.querySelector("tbody").innerHTML += crearDispositivos({
    dispositivos: respuesta,
  });
}

async function cargarDispositivosfiltrados(palabraFiltrar) {
  let respuesta = await fetch("./pugToImport.json");
  if (respuesta.ok) {
    let dispositivosRes = await respuesta.json();
    if (palabraFiltrar) {
      //Con esto comprobamos que palabra no sea null ni sea undefined
      const regex = new RegExp(palabraFiltrar, "i"); //Case insensitive el regex
      console.log(dispositivosRes)
      console.log("1")
      dispositivosRes = dispositivosRes.filter((dispositivo) =>
        regex.test(dispositivo.title) || regex.test(dispositivo.desc)
      );
      console.log("12")
       document.querySelector("tbody").innerHTML = crearDispositivos({
         dispositivos: dispositivosRes,
       });
      // document.querySelector("tbody").innerHTML = "<p>hola</p>";
      console.log("13")
    }
  } else {
    console.log(`Ha habido un error: ${respuesta.statusText}`);
  }
}

//Filtra conforme escribes en el buscador
async function filtrar(evt) {
  console.log(evt.target.value);
  cargarDispositivosfiltrados(evt.target.value);
}

//Boton para cargarMasDispositivos
document
  .getElementById("boton")
  .addEventListener("click", cargarMasDispositivos);

//FILTRO con el buscador
document.getElementById("filtro").addEventListener("keyup", filtrar);
