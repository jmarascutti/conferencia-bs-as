function limpiarCampos() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('categoria').value = 'Estudiante';
    document.getElementById('importeTotal').innerHTML = 'Total a Pagar: $';
}


const MENSAJES_VALIDACIONES = {
    NOMBRE_VACIO: "Por favor, ingrese su nombre",
    APELLIDO_VACIO: "Por favor, ingrese su apellido",
    EMAIL_VACIO: "Por favor, ingrese su correo electrónico",
    CANTIDAD_ENTRADAS_VACIO: "Por favor, ingrese la cantidad de entradas"
}


function obtenerResumen() {
    if (validarCampos()) {
       alert("paso todo okey")
    } 
}

function validarCampos() {
    var ok = true; 
    var campoVacio = null;
    
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');
    var cantidad = document.getElementById('cantidad');

    if (nombre.value == "") {
        alert(MENSAJES_VALIDACIONES.NOMBRE_VACIO);
        campoVacio = nombre;
        ok = false; 
    } 
    else if (apellido.value == "") {
        alert(MENSAJES_VALIDACIONES.APELLIDO_VACIO);
        campoVacio = apellido;
        ok = false;
    } else if (email.value == "") {
        alert(MENSAJES_VALIDACIONES.EMAIL_VACIO);
        campoVacio = email;
        ok = false;
    } else if (cantidad.value == "") {
        alert(MENSAJES_VALIDACIONES.CANTIDAD_ENTRADAS_VACIO);
        campoVacio = cantidad;
        ok = false;
    }

    if (campoVacio) {
        campoVacio.focus(); 
    }
    
    return ok;
}