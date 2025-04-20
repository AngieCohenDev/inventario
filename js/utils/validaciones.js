export const validarCamposDelFormulario = ({ id, nombre, apellido, email }, tabla) => {
    if (!validarCamposLLenos({id, nombre, apellido, email},tabla)) {
        console.log("Campos vacíos", "datos de entrada", id, nombre, apellido, email, tabla);
        return false
    }

    if (!ValidarEmail(email, tabla)) {
        console.log("Email inválido");
        return false
    }
    return true
}


export const validarCamposLLenos = ({ id, nombre, apellido, email }, tabla) => {
   
    if (id && nombre && apellido && email) {

        if (id === "") {
            alert("El campo ID no puede estar vacío.");
            return false;
        }
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


export const ValidarEmail = (email , tabla) => {
    for (let i = 0; i < tabla.rows.length; i++) {
        const emailTabla = tabla.rows[i].cells[3].textContent;
        if (emailTabla === email) {
            return false // El correo ya existe
        }
    }
    return true // El correo no existe
}