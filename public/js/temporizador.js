// TEMPORIZADOR

const timerElement = document.getElementById('timer');
let timeLeft = 60; // Tiempo en segundos
let timerId = null;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function startTimer() {
    timerElement.textContent = formatTime(timeLeft);
    
    timerId = setInterval(() => {
        timeLeft--;
        timerElement.textContent = formatTime(timeLeft);
        
        if(timeLeft <= 0) {
            clearInterval(timerId);
            timeLeft = 60;
            setTimeout(startTimer, 1000);
        }
    }, 1000);
}

// Iniciar el temporizador al cargar
startTimer();