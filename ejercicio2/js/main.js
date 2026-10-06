let resultado = document.getElementById("resultado");
document.getElementById("calcular").addEventListener("click", function(){
    let valorA = document.getElementById("valorA").value;
    let valorB = document.getElementById("valorB").value;
    if((valorA === "0") && (valorB === "0")){
        resultado.innerHTML = "0";
    }
    else if((valorA === "1") && (valorB === "0")){
        resultado.innerHTML = "1";
    }
    else if((valorA === "0") && (valorB === "1")){
        resultado.innerHTML = "1";
    }
    else if((valorA === "1") && (valorB === "1")){
        resultado.innerHTML = "0";
    }
    else{
        resultado.innerHTML = "Error con los datos";
    }
})