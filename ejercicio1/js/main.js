let h11 = document.getElementById("h11");
let arrayAlumnos = [["Pepe", "García", "2DAW", [6, 8, 7]],
            ["Juan", "Benítez", "1DAW", [5, 9, 7]],
            ["Marta", "Díaz", "2SMR", [4, 2, 2]],
            ["Pedrito", "Jimenez", "1SMR", [10, 9, 10]],
            ["María", "Díaz", "2SMR", [3, 9, 6]]

];
for(let i = 0; i < arrayAlumnos.length; i++){
    if(Array.isArray(arrayAlumnos[i])){
        for(let j = 0; j < arrayAlumnos[i].length; j++){
            h11.innerHTML += arrayAlumnos[i][j] + " ";
        }
    }
    else{
        h11.innerHTML += arrayAlumnos[i] + " ";
    }
    h11.innerHTML += "<br>"
    
}