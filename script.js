// Uge nummer
const weekTitle = document.getElementById("week-title");
const today = new Date();
const firstJan = new Date(today.getFullYear(), 0, 1);
const pastDays = Math.floor((today - firstJan) / (24 * 60 * 60 * 1000));
const weekNumber = Math.ceil((pastDays + firstJan.getDay() + 1) / 7);
weekTitle.textContent = "UGE " + weekNumber;

// 🌤 VEJR fra OpenWeather
const apiKey = "01e3f88279e07efcea3aa9168032f379"; // ← din API-nøgle
const city = "Tommerup";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},DK&appid=${apiKey}&units=metric&lang=da`)
  .then(response => response.json())
  .then(data => {
    const temp = Math.round(data.main.temp);
    const desc = data.weather[0].description;
    document.getElementById("weather").textContent = ` ${temp}°C – ${desc}`;
  })
  .catch(() => {
    document.getElementById("weather").textContent = "⚠️ Vejrdata ikke tilgængelig";
  });
