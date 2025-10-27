
// Access individual elements 
const slidesWrapper = document.querySelector(".slides-wrapper");
const slideShowContent = document.querySelectorAll(".slide-show-content");
const leftSideButton = document.querySelector(".left-side-button");
const rightSideButton = document.querySelector(".right-side-button");

let currentIndex = 0;
const visibleSlides = 3;
const totalSlides = slideShowContent.length;

// Handles updating position of slide when position has changed
function updateSlidePosition() {
    const offSet = -(currentIndex * (100 / visibleSlides));
    slidesWrapper.style.transform = `translateX(${offSet}%)`;
    
    const centerIndex = (currentIndex + Math.floor(visibleSlides / 2)) % totalSlides;

    for(let index = 0; index < totalSlides; index++){
        console.log(currentIndex);
        console.log(index);
        if(index === centerIndex){
            slideShowContent[index].style.opacity = 1;
            slideShowContent[index].style.scale = 1.1;
        } else {
            slideShowContent[index].style.opacity = 0.5;
            slideShowContent[index].style.scale = 1; 
        }
    }
}

// Handles when the left side button is pressed
leftSideButton.addEventListener('click', () => {
    if(currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - visibleSlides;
    }
    updateSlidePosition();
});

// Handles when the right side button is pressed
rightSideButton.addEventListener('click', () => {
    if(currentIndex < totalSlides - visibleSlides) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlidePosition();
});