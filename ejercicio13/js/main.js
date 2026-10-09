document.getElementById("calcular").addEventListener("click", function() {
    let apariciones = new Array(13).fill(0);

    for (let i = 0; i < 36000; i++) {
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        let suma = dado1 + dado2;
        apariciones[suma]++;
    }

    let resultadoArray = document.getElementById("resultadoArray");
    resultadoArray.innerHTML = "";

    for (let suma = 2; suma <= 12; suma++) {
        resultadoArray.innerHTML += `<p>Suma ${suma}: ${apariciones[suma]} veces</p>`;
    }
});