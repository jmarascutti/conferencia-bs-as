function limpiarCampos() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("categoria").value = "Estudiante";
  document.getElementById("importeTotal").innerHTML = "Total a Pagar: $";
}

const MENSAJES_VALIDACIONES = {
  NOMBRE_VACIO: "Por favor, ingrese su nombre",
  APELLIDO_VACIO: "Por favor, ingrese su apellido",
  EMAIL_VACIO: "Por favor, ingrese su correo electrónico",
  CANTIDAD_ENTRADAS_VACIO: "Por favor, ingrese la cantidad de entradas",
  CANTIDAD_ENTRADAS_NUMEROS:
    "Por favor, debe ingresar una cantidad de entradas expresadas en números enteros mayor a 0",
};

function obtenerResumen() {
  if (validarCampos()) {
    obtenerTotal();
  }
}

function validarCampos() {
  var ok = true;
  var campoVacio = null;

  var nombre = document.getElementById("nombre");
  var apellido = document.getElementById("apellido");
  var email = document.getElementById("email");
  var cantidad = document.getElementById("cantidad");

  if (nombre.value == "") {
    alert(MENSAJES_VALIDACIONES.NOMBRE_VACIO);
    campoVacio = nombre;
    ok = false;
  } else if (apellido.value == "") {
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

function obtenerTotal() {
  var cantEntradas,
    total,
    categoria,
    entradaEstudiante,
    entradaTrainee,
    entradaJr,
    general;

  cantEntradas = document.getElementById("cantidad").value;
  categoria = document.getElementById("categoria").value;

  entradaEstudiante = 200 - (200 * 80) / 100;
  entradaTrainee = 200 - (200 * 50) / 100;
  entradaJr = 200 - (200 * 15) / 100;
  general = 200;

  if (cantEntradas > 0 && !isNaN(cantEntradas) && cantEntradas % 1 == 0) {
    if (categoria == "Estudiante") {
      total = entradaEstudiante * cantEntradas;
      document.getElementById("importeTotal").innerHTML =
        "Total a Pagar: $" + total;
    } else if (categoria == "Trainee") {
      total = entradaTrainee * cantEntradas;
      document.getElementById("importeTotal").innerHTML =
        "Total a Pagar: $" + total;
    } else if (categoria == "Junior") {
      total = entradaJr * cantEntradas;
      document.getElementById("importeTotal").innerHTML =
        "Total a Pagar: $" + total;
    } else if (categoria == "General") {
      total = general * cantEntradas;
      document.getElementById("importeTotal").innerHTML =
        "Total a Pagar: $" + total;
    }
  } else {
    window.alert(MENSAJES_VALIDACIONES.CANTIDAD_ENTRADAS_NUMEROS);
    document.getElementById("cantidad").focus();

  }
}
