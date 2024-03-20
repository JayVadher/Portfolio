// STYLE NAVBAR WHEN SCROLLED 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    var navigationBar = document.getElementById("navigation_bar");
    var logo = document.getElementById("nav-logo");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navigationBar.style.height = "60px";
        navigationBar.style.background = "#fff";
        navigationBar.style.borderBottomColor = "#2c9b00";
        logo.style.height = '45px';
    } else {
        navigationBar.style.height = "80px";
        navigationBar.style.background = "rgba(255,255,255,0.3)";
        navigationBar.style.borderBottomColor = "rgba(255,255,255,0.2)";
        logo.style.height = '60px';
    }
}


// OPEN MODAL 
function openModal() {
    document.getElementById("my-modal").style.display = 'inline-flex';
    document.body.style.overflow = 'hidden';
    document.getElementById("navigation_bar").style.display = 'none';
}

// CLOSE MODAL 
function closeModal() {
    document.getElementById("my-modal").style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById("navigation_bar").style.display = 'flex';
}

// DECLARE VARIABLE SLIDEONDEXJS AND INITIALISE TO 1 
var slideIndexJs = 1;

// CALLING FUNCTION showSlidesJs() BY PASSING VARIABLE slideIndexJs. THIS WILL HIDE ALL THE SLIDES INITIALLY 
showSlidesJs(slideIndexJs);

// FUNCTION TO EXECUTE NEXT AND PREV BUTTONS 
function changeSlides(n) {
    showSlidesJs(slideIndexJs += n);
}

// DISPLAY THE IMAGE WHOSE THUMBNAIL IS CLICKED 
function currentSlide(n) {
    showSlidesJs(slideIndexJs = n);
}

// MAIN FUNCTION TO OPERATE MODAL 
function showSlidesJs(n) {
    var i;

    // GET ALL ELEMENTS WITH CLASS 'MY-SLIDES' AND PUT IN ARRAY 
    var slides = document.getElementsByClassName('my-slides');

    /* IF STATEMENT TO MAKE SURE WHEN NEXT BUTTON IS CLICKED ON LAST IMAGE,
    THEN THE MODAL GOES BACK TO FIRST IMAGE AND VICE VERSA WHEN PREV 
    BUTTON IS CLICKED*/


    /* IF THE SLIDES INDEX IS GREATER THAN TOTAL NO. OF SLIDES,
       THEN OPEN SLIDEINDEXJS = 1 (BEGIN WITH FIRST SLIDE AFTER LAST SLIDE ENDS) */
    if (n > slides.length) {
        slideIndexJs = 1;
    }
    
    /* IF THE SLIDES INDEX IS LESS THAN TOTAL 1,THEN OPEN SLIDEINDEXJS = LAST 
     (IF PREV BUTTON IS CLICKED ON FIRST SLIDE THEN OPEN LATS SLIDE) */

    if (n < 1) {
        slideIndexJs = slides.length;
    }

    // HIDE ALL SLIDES AT FIRST 
    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = 'none'
    }

    // DISPLAY SLIDE WHICH IS CLICKED 
    slides[slideIndexJs - 1].style.display = 'block';  
}



