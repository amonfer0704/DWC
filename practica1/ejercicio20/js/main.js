let resultado = document.getElementById("resultado");
let numSecreto = Math.floor(Math.random() * 99) + 1
document.getElementById("calcular").addEventListener("click", function(){
    try{
        
        let num = parseInt(document.getElementById("num").value);
        if(isNaN(num)){
            resultado.innerHTML = "El valor debe ser un número";
        }
        else{
            calcularNumero(num);
        }
    }
    catch(err){
        resultado.innerHTML = "Error: " + err;
    }
})
function calcularNumero(num){
    if(numSecreto > num){
        resultado.innerHTML = "El número es menor que el número secreto";
    }
    else if (numSecreto < num){
        resultado.innerHTML = "El número es mayor que el número secreto";
    }
    else{
        resultado.innerHTML = "Felicidades, has encontrado el número secreto";
    }
}