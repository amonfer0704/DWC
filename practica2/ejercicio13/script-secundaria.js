const campoSecundaria = document.getElementById("campo-secundaria");
const btnEnviar = document.getElementById("btn-enviar");
const recibido = document.getElementById("recibido");

const origen = window.location.origin === "null" ? "*" : window.location.origin;

function principalDisponible() {
    return window.opener !== null && !window.opener.closed;
}

function enviar() {
    if (principalDisponible()) {
        window.opener.postMessage(campoSecundaria.value, origen);
    } else {
        alert("La ventana principal no está disponible.");
    }
}

function mensajeValido(evento) {
    const origenCorrecto = origen === "*" || evento.origin === origen;
    return evento.source === window.opener && origenCorrecto;
}

function recibir(evento) {
    if (mensajeValido(evento)) {
        recibido.textContent = evento.data;
    }
}

btnEnviar.addEventListener("click", enviar);
window.addEventListener("message", recibir);