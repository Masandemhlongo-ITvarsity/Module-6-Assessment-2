const imagePaths = [

];

let slideIndex = 0;

function createSlides() {
    const slideshowContainer = document.getElementById("slideshow-container");

    for (let i = 0; i < imagePaths.length; i++) {
        const slide = document.createElement("div");
        slide.classList.add("slide", "fade");
        
        const img = document.createElement("img");
        img.src = imagePaths[i];
        img.alt = "Image " + (i + 1);
        
        slide.appendChild(img);
        slideshowContainer.appendChild(slide);
    }
}

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 2000); // Change image every 5 seconds
}

createSlides(); // Create slides based on imagePaths array
showSlides();   // Start the slideshow




