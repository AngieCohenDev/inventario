import { Insertar } from "./action/insertar.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  form.addEventListener('submit',Insertar)


 
});
