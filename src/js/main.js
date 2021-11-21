const maxRotation = 365;

// BACK TO TOP BUTTON
//Get the button
var mybutton = document.getElementById("myBtn");

// Records Coming In From The Side
function recordSlide() {
  console.log(window.scrollY);
  // Get Record
  const record = document.querySelector(".record-wrapper");
  console.log(record);
  // Get Image Inside Record Wrapper
  const image = record.querySelector("img");
  // Get Image Height
  record.style.height = image.style.height;
  record.style.width = image.style.width;
  // Get Scroll Position
  // Compare Position Of Image To Scroll Position Of Page
  // Change Position Of Image Based On Scroll Position
  record.classList.add("record-rolling-onScroll");
}

// Records Rolling
function recordRole() {
  // Get list of albums
  const albums = document.querySelectorAll(".album");

  // Loop through all albums and change rotation
  for (let i = 0; i < albums.length; i++) {
    const album = albums[i];
    album.style = `transform: rotate(${window.scrollY}deg)`;
  }
  // album.style = `transform: rotate(${window.scrollY}deg)`;
}

// ROTATION OF IMAGES + Calling Both Animation Functions
function handleScroll() {
  recordSlide();
  recordRole();
}

window.onscroll = handleScroll;

