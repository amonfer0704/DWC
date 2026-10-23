let Pendiente = {
    altura: 50,
    longitud: 100,
    puntoX: 0,
    puntoY: 0,
    longitudPendiente: function(){
        return Math.sqrt(Math.pow(this.longitud, 2) + Math.pow(this.altura, 2));
    },
    angulo: function(){
        return (Math.atan((this.altura - this.puntoY) / (this.longitud - this.puntoX))) * 180 / Math.PI;
    },
    porcentaje:  function(){
        return (this.altura / this.longitud) * 100;
    }
}
const salida = document.getElementById("salida");
salida.innerHTML = "Longitud de la pendiente: " + Pendiente.longitudPendiente().toFixed(2);
salida.innerHTML += "<br>Ángulo: " + Pendiente.angulo().toFixed(2);
salida.innerHTML += "<br>Inclinación: " + Pendiente.porcentaje();