let resultado = document.getElementById("resultado");
document.getElementById("calcular").addEventListener("click", function(){
    try{
        let bytes = parseInt(document.getElementById("bytes").value);
        if(isNaN(bytes)){
            resultado.innerHTML = "Error, el valor debe ser un número entero";
        }
        else{
            let contraseña = generarContraseña(bytes);
            resultado.innerHTML = contraseña;
        }
    }
    catch(err){
        resultado.innerHTML = "Error con los datos";
    }
})
function generarContraseña(bytes){
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let password = "";
    let numCaracter;
    for(let i = 0; i < bytes; i++){
        numCaracter = Math.floor(Math.random() * caracteres.length);
        password += caracteres[numCaracter];
    }
    return password;
}