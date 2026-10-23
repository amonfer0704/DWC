let menu = document.getElementById("menu");
let resultado = document.getElementById("resultado");
let boton = document.getElementById("calcular");
let arrayNumerosEnteros = [];
let botonAnadir = document.getElementById("añadir");

boton.addEventListener("click", function(){
    try{
        let opcion = document.getElementById("opcion").value;
        switch(opcion){
            case "a": numerosEnteros(); break;
            case "b": listadoNumeros(); break;
            case "c": numeroMayorMenor(); break;
            default: resultado.innerHTML = "Error, ese valor no es una opción";
        }
        
    }
    catch(err){
        resultado.innerHTML = "Error " + err;
    }
})
function rellenarMenu(menu){
    menu.innerHTML += "a. Pida un número indeterminado de números enteros, hasta que se introduzca el número 0."
    menu.innerHTML += "<br>b. Muestre la lista de números introducidos en orden descendente";
    menu.innerHTML += "<br>c. Indica el número mayor y menor, así como el número de ocurrencias de cada uno."
}
añadir.addEventListener("click", function () {
    let numero = parseInt(document.getElementById("numeros").value);

    if (isNaN(numero)) {
        resultado.innerHTML = "Eso no es un número entero";
    } else if (numero === 0) {
        resultado.innerHTML = "Fin. Números introducidos: " + arrayNumerosEnteros.join(", ");
    } else {
        arrayNumerosEnteros.push(numero);
        resultado.innerHTML = "Llevas: " + arrayNumerosEnteros.join(", ") +
            "<br>Escribe 0 para terminar.";
    }

    document.getElementById("numeros").value = "";
});
function numerosEnteros(){
    arrayNumerosEnteros = [];   
    resultado.innerHTML = "Introduce números enteros. Escribe 0 para terminar: ";
}
function listadoNumeros() {
    let ordenados = arrayNumerosEnteros.sort(function (a, b) {
        return b - a;
    });
    resultado.innerHTML = "Orden descendente: " + ordenados.join(", ");
}
function numeroMayorMenor() {
    let mayor = Math.max(...arrayNumerosEnteros);
    let menor = Math.min(...arrayNumerosEnteros);
    let vecesMayor = 0;
    let vecesMenor = 0;

    for (let i = 0; i < arrayNumerosEnteros.length; i++) {
        if (arrayNumerosEnteros[i] === mayor) vecesMayor++;
        if (arrayNumerosEnteros[i] === menor) vecesMenor++;
    }

    resultado.innerHTML = "Mayor: " + mayor + " (aparece " + vecesMayor + " veces)" +
        "<br>Menor: " + menor + " (aparece " + vecesMenor + " veces)";
}

rellenarMenu(menu);