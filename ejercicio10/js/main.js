document.getElementById("calcular").addEventListener("click", () => {
     try{
        let num1 = parseInt(document.getElementById("num1").value);
        let resultado = document.getElementById("resultado");
        if(isNaN(num1)){
            resultado.innerHTML = "El valor debe ser un número entero";
        }
        else{
            resultado.innerHTML = "El número es: " + (num1%2==0?"PAR":"IMPAR");
            //resultado.innerHTML = "El número es: " + numero(num1);
        }
    }
     catch(err){
        resultado.innerHTML = "Error con los datos";
    }
})
//Otra forma de hacerla
// numero = (num) =>{
//     return (num%2==0?"PAR":"IMPAR");
// };
