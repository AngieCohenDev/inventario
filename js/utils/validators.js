export const validacionCamposFormulario = ({ nombre, apellido, email }, tabla) => {
    if (!validarCamposLLenos({nombre, apellido, email},tabla)) {
        return false
    }

    if (!ValidarEmail(email, tabla)) {
        return false
    }
    return true
}


export const validarCamposLLenos = ({ nombre, apellido, email }, tabla) => {
   
    if (nombre && apellido && email) {

        if (nombre === "") {
            alert("El campo Nombre no puede estar vacío.");
            return false;
        }
        if (apellido === "") {
            alert("El campo Apellido no puede estar vacío.");
            return false;
        }
        if (email === "") {
            alert("El campo Email no puede estar vacío.");
            return false;
        }
    }
    return true
}


export const ValidarEmail = (email, tabla) => {

    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const esValido = regex.test(email);
    if (!esValido) return false;

    for (let i = 0; i < tabla.rows.length; i++) {
        const emailTabla = tabla.rows[i].cells[3].textContent;
        if (emailTabla === email) {
            return false; 
        }
    }

    return true; 
};
