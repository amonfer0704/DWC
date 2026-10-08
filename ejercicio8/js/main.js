const numMaxPiramide = 50;
let piramide = document.getElementById("piramide");
document.getElementById("calcular").addEventListener("click", function(){
    let contenido = "";
    for(let i = 1; i <= numMaxPiramide; i++){
        for(let j = 0; j < i; j++){
            contenido += i + " ";
        }
        contenido += "<br>"
    }
    piramide.innerHTML = contenido;
})