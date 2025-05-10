import { insertarData, eventListeners } from './crud/leer.js';
import { btnCancelar } from './crud/editar.js';

document.querySelector("#formulario").addEventListener("submit", insertarData);
document.addEventListener("DOMContentLoaded", eventListeners);
btnCancelar();
