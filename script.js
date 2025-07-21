// 📅 Automatisk uge
function getCurrentWeekNumber() {
  const today = new Date();
  const day = today.getDay() || 7;
  if (day !== 1) today.setHours(-24 * (day - 1));

  const firstJan = new Date(today.getFullYear(), 0, 1);
  const diff = (today - firstJan + ((firstJan.getDay() + 6) % 7) * 86400000) / 86400000;
  return Math.ceil(diff / 7);
}

document.addEventListener("DOMContentLoaded", () => {
  const uge = getCurrentWeekNumber();
  document.getElementById("weekTitle").textContent = "UGE " + uge;
  setupPlaylistUI();
  updateTitle();
});

// 🌤 VEJR
const apiKey = "01e3f88279e07efcea3aa9168032f379"; // ← indsæt din OpenWeather API-nøgle
const city = "Tommerup";
const weatherDiv = document.getElementById("weather");

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=da`)
  .then(res => res.json())
  .then(data => {
    const temp = Math.round(data.main.temp);
    const desc = data.weather[0].description;
    weatherDiv.innerText = `${temp}°C – ${desc}`;
  })
  .catch(() => {
    weatherDiv.innerText = "Kunne ikke hente vejrdata 😕";
  });

// 🎵 MUSIK
let playlist = [
  { title: "Flyvende Faduma", url: "https://music.youtube.com/watch?v=zF8YX28T8q8" },
  { title: "F'social angst", url: "https://music.youtube.com/watch?v=c7fxnAcoHFU" },
  { title: "Tag Mig Som Jeg Er", url: "https://music.youtube.com/watch?v=HuvZKMF6jGQ" },
  { title: "STOR MAND", url: "https://music.youtube.com/watch?v=8HlLt7c9i-0" },
  { title: "Storebæltsbroen", url: "https://music.youtube.com/watch?v=Zrld52vUUI0" },
  { title: "Alle Skuffer Over Tid", url: "https://music.youtube.com/watch?v=_mS3K7bJQb4" }
];

let currentSong = 0;
let musicWindow = null;

function updateTitle() {
  document.getElementById("songTitle").innerText = playlist[currentSong].title;
  document.querySelectorAll("#playlistList li").forEach((el, i) =>
    el.classList.toggle("active", i === currentSong)
  );
}

function playPause() {
  if (!musicWindow || musicWindow.closed) {
    musicWindow = window.open(playlist[currentSong].url, "YTMusic", "width=400,height=600");
  } else {
    musicWindow.focus();
  }
  updateTitle();
}

function nextSong() {
  currentSong = (currentSong + 1) % playlist.length;
  playPause();
}

function prevSong() {
  currentSong = (currentSong - 1 + playlist.length) % playlist.length;
  playPause();
}

function setupPlaylistUI() {
  const ul = document.getElementById("playlistList");
  playlist.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.addEventListener("click", () => {
      currentSong = index;
      playPause();
    });
    ul.appendChild(li);
  });
}
