import { pintarHTML } from './crear.js';
import { validarCamposLLenos } from '../utils/validators.js';
import { DB } from './leer.js';

export function abrirPopupEditar(registro) {
  const popup = document.getElementById("popupEditar");
  popup.style.display = "flex";

  document.getElementById("editId").value = registro.id;
  document.getElementById("editNombre").value = registro.nombre;
  document.getElementById("editApellido").value = registro.apellido;
  document.getElementById("editEmail").value = registro.email;
}

function cerrarPopup() {
  document.getElementById("popupEditar").style.display = "none";
}

export function btnCancelar() {
  document.getElementById("btnCancelar").addEventListener("click", cerrarPopup);
  document.getElementById("formEditar").addEventListener("submit", function (e) {
    e.preventDefault();

    const id = parseInt(document.getElementById("editId").value);
    const nombre = document.getElementById("editNombre").value.trim();
    const apellido = document.getElementById("editApellido").value.trim();
    const email = document.getElementById("editEmail").value.trim();

    if (!validarCamposLLenos(nombre, apellido, email)) {
      alert("Campos inválidos.");
      return;
    }

    const nuevosRegistros = DB.map(registro => {
      if (registro.id === id) {
        return { id, nombre, apellido, email };
      }
      return registro;
    });

    localStorage.setItem("registros", JSON.stringify(nuevosRegistros));
    pintarHTML(nuevosRegistros);
    cerrarPopup();
  });
}
