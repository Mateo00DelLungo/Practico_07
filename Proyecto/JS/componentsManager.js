class FluidNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- Navbar -->
  <nav class="navbar navbar-dark bg-primary">
    <div class="container-fluid ">
      <!-- boton hamburguesa -->
      <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"
        aria-controls="offcanvas" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- boton hamburguesa end-->

    </div>
  </nav>
  <!-- Navbar end-->`;
  }
}

class FluidOffCanvas extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<!-- Menu desplegable -->
<div class="offcanvas offcanvas-start bg-primary" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel"
  data-bs-theme="dark">
  <!-- header menu -->
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">Menu</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

    <div class="text-center">
      <img src="./Images/user icon.png" class="img-fluid p-1 img-thumbnail rounded mx-auto d-block" width="100px"
        alt="user icon">


    </div>
  </div>
  <!-- header menu end-->
  <!-- cuerpo menu -->
  <div class="offcanvas-body">
    <h5 class="text-sm-center">Opciones de Menu</h5>
    <ul class="nav flex-column nav-underline nav-justified">
      <li class="nav-item ">
        <a class="nav-link active" aria-current="page" href="./index.html">Inicio</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">Consultar Turnos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="./create.html">Nuevo Turno</a>
      </li>
    </ul>

  </div>
  <!-- cuermo menu end-->
</div>
<!-- Menu desplegable end-->`;
  }
}

class FluidFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `  

  <footer class="container-fluid bg-primary  text-center p-3">
    @2024 JSONPlaceholder
  </footer>`;
  }
}

customElements.define("fluid-navbar", FluidNavbar);
customElements.define("fluid-offcanvas", FluidOffCanvas);
customElements.define("fluid-footer", FluidFooter);
