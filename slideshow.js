const imageFolder = "images/";
const imageList = [
  "IMG_0602.jpg",
  "IMG_1089.JPG",
  "IMG_1178.JPG",
  "IMG_1340.HEIC",
  "IMG_1354.HEIC",
  "IMG_4122.JPG",
  "IMG_4135.JPG",
  "IMG_4246.JPG",
  "IMG_4253.JPG",
  "IMG_4270.JPG",
  "IMG_4293.JPG",
  "IMG_4339.JPG",
  "IMG_4431.JPG",
  "IMG_4449.JPG",
  "IMG_4614.JPG",
  "IMG_4712.JPG",
  "IMG_4731.JPG",
  "IMG_4733.JPG",
  "IMG_4737.JPG",
  "IMG_4852.JPG"
];

let currentImage = 0;
const imgElement = document.getElementById("slideshow-img");

function showNextImage() {
  imgElement.src = imageFolder + imageList[currentImage];
  currentImage = (currentImage + 1) % imageList.length;
}

showNextImage(); // Start with first image
setInterval(showNextImage, 7000); // Switch every 7 seconds
