let original = document.getElementById("original");
let invertido = document.getElementById("invertido");
let miArray = [1, "hola", true, 3.5, "adiós", null, 42];
let arrayInvertido = [];
function invertirArray(array){
    let resultado = [];
    for (let i = array.length - 1; i >= 0; i--) {
        resultado.push(array[i]);
    }

    return resultado;
}
original.innerHTML = "Array original: ";
for(let i = 0; i < miArray.length; i++){
    original.innerHTML += miArray[i] + " ";
}
arrayInvertido = invertirArray(miArray);
invertido.innerHTML = "Array invertido: ";
for(let i = 0; i < arrayInvertido.length; i++){
    invertido.innerHTML += arrayInvertido[i] + " ";
}