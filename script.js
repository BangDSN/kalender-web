// Funktion til at vise ugenummer i toppen
function updateWeekNumber() {
  const now = new Date();
  const weekNumber = getWeekNumber(now);
  document.getElementById("weekTitle").textContent = `UGE ${weekNumber}`;
}

// Udregn ISO 8601 ugenummer
function getWeekNumber(d) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return weekNo;
}

<script>
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();
</script>


// Funktion til at hente og vise vejret
function updateWeather() {
  // Odense koordinater (ændr evt.)
  const lat = 55.3959;
  const lon = 10.3883;

  fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`)
    .then(res => res.json())
    .then(data => {
      const temp = Math.round(data.current.temperature_2m);
      const code = data.current.weather_code;
      const emoji = weatherCodeToEmoji(code);
      document.getElementById("weather").textContent = `${emoji} ${temp}°C`;
    })
    .catch(() => {
      document.getElementById("weather").textContent = "🌤️ Vejrdata ikke tilgængelig";
    });
}

// En meget simpel konvertering fra weather_code til emoji
function weatherCodeToEmoji(code) {
  if ([0, 1].includes(code)) return "☀️";
  if ([2].includes(code)) return "⛅";
  if ([3].includes(code)) return "☁️";
  if ([45, 48].includes(code)) return "🌫️";
  if ([51, 53, 55, 56, 57, 61, 63, 65, 80, 81, 82].includes(code)) return "🌧️";
  if ([66, 67, 71, 73, 75, 77, 85, 86].includes(code)) return "❄️";
  if ([95, 96, 99].includes(code)) return "⛈️";
  return "🌈";
}

updateWeekNumber();
updateWeather();
