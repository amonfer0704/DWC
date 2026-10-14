let resultado = document.getElementById("resultado");
let bloqueMenu = document.getElementById("bloqueMenu");
document.getElementById("btnNum").addEventListener("click", function(){
    bloqueMenu.style.display = "block";
    rellenarMenu();
    resultado.innerHTML = "";
});
document.getElementById("calcular").addEventListener("click", function(){
    try{
        let num = parseInt(document.getElementById("num").value);
        let opcion = parseInt(document.getElementById("opcion").value);
        if(isNaN(opcion) || isNaN(num)){
            resultado.innerHTML = "La opción debe ser un número";
        }
        else{
            switch(opcion){
                case 1: resultado.innerHTML=esMultiplo(num, 2); break;
                case 2: resultado.innerHTML=esMultiplo(num, 3); break;
                case 3: resultado.innerHTML=esMultiplo(num, 5); break;
                case 0: {
                    resultado.innerHTML ="Ha elegido salir";
                    bloqueMenu.style.display = "none";} break;
                default: resultado.innerHTML = "Ese número no está en la lista de opciones";
            }
        }

    }
    catch(err){
        resultado.innerHTML = "Error en el try";
    }
});
function esMultiplo(num, int){
    return (num % int == 0?"Es múltiplo":"No es múltiplo");
}
function rellenarMenu(){
    let menu = document.getElementById("menu");
    menu.innerHTML = "Menú<br>---<br>1. Calcular si es múltiplo de 2.";
    menu.innerHTML += "<br>2. Calcular si es múltiplo de 3.";
    menu.innerHTML += "<br>3. Calcular si es múltiplo de 5.";
    menu.innerHTML += "<br>0. Salir";
}