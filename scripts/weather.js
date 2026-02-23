export function initWeather() {
    const temp = document.getElementById("temp");
    const details = document.getElementById("details");
    const icon = document.getElementById("icon");

    async function fetchWeather() {
        try {
            const url =
                "https://api.open-meteo.com/v1/forecast?latitude=6.45&longitude=3.39&current=temperature_2m,relative_humidity_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=Africa/Lagos";

            const res = await fetch(url);
            const data = await res.json();

            const temperature = data.current.temperature_2m;
            const code = data.current.weather_code;

            temp.textContent = `${temperature}°C`;
            details.textContent = getCondition(code);
            icon.textContent = getIcon(code);
        } catch (error) {
            console.error("Weather fetch error:", error);
            temp.textContent = "--°C";
            details.textContent = "Failed to fetch weather.";
            icon.textContent = "❓";
        }
    }

    fetchWeather();
}

function getCondition(code) {
    const map = {
        0: "Clear",
        1: "Mainly Clear",
        2: "Partly Cloudy",
        3: "Cloudy",
        45: "Fog",
        48: "Freezing Fog",
        51: "Light Drizzle",
        61: "Rain",
        63: "Heavy Rain",
        71: "Snow",
        95: "Thunderstorm"
    };
    return map[code] || "Unknown";
}

function getIcon(code) {
    if (code === 0) return "☀️";
    if (code <= 2) return "⛅";
    if (code === 3) return "☁️";
    if (code >= 95) return "⛈️";
    if (code >= 61 && code <= 63) return "🌧️";
    if (code >= 71) return "❄️";
    return "🌥️";
}
