document.getElementById("calcular").addEventListener("click", function(){
    let resultado = document.getElementById("resultado");
    for(let i = 1; i <= 300; i++){
        if(i % 10 === 0){
            resultado.innerHTML += i +   "<br>";
        }
        else if(i % 4 == 0){
            resultado.innerHTML += "<span style='color:green; font-size: 20px;'>" + i + "</span> ";
        }
        else if(i % 9 == 0){
            resultado.innerHTML += "<span style = 'color: red; font-size: 18px;'>" + i + "</span> ";
        }
        else{
            resultado.innerHTML += i + " ";
        }


    }
})