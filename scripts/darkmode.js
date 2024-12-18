// Selecciona el botón y el cuerpo del documento
const themeToggle = document.getElementById('page-mode');

// Función para verificar si el modo oscuro está activado
const isDarkMode = () => document.documentElement.classList.contains('dark-mode');

// Función para alternar entre modo claro y oscuro
const toggleTheme = () => {
    if (isDarkMode()) {
        // Cambiar a modo claro
        document.documentElement.style.setProperty('--background', '#f0f0f0');
        document.documentElement.style.setProperty('--background-2', '#cecece');
        document.documentElement.style.setProperty('--button-header', '#333');
        document.documentElement.style.setProperty('--button-header-hover', '#555');
        document.documentElement.style.setProperty('--button-interact', '#aaa');
        document.documentElement.style.setProperty('--button-interact-hover', '#888');
        document.documentElement.style.setProperty('--text', '#1a1a1a');
        document.documentElement.style.setProperty('--button-text', '#f0f0f0');
        document.documentElement.style.setProperty('--img-container', '#aaa');
        themeToggle.textContent = 'L';
        document.documentElement.classList.remove('dark-mode');  // Elimina la clase dark-mode
        
        // Guardar el estado del modo en localStorage
        localStorage.setItem('theme', 'dark');
    } else {
        // Cambiar a modo oscuro
        document.documentElement.style.setProperty('--background', '#0f0f0f');
        document.documentElement.style.setProperty('--background-2', '#141414');
        document.documentElement.style.setProperty('--button-header', '#e0e0e0');
        document.documentElement.style.setProperty('--button-header-hover', '#fff');
        document.documentElement.style.setProperty('--button-interact', '#c5c5c5');
        document.documentElement.style.setProperty('--button-interact-hover', '#e4e4e4');
        document.documentElement.style.setProperty('--text', '#f0f0f0');
        document.documentElement.style.setProperty('--button-text', '#1a1a1a');
        document.documentElement.style.setProperty('--img-container', '#aaa');
        themeToggle.textContent = 'D';
        document.documentElement.classList.add('dark-mode');  // Añadir la clase dark-mode
        
        // Guardar el estado del modo en localStorage
        localStorage.setItem('theme', 'dark');
    }
}

// Función para leer el tema desde localStorage y aplicarlo
const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        // Si el tema guardado es oscuro, aplicar modo oscuro
        document.documentElement.classList.add('dark-mode');
        themeToggle.textContent = 'D';
    } else {
        // Si el tema guardado es claro o no existe, aplicar modo claro
        document.documentElement.classList.remove('dark-mode');
        themeToggle.textContent = 'L';
    }
}

// Cargar el tema guardado cuando la página se carga
loadTheme();

// Event listener para cambiar el tema cuando se hace clic en el botón
themeToggle.addEventListener('click', toggleTheme);