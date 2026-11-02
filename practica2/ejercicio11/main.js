const btnRedimensionar = document.getElementById("btn-redimensionar");
const spanAncho = document.getElementById("ancho");
const spanAlto = document.getElementById("alto");

function mostrarTamaño(){
    spanAncho.textContent = window.outerWidth;
    spanAlto.textContent = window.outerHeight;
}

btnRedimensionar.addEventListener("click", function(){
    window.resizeTo(600, 500);
    mostrarTamaño();
})
window.addEventListener("resize", mostrarTamaño);
mostrarTamaño();