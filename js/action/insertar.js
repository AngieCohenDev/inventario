import { InsertarDatos } from "../crud/crear.js";
import { ObtenerDatos } from "../crud/leer.js";
import { validacionCamposFormulario } from "../utils/validators.js";

export const Insertar = (e) => {
    e.preventDefault();
    const form = document.getElementById("formulario");
    const tabla = document.getElementById("tablaDatos").getElementsByTagName("tbody")[0];
    const datosDelFormulario = ObtenerDatos();

    if (validacionCamposFormulario(datosDelFormulario, tabla)) {
        InsertarDatos(datosDelFormulario, tabla, form);
    } else {
        alert("Por favor, completa todos los campos correctamente.");
    }

}