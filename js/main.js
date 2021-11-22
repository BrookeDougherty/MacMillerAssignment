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

// Wire up Record 1 Button
// button.addEventListener("click", toggleModal);
// add.asideEventListener("click", toggleModal);
//get
const recordButtons = document.querySelectorAll(".album");
// for loop
for (let i = 0; i < recordButtons.length; i++) {
  const recordButton = recordButtons[i];
}

// Defining function for button click
function buttonClick() {
  console.log("hello");
  const recordRow = document.querySelector(".record-row");
  recordRow.classList.toggle("visible");
}
// Reveal Record 1 when I click on first button
// wire up event listener
recordButton.addEventListener("click", buttonClick);

// Accordian Section
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
