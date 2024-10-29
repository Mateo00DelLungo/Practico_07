const $caption = document.getElementById("descipcion_tabla");
const $tbody = document.getElementById("turnos_table");
// loader tabla
const $loaderdiv = document.getElementById("spinner");

window.addEventListener("load", () => {
  // loader pagina
  const loader = document.querySelector(".loader");

  //le agrega la clase hidden al loader y se esconde
  loader.classList.add("loader-hidden");

  //remueve el objeto loader porque aunque no se vea sigue activo en el documento
  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});
function showSpinner() {
  $loaderdiv.classList.add("show");
  $tbody.innerHTML = " ";
  $caption.innerHTML = "Cargando...";
}
function hideSpinner() {
  $loaderdiv.classList.remove("show");
  $caption.innerHTML = "Turnos Disponibles:";
}

function process() {
  // cargamos el spinner antes de hacer fetch
  showSpinner();
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // lo ocultamos despues de que ya cargaron los datos
      $tbody.innerHTML = " ";
      hideSpinner();
      data.forEach((element) => {
        const $tr = document.createElement("tr");
        $tr.innerHTML = `
        <th scope='row'>${element.id} </th>
        <td>${element.name}</td>
        <td>9/11</td>
        <td>19:00</td>
        `;
        $tbody.appendChild($tr);
      });
    });
}
