// Slideshow
const imageList = [
  "images/IMG_0602.jpg",
  "images/IMG_0968.HEIC",
  "images/IMG_1089.JPG",
  "images/IMG_1178.JPG",
  "images/IMG_1340.HEIC",
  "images/IMG_1354.HEIC",
  "images/IMG_4122.JPG",
  "images/IMG_4135.JPG",
  "images/IMG_4246.JPG",
  "images/IMG_4253.JPG",
  "images/IMG_4270.JPG",
  "images/IMG_4293.JPG",
  "images/IMG_4339.JPG",
  "images/IMG_4431.JPG",
  "images/IMG_4449.JPG",
  "images/IMG_4614.JPG",
  "images/IMG_4712.JPG",
  "images/IMG_4731.JPG",
  "images/IMG_4733.JPG",
  "images/IMG_4737.JPG",
  "images/IMG_4852.JPG"
];

let currentIndex = 0;
const slideshow = document.getElementById("slideshow");

function showNextImage() {
  currentIndex = (currentIndex + 1) % imageList.length;
  slideshow.style.opacity = 0;
  setTimeout(() => {
    slideshow.src = imageList[currentIndex];
    slideshow.style.opacity = 1;
  }, 500);
}

setInterval(showNextImage, 7000); // Skift hver 7. sekund
