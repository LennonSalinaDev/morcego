"use strick"

// Defina o tempo final (por exemplo, 5 minutos a partir de agora)
let countdownDate = new Date().getTime() + 5 * 60 * 1000;

// Atualiza a contagem regressiva a cada segundo
let countdownInterval = setInterval(function() {
    // Obtém o tempo atual
    let now = new Date().getTime();
    
    // Calcula a diferença entre o tempo atual e o tempo final
    let distance = countdownDate - now;
    
    // Calcula os minutos e segundos restantes
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Exibe a contagem regressiva no elemento com id="countdown"
    document.getElementById("countdown").innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    
    // Se a contagem regressiva terminar, exibe uma mensagem
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Tempo esgotado!";
    }
}, 1000);
