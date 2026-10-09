document.getElementById("sinGenerador").addEventListener("click", function(){
    let resultado = document.getElementById("resultado");
    for(let i = 1; i <= 100; i++){
        if((i % 7 === 0) || (i % 10 === 7)){
            resultado.innerHTML += "PUM<br>"
        }
        else{
            resultado.innerHTML += i + " ";
        }
    }
});
document.getElementById("conGenerador").addEventListener("click", function(){
    let resultadoGenerador = document.getElementById("resultadoGenerador");
    let gen = generador();
    for(valor of gen){
        resultadoGenerador.innerHTML += valor;
    }
}); 
function* generador(){
    for(let i = 1; i <= 100; i++){
        if((i % 7 === 0) || (i % 10 === 7)){
        yield "PUM<br>"
    }
    else{
        yield i + " ";
    }
    }
    
}