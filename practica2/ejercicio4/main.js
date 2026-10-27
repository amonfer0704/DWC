let resultado = document.getElementById("resultado");
document.getElementById("calcular").addEventListener("click", function(){
    try{
        let fecha = new Date(document.getElementById("fecha").value);
        if(isNaN(fecha)){
            throw new Error("Error con el parseo a fecha");
        }
        else{
            let fechaVivida = Math.round((Date.now() - fecha) / 24 / 60 / 60 / 1000);
            resultado.innerHTML = "Llevas vivido " + fechaVivida + " días";
        }
    }
    catch(err){
        resultado.innerHTML = err;
    }
})