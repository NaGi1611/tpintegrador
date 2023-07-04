let key = "eb4ca5b98c0142d9b6e714c466aba3cf"; 
let pais = "ar"
let url = `https://newsapi.org/v2/everything?q=Contabilidad&contry=${pais}&from=2023-07-02&sortBy=popularity&apiKey=${key}`

function cargarDatos() {
  alert("se cargaran datos desde archivo");

  fetch("./datos/alumnos.json")
    .then((response) => response.json())
    .then((data) => {
      // Aquí puedes trabajar con los datos del archivo JSON
      const alumnos = JSON.stringify(data);
      localStorage.setItem("alumnos", alumnos);
      // console.log("datos",alumnos);
    })
    .catch((error) => {
      alert(error);
      console.error("Error al leer el archivo JSON:", error);
    });

  fetch("./datos/carreras.json")
    .then((response) => response.json())
    .then((data) => {
      const carreras = JSON.stringify(data);
      localStorage.setItem("carreras", carreras);
      // console.log("datos", carreras);
    })
    .catch((error) => {
      alert(error);
      // console.error("Error al leer el archivo JSON:", error);
    });

  fetch("./datos/materias.json")
    .then((response) => response.json())
    .then((data) => {
      const materias = JSON.stringify(data);
      localStorage.setItem("materias", materias);
      // console.log("datos", materias);
    })
    .catch((error) => {
      alert(error);
      // console.error("Error al leer el archivo JSON:", error);
    });
}
