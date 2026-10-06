document.getElementById("calcular").addEventListener("click", function(){
    try{
        let radio = parseFloat(document.getElementById("radio").value);
        if(isNaN(radio)){
            let error = document.getElementById("error");
            error.innerHTML = "Los datos no son números";
        }
        else{
            let area = document.getElementById("area");
            let perimetro = document.getElementById("perimetro");
            area.innerHTML = Math.PI * (Math.pow(radio, 2));
            perimetro.innerHTML = 2 * Math.PI * radio;
        }
    }
    catch(err){
        console.log(err);
    }
})