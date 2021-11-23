const maxRotation = 365;

// BACK TO TOP BUTTON
//Get the button
var mybutton = document.getElementById("myBtn");

// RECORDS ROLLING
function recordRole() {
  // Get list of albums
  const albums = document.querySelectorAll(".album");

  // Loop through all albums and change rotation
  for (let i = 0; i < albums.length; i++) {
    const album = albums[i];
    album.style = `transform: rotate(${window.scrollY}deg)`;
  }
}

// ROTATION OF IMAGES + Calling Both Animation Functions
function handleScroll() {
  recordRole();
}
window.onscroll = handleScroll;

// WIRE UP RECORD 1 BUTTON
//get
const recordButtons = document.querySelectorAll(".album");
// for loop
for (let index = 0; index < recordButtons.length; index = index + 1) {
  const recordButton = recordButtons[index];
  // Defining function for button click
  function buttonClick() {
    console.log(index);

    hideRecords(index);

    const recordRow = document.querySelector(".record-row-" + (index + 1)); //record-row-1
    recordRow.classList.add("visible");
    recordRow.scrollIntoView();
  }
  recordButton.addEventListener("click", buttonClick);
}

// ACCORDIAN SECTION
// Get
const accordians = document.querySelectorAll(".album-accordian");
for (let index = 0; index < accordians.length; index = index + 1) {
  const accordian = accordians[index];
  console.log(accordian);
  // Defining function for accordian button click
  function accordianClick() {
    const songlistPanel = document.querySelector(
      ".songlist-panel-" + (index + 1)
    );
    songlistPanel.classList.toggle("visible");
    songlistPanel.scrollIntoView();
  }
  // Wire up = reveal accordian information when I click on accordian button
  accordian.addEventListener("click", accordianClick);
}

// Hide Un-needed Records
function hideRecords(indexToShow) {
  console.log(indexToShow);
  // Get Record Rows
  const recordRows = document.querySelectorAll(".record-row");
  for (let index = 0; index < recordRows.length; index = index + 1) {
    if (index != indexToShow) {
      const recordRow = recordRows[index];
      recordRow.classList.remove("visible");
    }
  }
}

// Modal Container
function toggleModal() {
  const modalContainer = document.querySelector(".modal-container");
  modalContainer.classList.toggle("visible");
}

// Close Button
const modalButtons = document.querySelectorAll(
  ".floating-button, .close-button "
);
modalButtons[0].addEventListener("click", toggleModal);

modalButtons[1].addEventListener("click", toggleModal);
