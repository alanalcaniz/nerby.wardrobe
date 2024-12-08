function updateClock() {
    const now = new Date(); // Obtiene la hora actual
    const hours = String(now.getHours()).padStart(2, '0'); // Hora con dos dígitos
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Minutos con dos dígitos
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Segundos con dos dígitos

    // Formatea la hora
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Muestra la hora en el div con id "clock"
    document.getElementById('hour').textContent = timeString;
}

// Actualiza el reloj cada segundo
setInterval(updateClock, 1000);

// Llama a la función inmediatamente para mostrar la hora al cargar
updateClock();