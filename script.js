// 🌤 HENT LIVE VEJR
const apiKey = "DIN_API_KEY_HER"; // ← ERSTAT MED DIN EGEN fra openweathermap.org
const city = "Tommerup";
const weatherDiv = document.getElementById("weather");

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=da`)
  .then(response => response.json())
  .then(data => {
    const temp = Math.round(data.main.temp);
    const desc = data.weather[0].description;
    weatherDiv.innerText = `${temp}°C – ${desc}`;
  })
  .catch(error => {
    weatherDiv.innerText = "Kunne ikke hente vejrdata 😕";
    console.error(error);
  });

// 🎵 ÅBN YOUTUBE MUSIC
function playMusic() {
  window.open("https://music.youtube.com/", "_blank");
  document.getElementById("nowPlaying").innerText = "Afspiller: YouTube Music 🎶";
}

// 📝 GEM NOTER
const daySelect = document.getElementById("daySelect");
const noteText = document.getElementById("noteText");

// Vis note ved valg
daySelect.addEventListener("change", () => {
  const note = localStorage.getItem(daySelect.value) || "";
  noteText.value = note;
});

// Gem note
function saveNote() {
  const day = daySelect.value;
  const note = noteText.value;
  localStorage.setItem(day, note);
  alert("Note gemt for " + day + " ✅");
}

// Load første note
document.addEventListener("DOMContentLoaded", () => {
  const note = localStorage.getItem(daySelect.value) || "";
  noteText.value = note;
});
