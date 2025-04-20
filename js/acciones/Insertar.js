import { insertData } from "../crud/crear.js";
import { ObtenerDatos } from "../crud/leer.js";
import { validarCamposDelFormulario } from "../utils/validaciones.js";


export const AccionDeInsertar = (e) => {
    e.preventDefault();
    const form = document.getElementById("formulario");
    const tabla = document.getElementById("tablaDatos").getElementsByTagName("tbody")[0];
    const datosDelFormulario = ObtenerDatos();

    if (validarCamposDelFormulario(datosDelFormulario, tabla)) {
        insertData(datosDelFormulario, tabla, form);
    } else {
        alert("Por favor, completa todos los campos correctamente.");
    }

}
