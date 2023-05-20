var munieco = document.querySelector(".contenedorMunieco");
var contenedor = document.querySelector(".contenedorParrafo");
var resultado = document.querySelector(".textoResultado");

function encriptar() {
  ocultarAdelante();
  var cajaTexto = recuperarTexto();
  resultado.textContent = encriptarTexto(cajaTexto);
}

function desencriptar() {
  ocultarAdelante();
  var cajaTexto = recuperarTexto();
  resultado.textContent = desencriptarTexto(cajaTexto);
}

function recuperarTexto() {
  var cajaTexto = document.querySelector(".cajaTexto");
  return cajaTexto.value;
}

function ocultarAdelante() {
  var seccion2 = document.querySelector(".seccion2");
  if (window.innerWidth <= 768 && window.innerWidth <= 1280) {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
    document.querySelector(".contenedorCopiar").style.display = "block";
    seccion2.style.height = "35%";
  }
  if (
    window.innerWidth <= 376 &&
    window.innerWidth <= 768 &&
    window.innerWidth <= 1280
  ) {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
    document.querySelector(".contenedorCopiar").style.display = "block";
    document.querySelector(".cajaTexto").style.height = "280px";
    document.querySelector(".contenedorBotones").style.marginTop = "8%";
    document.querySelector(".alerta").style.marginTop = "10%";

    seccion2.style.marginTop = "45%";
    seccion2.style.paddingBottom = "550px";
    seccion2.style.height = "50%";
  } else {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
    document.querySelector(".contenedorCopiar").style.display = "block";
  }
}

function copiar() {
  var contenido = resultado.textContent;
  document.querySelector(".cajaTexto").value = contenido;
}

function encriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal += "ai";
    } else if (texto[i] == "e") {
      textoFinal += "enter";
    } else if (texto[i] == "i") {
      textoFinal += "imes";
    } else if (texto[i] == "o") {
      textoFinal += "ober";
    } else if (texto[i] == "u") {
      textoFinal += "ufat";
    } else {
      textoFinal += texto[i];
    }
  }
  return textoFinal;
}

function desencriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal += "a";
      i++;
    } else if (texto[i] == "e") {
      textoFinal += "e";
      i += 4;
    } else if (texto[i] == "i") {
      textoFinal += "i";
      i += 3;
    } else if (texto[i] == "o") {
      textoFinal += "o";
      i += 3;
    } else if (texto[i] == "u") {
      textoFinal += "u";
      i += 3;
    } else {
      textoFinal += texto[i];
    }
  }
  return textoFinal;
}
