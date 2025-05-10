import { pintarHTML } from './crear.js';
import { validarCamposLLenos } from '../utils/validators.js';

export let DB = [];

export function eventListeners() {
  DB = JSON.parse(localStorage.getItem("registros")) || [];
  pintarHTML(DB);
}

export function insertarData(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!validarCamposLLenos(nombre, apellido, email)) {
    alert("Algo falló");
    return;
  }

  const registroId = {
    id: Date.now(),
    nombre,
    apellido,
    email,
  };

  DB = [...DB, registroId];
  localStorage.setItem("registros", JSON.stringify(DB));
  pintarHTML(DB);

  document.querySelector("#formulario").reset();
}

export function eliminarRegistro(id) {
  if (confirm("¿Estás seguro de que quieres eliminar este registro?")) {
    DB = DB.filter(registro => registro.id !== id);
    localStorage.setItem("registros", JSON.stringify(DB));
    pintarHTML(DB);
  }
}
