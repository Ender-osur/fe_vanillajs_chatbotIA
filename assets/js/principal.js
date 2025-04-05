const cajaTexto = document.getElementById("input-texto");
const areaTrabajo = document.getElementById("spn-cuerp");
const btnEnviar = document.getElementById("img-enviar");
const subtitulo = document.getElementById("spn-subtitle");
const idiomaDestino = document.getElementById("cmb-idioma");


const marco = document.querySelector(".traductor-contenedor");
const codeUsuario = crypto.randomUUID();

subtitulo.innerHTML = fechaActual();

