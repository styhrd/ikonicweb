

const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});



window.addEventListener("scroll", function () {
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
})

const toggleButton = document.getElementById('toggleButton');
const myDiv = document.getElementById('myDiv');

// Add event listener to the "Toggle Div" button
toggleButton.addEventListener('click', function () {
    myDiv.classList.toggle('hidden'); // Toggle the 'hidden' class
    if (myDiv.classList.contains('hidden')) {
        myDiv.style.maxHeight = null;
        // Reset max-height when hiding the div
    } else {
        myDiv.style.maxHeight = myDiv.scrollHeight + 'px';
        myDiv.scrollIntoView({ behavior: 'smooth' }); // Set max-height to the content's height when showing
    }
});


const closeButton = document.getElementById('closeButton');

// Add event listener to the "Close" button
closeButton.addEventListener('click', function () {
    myDiv.classList.add('hidden'); // Add the 'hidden' class to close the div
    myDiv.style.maxHeight = null; // Reset max-height
    const scrollToSection = document.getElementById('newborn');
    if (scrollToSection) {
        scrollToSection.scrollIntoView({ behavior: 'smooth' });
    }
});

const toggleButton2 = document.getElementById('toggleButton2');
const myDiv2 = document.getElementById('myDiv2');

// Add event listener to the "Toggle Div" button
toggleButton2.addEventListener('click', function () {
    myDiv2.classList.toggle('hidden2'); // Toggle the 'hidden' class
    if (myDiv2.classList.contains('hidden2')) {
        myDiv2.style.maxHeight = null;
        // Reset max-height when hiding the div
    } else {
        myDiv2.style.maxHeight = myDiv2.scrollHeight + 'px';
        myDiv2.scrollIntoView({ behavior: 'smooth' }); // Set max-height to the content's height when showing
    }
});

const toggleButton3 = document.getElementById('toggleButton3');
const myDiv3 = document.getElementById('myDiv3');

// Add event listener to the "Toggle Div" button
toggleButton3.addEventListener('click', function () {
    myDiv3.classList.toggle('hidden3'); // Toggle the 'hidden' class
    if (myDiv3.classList.contains('hidden3')) {
        myDiv3.style.maxHeight = null;
        // Reset max-height when hiding the div
    } else {
        myDiv3.style.maxHeight = myDiv3.scrollHeight + 'px';
        myDiv3.scrollIntoView({ behavior: 'smooth' }); // Set max-height to the content's height when showing
    }
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex - n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}