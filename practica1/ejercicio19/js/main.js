const pagoMañana = 25;
const pagoTarde = 30;
const pagoNoche = 35;
let totalBruto = 0;

let total = document.getElementById("total");
let resultado = document.getElementById("resultado");
document.getElementById("calcular").addEventListener("click", function(){
    try{
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let numHorasTrabajadas = parseFloat(document.getElementById("numHorasTrabajadas").value);
        let turno = obtenerTurno();
        if(validar(nombre, apellido, numHorasTrabajadas, turno)){
            let bruto = calcularBruto(numHorasTrabajadas, turno);
            let neto = calcularNeto(bruto);
            totalBruto += bruto;
            resultado.innerHTML += nombre + " " + apellido + ", bruto: " + bruto + "€, neto: " + neto + "<br>";
        }
    }
    catch(err){
        resultado.innerHTML = "Error " + err;
    }
})
document.getElementById("terminar").addEventListener("click", function(){
    total.innerHTML = "Total salario bruto: " + totalBruto + "€"
})
function validar(nombre, apellido, numHorasTrabajadas, turno){
    if(nombre.trim() === "" || apellido.trim() === "" || isNaN(numHorasTrabajadas) || numHorasTrabajadas <= 0 || turno === null){
        resultado.innerHTML = "Error con los datos";
        return false;
    }
    return true;
}
function obtenerTurno(){
    let turno = "";
    if(document.getElementById("turnoMañana").checked){
        turno = document.getElementById("turnoMañana").value;
    }
    else if(document.getElementById("turnoTarde").checked){
        turno = document.getElementById("turnoTarde").value;
    }
    else if(document.getElementById("turnoNoche").checked){
        turno = document.getElementById("turnoNoche").value;
    }
    else{
        turno = null;
    }
    return turno;
}
function calcularBruto(horas, turno){
    switch(turno){
        case "mañana": return horas * pagoMañana; break;
        case "tarde": return horas * pagoTarde; break;
        case "noche": return horas * pagoNoche; break;
        default: return 0;
    }
} 
function calcularDescuento(bruto){
    if(bruto < 600) {
        return 0.08;
    }
    else if(bruto <= 1000){
        return 0.10;
    }
    else{
        return 0.12;
    }
}
function calcularNeto(bruto){
    return bruto * (1 - calcularDescuento(bruto));
}