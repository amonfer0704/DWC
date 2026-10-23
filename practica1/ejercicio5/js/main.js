document.getElementById("calcular").addEventListener("click", function(){
    let resultado = document.getElementById("resultado");
    try{
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);

        if(isNaN(num1) || isNaN(num2)){
            resultado.innerHTML = "Los valores no son números enteros";
        }
        else if(num1 <= -100 || num1 > 5000 || num2 <= -100 || num2 > 5000){
            resultado.innerHTML = "Valores fuera del rango";
        }
        else if(num1 >= num2){
            resultado.innerHTML = "El primer valor debe ser mayor que el segundo valor";
        }
        else{
            resultado.innerHTML = "";
            let pares = ""
            for(let i = num1; i < num2; i++){
                if(i % 2 == 0){
                    pares += i + " ";
                }
            }
            resultado.textContent = pares;
        }
    }
    catch(err){
        resultado.innerHTML = "Error con los datos";
    }
})