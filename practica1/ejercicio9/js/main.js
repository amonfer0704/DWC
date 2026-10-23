const numMaxPiramide = 50;
let piramide = document.getElementById("piramide");
document.getElementById("calcular").addEventListener("click", function(){
    let contenido = "";
    for(let i = 1; i <= numMaxPiramide; i++){
        for(let j = 1; j <= i; j++){
            contenido += j + " ";
        }
        contenido += "<br>"
    }
    piramide.innerHTML = contenido;
})