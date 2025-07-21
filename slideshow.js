const images = [
  "images/billede1.jpg",
  "images/billede2.jpg",
  "images/billede3.jpg",
  "images/billede4.jpg",
  "images/billede5.jpg",
  "images/billede6.jpg",
  "images/billede7.jpg",
  "images/billede8.jpg",
  "images/billede9.jpg",
  "images/billede10.jpg",
  "images/billede11.jpg",
  "images/billede12.jpg"
];

let index = 0;
const imgElement = document.getElementById("slideshow");

setInterval(() => {
  index = (index + 1) % images.length;
  imgElement.src = images[index];
}, 7000); // Skift hvert 7. sekund
