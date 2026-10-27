let resultado = document.getElementById("resultado");
resultado.innerHTML = Math.PI.toFixed(4);
resultado.innerHTML += "<br>" + Math.round(Math.PI * 10000) / 10000;
resultado.innerHTML += "<br>" + Math.PI;