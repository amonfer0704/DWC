let resultado = document.getElementById("resultado");
document.getElementById("calcular").addEventListener("click", function(){
    try{
        let edad = new Date(document.getElementById("edad").value);
        if(isNaN(edad)){
            throw new Error("Error con el parseo de la fecha");
        }
        else{
            let diferencia = Date.now() - edad;
            let minutos = Math.round(diferencia / 1000 / 60);
            let horas = Math.round(minutos / 60);
            let dias = Math.round(horas / 24);
            let años = Math.floor(dias / 365);
            resultado.innerHTML = "Tienes " + años + " años, " + dias + " dias " + horas + " horas, " + minutos + " minutos";
        }
    }
    catch(err){
        resultado.innerHTML = err;
    }
})