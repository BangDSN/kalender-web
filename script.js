// 📅 UGENUMMER
function getWeekNumber(d) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return weekNo;
}

const weekNumber = getWeekNumber(new Date());
document.getElementById('weekTitle').textContent = 'UGE ' + weekNumber;

// 🌤 VEJR fra OpenWeather
const apiKey = "01e3f88279e07efcea3aa9168032f379"; // ← din API-nøgle
const city = "Tommerup";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},DK&appid=${apiKey}&units=metric&lang=da`)
  .then(response => response.json())
  .then(data => {
    const temp = Math.round(data.main.temp);
    const desc = data.weather[0].description;
    document.getElementById("weather").textContent = `🌡️ ${temp}°C – ${desc}`;
  })
  .catch(() => {
    document.getElementById("weather").textContent = "⚠️ Vejrdata ikke tilgængelig";
  });
