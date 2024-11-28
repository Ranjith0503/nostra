
// JavaScript for navigation
var currentIndex = 0;  //current index keeps track of which slide is currently being displayed, 0 represents first slide

function moveSlide(direction) {               //This function is called whenever the user clicks the left (direction = -1) or right (direction = 1) arrow buttons.
  var slides = document.querySelector('.slides');
  var totalSlides = document.querySelectorAll('.slide').length;
  
  // Update index
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = totalSlides - 1; // Wrap to last slide
  if (currentIndex >= totalSlides) currentIndex = 0; // Wrap to first slide

  /*If currentIndex = 0 and you click "Left" (direction = -1), currentIndex becomes the last slide index.
If currentIndex = last slide and you click "Right" (direction = 1), currentIndex wraps to 0.*/

  // Update transform for sliding
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  console.log("Current Index:", currentIndex);
}
/*topclose*/
var topPart= document.getElementById("topPart")
var topclose=document.getElementById("topclose")

topclose.addEventListener("click",function(){
  topPart.style.display="none"
})

/*move to respective page*/
var newarrival=document.querySelector(".newarrival") 
var newarrivalpart=document.getElementById("newarrivalPart")

newarrival.addEventListener("click",function(){
  newarrivalpart.scrollIntoView({behavior:"smooth"})
})

var mostwanted=document.querySelector(".mostwanted") 
var mostwantedPart=document.getElementById("mostwantedPart")

mostwanted.addEventListener("click",function(){
  mostwantedPart.scrollIntoView({behavior:"smooth"})
})


/*side nav bar*/

var sidenav=document.getElementById("sidenav")
var closex=document.getElementById("closex")
var menubar=document.getElementById("menubar")

menubar.addEventListener("click",function() {
  sidenav.style.left="0%"
})
closex.addEventListener("click",function() {
  sidenav.style.left="-50%"
})


/* to make the heart color.*/
var hearts = document.querySelectorAll(".heart");

hearts.forEach(heart => {
    heart.addEventListener("click", function(event) {
        // Check the current 'fill' value
        if (event.target.getAttribute('fill') == 'red') {
            // If it's red, set it back to the default (e.g., black or empty)
            event.target.setAttribute('fill', 'white');
        } else {
            // Otherwise, set it to red
            event.target.setAttribute('fill', 'red');
        }
    });
});

// Select all the checkboxes inside the container
const checkboxes = document.querySelectorAll('#container input[type="checkbox"]');

// Select all the collection items
const collections = document.querySelectorAll(".collection-one");

// Add an event listener to each checkbox
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', filterCollections);
});

// Filter function
function filterCollections() {
  // Get all checked checkboxes
  const checkedValues = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked) // Filter only checked checkboxes
    .map(checkbox => checkbox.value);    // Get their values

  // If no filters are selected, show all collections
  if (checkedValues.length === 0) {
    collections.forEach(collection => {
      collection.classList.remove('none');
    });
    return;
  }

  // Show/hide collections based on the checked values
  collections.forEach(collection => {
    const dataName = collection.getAttribute('data-name'); // Get the data-name attribute
    const dataNameTags = dataName.split(','); // Split into an array of tags

    // Check if any of the data-name tags match the checked values
    const isVisible = checkedValues.some(value => dataNameTags.includes(value));

    // Add or remove the 'hidden' class
    collection.classList.toggle('hidden', !isVisible);
  });
}

//search part now

var inputBox = document.getElementById("inputBox");
var collection = document.querySelector(".collections");
var collectionOne = document.querySelectorAll(".collection-one");
var paralist = collection.querySelectorAll("p");

console.log(paralist);

inputBox.addEventListener("keyup", function(event) {
  var enteredValue = event.target.value.toLowerCase(); // make entered value lowercase

  for (var count = 0; count < paralist.length; count++) {
    var paragraphText = paralist[count].textContent.toLowerCase(); // case-insensitive search

    // Check if the paragraph contains the entered value
    if (paragraphText.indexOf(enteredValue) === -1) {
      collectionOne[count].style.display = "none"; // Hide the collection if no match
    } else {
      collectionOne[count].style.display = "block"; // Show the collection if there's a match
    }
  }
});
