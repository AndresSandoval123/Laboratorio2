const url = ("https://backend-production-3a6e.up.railway.app/api/autor/getLibAut");
const informacion = document.getElementById("informacion");
const btnConsultar = document.getElementById("btnConsultar");
const btnLimpiar = document.getElementById("btnLimpiar");



btnConsultar.addEventListener("click",()=>{
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}${response.statusText}`)
      }
      return response.json() // convierte la respuesta a JSON
    })
    .then((datos) => {
      let libros = datos.info;
      informacion.innerHTML="";//Limpia el contenido para que no se acomule
      for (let i of libros) {
        informacion.innerHTML += `
        <tr>
              <td>${i.isbn}</td>
              <td>${i.titulo}</td>
              <td>${i.ragar.nombre}</td>
          </tr>
        `
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
})
btnLimpiar.addEventListener("click",()=>{
  informacion.innerHTML="";
});
