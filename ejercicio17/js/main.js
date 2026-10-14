let resultado = document.getElementById("resultado");
document.getElementById("calcular").addEventListener("click", function(){
    try{
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        if((isNaN(num1)) || (isNaN(num2))){
            resultado.innerHTML = "Los valores deben ser números enteros";
        }
        else{
            calcularMenor(num1, num2);
        }
    }
    catch(err){
        resultado.innerHTML = "Error con los números";
    }
});
function calcularMenor(num1, num2){
    if(num1 < num2){
        resultado.innerHTML = "El número " + num1 + " es menor que " + num2;
    }
    else if(num1 > num2){
        resultado.innerHTML = "El número " + num2 + " es menor que " + num1;
    }
    else{
        resultado.innerHTML = "Los números son iguales, ninguno es menor que otro";
    }
}
