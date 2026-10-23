let listaAlumnos = new Array();
let Persona = {
    nombre: "Vilche",
    edad: 26,
    genero: "Helicóptero",
    obtDetalles: function () {
        return "Nombre: " + this.nombre + " " + " edad: " + this.edad + " genero: " + this.genero;
    }
}
let Estudiante = {
    nombre: "Curro",
    edad: "70",
    genero: "Masculino",
    curso: "1º",
    grupo: "DAW",
    obtDetalles: function () {
        return "Nombre: " + this.nombre + " " + " edad: " + this.edad + " genero: " + this.genero + " Curso: " + this.curso + " Grupo: " + this.grupo;
    },
    registrar: function(estudiante){
        if(estudiante instanceof Estudiante && !listaAlumnos.find(estudiante)){
            listaAlumnos.push(estudiante);
        }
        return listaAlumnos;
    }

}

let Profesores = {
    nombre: "Jose Luis",
    edad: 34,
    genero: "Masculino",
    obtDetalles: function () {
        return "Nombre: " + this.nombre + " " + " edad: " + this.edad + " genero: " + this.genero + " Asignatura: " + this.asignatura + " Nivel: " + this.nivel;
    },
    asignatura: "Cliente",
    nivel: "Medio",
    asignar: function(){
        return this.obtDetalles + " asignatura: " + this.asignatura + " nivel: " + this.nivel;
    }
}

const salida = document.getElementById("salida");
salida.innerHTML = Persona.obtDetalles();
salida.innerHTML += "<br>" + Estudiante.obtDetalles();
salida.innerHTML += "<br>" + Profesores.obtDetalles();