function updateDate() {
    const now = new Date(); // Obtiene la fecha actual

    // Opciones para formatear la fecha
    const options = { 
        weekday: 'short', // Día de la semana (abreviado, e.g., Mon)
        day: '2-digit',   // Día del mes (dos dígitos, e.g., 10)
        month: 'long',    // Mes completo (e.g., March)
        year: 'numeric'   // Año completo (e.g., 2024)
    };

    // Formatea la fecha en inglés
    const dateString = now.toLocaleDateString('en-US', options);

    // Muestra la fecha en el div con id "date"
    document.getElementById('data').textContent = dateString;
}

// Llama a la función inmediatamente para mostrar la fecha
updateDate();