document.getElementById("calcular").addEventListener("click", function(){
    let resultado = document.getElementById("resultado");
    try{
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
        let num3 = parseFloat(document.getElementById("num3").value);
        if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
            resultado.innerHTML = "Los valores no son números";
        }
        else if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10 || num3 < 0 || num3 > 10){
            resultado.innerHTML = "Los valores salen del rango";
        }
        else{
            let notaMedia = (num1 + num2 + num3) / 3;
            if(notaMedia < 5){
                resultado.innerHTML = "SUSPENSO"; 
            }
            else if(notaMedia < 7){
                resultado.innerHTML = "APROBADO"; 
            }
            else if(notaMedia < 8.5){
                resultado.innerHTML = "NOTABLE"; 
            }
            else{
                resultado.innerHTML = "SOBRESALIENTE";
            }
        }
    }
    catch(err){
        resultado.innerHTML = "Error con las notas";
    }
})