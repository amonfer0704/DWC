const btnAbrir = document.getElementById("btn-abrir");
const btnCerrar = document.getElementById("btn-cerrar");
const btnEnviar = document.getElementById("btn-enviar");
const campoPrincipal = document.getElementById("campo-principal");
const recibido = document.getElementById("recibido");
const estado = document.getElementById("estado");

let ventana = null;

const origen = window.location.origin === "null" ? "*" : window.location.origin;

function ventanaAbierta() {
    return ventana !== null && !ventana.closed;
}

function actualizarEstado() {
    const abierta = ventanaAbierta();
    estado.textContent = abierta ? "abierta" : "cerrada";
    estado.className = "estado " + (abierta ? "abierta" : "cerrada");
}

function abrir() {
    if (ventanaAbierta()) {
        ventana.focus();
    } else {
        ventana = window.open("ventana-secundaria.html", "secundaria", "width=420,height=420");
    }
    actualizarEstado();
}

function cerrar() {
    if (ventanaAbierta()) {
        ventana.close();
    }
    actualizarEstado();
}

function enviar() {
    if (ventanaAbierta()) {
        ventana.postMessage(campoPrincipal.value, origen);
    } else {
        alert("Abre primero la ventana secundaria.");
    }
}

function mensajeValido(evento) {
    const origenCorrecto = origen === "*" || evento.origin === origen;
    return evento.source === ventana && origenCorrecto;
}

function recibir(evento) {
    if (mensajeValido(evento)) {
        recibido.textContent = evento.data;
    }
}

btnAbrir.addEventListener("click", abrir);
btnCerrar.addEventListener("click", cerrar);
btnEnviar.addEventListener("click", enviar);
window.addEventListener("message", recibir);

setInterval(actualizarEstado, 500);

actualizarEstado();