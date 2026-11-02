var array = [];
var resultado = document.getElementById("lista-array");

document.querySelectorAll("button").forEach(boton =>{
    boton.addEventListener("click", function(){
        var valor = document.getElementById("valor").value;
        var posicion = document.getElementById("posicion").value;
        switch(boton.id){
            case "btn-push": array.push(valor); break;
            case "btn-unshift": array.unshift(valor); break;
            case "btn-shift": array.shift(); break;
            case "btn-pop": array.pop(); break;
            case "btn-insertar-pos": array[posicion] = valor; break;
            case "btn-eliminar-pos": array.splice(posicion, 1); break;
            case "btn-asc": array.sort((a, b) => a - b); break;
            case "btn-desc": array.sort((a, b) => b - a); break;
        }
        mostrar();
    })
})

function mostrar() {
    resultado.textContent = array.length ? array.join(", ") : "(array vacío)";
}
mostrar();