let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    // Hide all slides initially
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("fade-in");
        slides[i].classList.add("fade-out");
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    

    // Show the current slide with fade-in effect
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(() => {
        slides[slideIndex - 1].classList.remove("fade-out");
        slides[slideIndex - 1].classList.add("fade-in");
    }, 10); // Adding a slight delay for the fade to take effect

    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}