document.getElementById("Repeat").onclick = function() {

    if (contador === 4 ){
        window.location.href = 'promise.html'
    }

let contador = localStorage.getItem("contador") || 0;

    contador = Number(contador);

    document.getElementById("contador").textContent = contador;

    document.getElementById("Repeat").addEventListener("click", () => {
        contador++;
        localStorage.setItem("contador", contador);  
        location.reload(); 
    });



}