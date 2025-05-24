document.addEventListener('DOMContentLoaded', function() {
    // Static values for demonstration (Metric units for Dominican Republic)
    const temperature = 28; // °C (must be ≤ 10 for windchill calculation)
    const windSpeed = 16; // km/h (must be > 4.8 for windchill calculation)
    const condition = "Parcialmente Nublado";
    
    // DOM Elements
    const tempElement = document.getElementById('temp');
    const conditionElement = document.getElementById('condition');
    const windElement = document.getElementById('wind');
    const windChillElement = document.getElementById('windChill');
    
    // Display static weather data
    if (tempElement) tempElement.textContent = `${temperature}°C`;
    if (conditionElement) conditionElement.textContent = condition;
    if (windElement) windElement.textContent = `${windSpeed} km/h`;
    
    // Windchill calculation and display
    if (windChillElement) {
        windChillElement.textContent = shouldCalculateWindChill(temperature, windSpeed) 
            ? `${calculateWindChill(temperature, windSpeed)}°C` 
            : 'N/A';
    }
    
    // SVG Weather Icon implementation
    const weatherIcon = document.createElement('img');
    weatherIcon.src = 'images/weather-icon.svg';
    weatherIcon.alt = 'Ícono del Clima';
    weatherIcon.classList.add('mobile-only');
    document.querySelector('#weather div').prepend(weatherIcon);
});

/**
 * Determines if windchill should be calculated (metric conditions)
 * @param {number} temp - Temperature in °C
 * @param {number} speed - Wind speed in km/h
 * @returns {boolean} - Whether to calculate windchill
 */
function shouldCalculateWindChill(temp, speed) {
    return temp <= 10 && speed > 4.8; // Condiciones métricas
}

/**
 * Calculates windchill factor in °C (metric formula)
 * @param {number} temp - Temperature in °C
 * @param {number} speed - Wind speed in km/h
 * @returns {string} - Windchill factor rounded to 1 decimal
 */
function calculateWindChill(temp, speed) {
    // Fórmula métrica para windchill
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1);
}