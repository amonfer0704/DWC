const visor = document.getElementById("visor");
const campoUrl = document.getElementById("url");
const urlActual = document.getElementById("url-actual");
const btnAtras = document.getElementById("btn-atras");
const btnAdelante = document.getElementById("btn-adelante");
const btnIr = document.getElementById("btn-ir");

function mostrarURL(){
    try{
        const url = visor.contentWindow.location.href;
        urlActual.textContent = url;
        if (url !== "about:blank") {
            campoUrl.value = url;
        }
    } catch (error) {
        urlActual.textContent = visor.src + " (otro origen: no se puede leer la URL real)";
    }
}

function moverHistorial(paso) {
    try {
        visor.contentWindow.history.go(paso);
    } catch (error) {
        urlActual.textContent = "No se puede navegar: la página del iframe es de otro origen.";
    }
}
btnAtras.addEventListener("click", function(){
    moverHistorial(-1);
})
btnAdelante.addEventListener("click", function(){
    moverHistorial(1);
})
btnIr.addEventListener("click", function(){
    const texto = campoUrl.value.trim();
    if (texto !== "") {
        visor.src = texto;
    }

})

visor.addEventListener("load", mostrarURL);
mostrarURL();