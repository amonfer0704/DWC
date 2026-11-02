const btnAbrir = document.getElementById("btn-abrir");
const btnCerrar = document.getElementById("btn-cerrar");
const spanAncho = document.getElementById("res-ancho");
const spanAlto = document.getElementById("res-alto");
const spanLeft = document.getElementById("pos-left");
const spanTop = document.getElementById("pos-top");
const mensaje = document.getElementById("mensaje");

let ventana = null;

function calcularPosicion(){
    let anchoPantalla = screen.width;
    let altoPantalla = screen.height;
    let pantalla = {
        ancho: anchoPantalla,
        alto: altoPantalla,
        izquierda: anchoPantalla - 40,
        arriba: altoPantalla - 20
    }
    return pantalla;
}

function mostrarDatos(){
    const pos = calcularPosicion();
    spanAncho.textContent = pos.ancho;
    spanAlto.textContent = pos.alto;
    spanLeft.textContent = pos.izquierda;
    spanTop.textContent = pos.arriba;
}

function mostrarMensaje(texto) {
    mensaje.textContent = texto;
    mensaje.hidden = false;
}

function ocultarMensaje() {
    mensaje.hidden = true;
}

btnAbrir.addEventListener("click", function(){
    ocultarMensaje();
    if(ventana && !ventana.closed){
        ventana.focus();
    }
    else{
        let pos = calcularPosicion();
        mostrarDatos();
        const caracteristicas =
            "width=300,height=200,left=" + pos.left + ",top=" + pos.top;
 
        ventana = window.open("about:blank", "ventanaPosicionada", caracteristicas);
        if (ventana) {
            ventana.document.write(
                "<title>Ventana nueva</title>" +
                "<p>Posición: left = " + pos.left + ", top = " + pos.top + "</p>"
            );
            ventana.document.close();
        } else {
            mostrarMensaje("El navegador ha bloqueado la ventana emergente. Permítela para esta página e inténtalo de nuevo.");
        }
    }
})

btnCerrar.addEventListener("click", function(){
    ocultarMensaje();
    if (ventana && !ventana.closed) {
        ventana.close();
    } else {
        mostrarMensaje("No hay ninguna ventana abierta.");
    }
    ventana = null;

})
mostrarDatos();