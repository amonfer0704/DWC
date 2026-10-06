const euroADolares = 1.12;
const euroAYenes = 178;

document.getElementById("calcular").addEventListener("click", function(){
    try{
            
        let euros = parseFloat(document.getElementById("euros").value);
        if(isNaN(euros)){
            console.log("Introduzca un número");
        }
        else{
            let yenes = document.getElementById("yenes");
            let dolares = document.getElementById("dolares");
            yenes.innerHTML = euros * euroAYenes;
            dolares.innerHTML = euros * euroADolares;
        }
    }
    catch(err){
        console.log(err);
    }
})