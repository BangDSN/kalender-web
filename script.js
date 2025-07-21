// 🌤 HENT LIVE VEJR
const apiKey = "01e3f88279e07efcea3aa9168032f379"; // fra openweathermap.org
const city = "Tommerup";
const weatherDiv = document.getElementById("weather");

// 📅 Automatisk uge-nummer
function getCurrentWeekNumber() {
  const now = new Date();
  const firstDayOfYear = new Date(now.getFullYear(), 0, 1);
  const pastDaysOfYear = (now - firstDayOfYear) / 86400000;
  const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  return weekNumber;
}

document.addEventListener("DOMContentLoaded", () => {
  const weekTitle = document.getElementById("weekTitle");
  if (weekTitle) {
    const uge = getCurrentWeekNumber();
    weekTitle.textContent = "UGE " + uge;
  }

  // 👇 flyt evt. eksisterende kode herind (fx note loader)
  const note = localStorage.getItem(daySelect.value) || "";
  noteText.value = note;
});


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
