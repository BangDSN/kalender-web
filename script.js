// Ugeopdatering
const today = new Date();
const oneJan = new Date(today.getFullYear(), 0, 1);
const weekNumber = Math.ceil((((today - oneJan) / 86400000) + oneJan.getDay() + 1) / 7);
document.getElementById("weekTitle").textContent = "UGE " + weekNumber;

// Live vejr (Open-Meteo API)
fetch("https://api.open-meteo.com/v1/forecast?latitude=55.25&longitude=10.22&current=temperature_2m,weather_code&timezone=auto")
  .then(res => res.json())
  .then(data => {
    const temp = Math.round(data.current.temperature_2m);
    const code = data.current.weather_code;
    let emoji = "☁️";

    if (code === 0) emoji = "☀️";
    else if ([1, 2, 3].includes(code)) emoji = "🌤️";
    else if ([45, 48].includes(code)) emoji = "🌫️";
    else if ([51, 53, 55, 56, 57, 61, 63, 65].includes(code)) emoji = "🌧️";
    else if ([80, 81, 82].includes(code)) emoji = "🌦️";
    else if ([95, 96, 99].includes(code)) emoji = "⛈️";

    document.getElementById("weather").textContent = `${emoji} ${temp}°C`;
  });
