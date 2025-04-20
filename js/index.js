import { AccionDeInsertar } from "./acciones/Insertar.js";

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("formulario");
  form.addEventListener("submit", AccionDeInsertar);

});
