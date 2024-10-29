const $caption = document.getElementById("descipcion_tabla");
const $tbody = document.getElementById("turnos_table");
// loader tabla
const $loaderdiv = document.getElementById("spinner");
const $inputNombre = document.getElementById("nombre_cliente");
const $inputFecha = document.getElementById("fecha_turno");

//////////////////// FORM VALIDATIONS
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

///////////////////////////

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

function newTurno() {
  let nombreCliente = $inputNombre.value;
  let fechaTurno = $inputFecha.value;

  // if (nombreCliente === "" || fechaTurno === "") {
  //   alert("Datos incorrectos, por favor rellene todos los campos");
  //   return;
  // }
}

function isLetter(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
    return true;
  return false;
}
