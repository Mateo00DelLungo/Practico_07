window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  //le agrega la clase hidden al loader y se esconde
  loader.classList.add("loader-hidden");

  //remueve el objeto loader porque aunque no se vea sigue activo en el documento
  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

function process() {
  const $tbody = document.getElementById("turnos_table");

  $tbody.innerHTML = "";

  let limit = Math.floor(Math.random() * 8);
  for (let index = 0; index < limit; index++) {
    const $tr = document.createElement("tr");
    $tr.innerHTML = `<th scope='row'>${index + 1} </th>  
                  <td>Cliente ${index + 1}</td>
                  <td>9/11</td>
                  <td>18:00</td>
    `;
    $tbody.appendChild($tr);
  }
}
