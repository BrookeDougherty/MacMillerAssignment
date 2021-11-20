// BACK TO TOP BUTTON
//Get the button
var mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// ROTATION OF IMAGES

const maxRotation = 365;
function handleScroll() {
  console.log(window.scrollY);
  // Get list of albums
  const albums = document.querySelectorAll(".album");
  console.log(albums);

  // Loop through all albums and change rotation
  for (let i = 0; i < albums.length; i++) {
    const album = albums[i];
    album.style = `transform: rotate(${window.scrollY}deg)`;
  }
  // album.style = `transform: rotate(${window.scrollY}deg)`;
}
window.onscroll = handleScroll;
