
// Access individual elements 
const slidesWrapper = document.querySelector(".slides-wrapper");
const slideShowContent = document.querySelectorAll(".slide-show-content");
const leftSideButton = document.querySelector(".left-side-button");
const rightSideButton = document.querySelector(".right-side-button");

let currentIndex = 1;
const visibleSlides = 3;
const totalSlides = slideShowContent.length;

// Holds a copy of blocks


// Handles updating position of slide when position has changed
function updateSlidePosition() {
    const centerIndex = (currentIndex + Math.floor(visibleSlides / 2)) % totalSlides;

    for (let i = 0; i < totalSlides; i++) {
      // where this slide falls relative to the starting index
      const offset = (i - currentIndex + totalSlides) % totalSlides;
  
      if (offset < visibleSlides) {
        // This slide is one of the 3 visible ones.
        // Place it in the correct column (0,1,2)
        slideShowContent[i].style.transform = `translateX(${offset * 100}%)`;
  
        slideShowContent[i].style.pointerEvents = "auto";
        slideShowContent[i].style.visibility = "visible";
      } else {
        // Hide it just by moving it out of view
        slideShowContent[i].style.transform = `translateX(-9999px)`;
        slideShowContent[i].style.pointerEvents = "none";
        slideShowContent[i].style.visibility = "hidden";
      }
  
      // Highlight center card
      if (i === centerIndex) {
        slideShowContent[i].style.opacity = 1;
        slideShowContent[i].style.scale = 1.1;
        slideShowContent[i].style.boxShadow = "0 8px 20px rgba(0,0,0,0.4)";
        slideShowContent[i].style.zIndex = 2;
      } else {
        slideShowContent[i].style.opacity = 0.5;
        slideShowContent[i].style.scale = 1;
        slideShowContent[i].style.boxShadow = "none";
        slideShowContent[i].style.zIndex = 1;
      }
    }
}


// Handles when the left side button is pressed
leftSideButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
});

// Handles when the right side button is pressed
rightSideButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
});

// Initialize view
updateSlidePosition();