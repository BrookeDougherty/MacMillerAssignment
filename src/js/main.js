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

// RECORDS ROLLING
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

// WIRE UP RECORD 1 BUTTON
//get
const recordButtons = document.querySelectorAll(".album");
// for loop
for (let index = 0; index < recordButtons.length; index++) {
  const recordButton = recordButtons[index];
  // Defining function for button click
  function buttonClick() {
    console.log(index);
    const recordRow = document.querySelector(".record-row-" + (index + 1)); //record-row-1
    recordRow.classList.toggle("visible");
    recordRow.scrollIntoView();
  }
  recordButton.addEventListener("click", buttonClick);
}

// ACCORDIAN SECTION
// get
const accordian = document.querySelector(".album-accordian");
console.log(accordian);
//define
function accordianClick() {
  console.log("album info");
  const songlistPanel = document.querySelector(".songlist-panel");
  songlistPanel.classList.toggle("visible");
}
// wire up = reveal accordian information when I click on accordian button
accordian.addEventListener("click", accordianClick);
