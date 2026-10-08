document.getElementById("calcular").addEventListener("click", function(){
    let resultado = document.getElementById("resultado");
    try{
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
        if(isNaN(num1) || isNaN(num2)){
            resultado.innerHTML = "Los valores dados no son números";
        }
        else{
            resultado.innerHTML = "La suma de los números es: " + (num1 + num2) + "<br>La resta de los números es: " + (num1 - num2) + 
            "<br>La multiplicación de los números es: " + (num1 * num2);
            if(num2 === 0){
                resultado.innerHTML += "<br>La división de los números no se puede hacer, el segundo valor es 0";
            } 
            else{
                resultado.innerHTML += "<br>La división de los números es: " + (num1 / num2);
                resultado.innerHTML += "<br>El resto de la división es: " + (num1 % num2);
            }

        }
    }
    catch(err){
        resultado.innerHTML = "Los números no son válidos";
    }
})