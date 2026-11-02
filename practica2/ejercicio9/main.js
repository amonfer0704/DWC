var ancho = document.getElementById("ancho");
var alto = document.getElementById("alto");
var tipo = document.getElementById("tipo");
var itemsTipo = document.querySelectorAll("#tipos li");

function obtenerTipo(ancho){
    if(ancho < 768){
        return "movil";
    }
    if(ancho <= 1024){
        return "tablet";
    }
    return "desktop";
}

const nombres = {
    movil: "Móvil",
    tablet: "Tablet",
    desktop: "Desktop"
};

function actualizar(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    var tipoPantalla = obtenerTipo(width);

    ancho.textContent = width;
    alto.textContent = height;
    tipo.textContent = nombres[tipoPantalla];
}
window.addEventListener("resize", actualizar);
actualizar();