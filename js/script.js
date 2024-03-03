// SWIPER 
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 8,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
  });

// LOADING PAGE

var myVar;

function loaderFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
}


// WHEN PAGE REFRESHES, WINDOW SCROLLS BACK TO TOP OF PAGE
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

//FUNCTION FOR PARALLAX BOXES SCROLL EFFECT
window.addEventListener("scroll", myFunction);

var parallaxBoxes = document.querySelectorAll(".relative");

function myFunction() {
    var windowHeight = window.innerHeight;
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    var pbArr = document.querySelectorAll(".pb");
    var pb1Width = document.getElementById("pb1").style.width;
    var pbScrollWidth = scrolled + 98 ;
    var parallaxBody = document.getElementById("parallaxBody");
    
    document.getElementById("pb1").style.width = pbScrollWidth + "%";
    pb1Width = pb1Width.slice(0, -1);

    if (scrolled === 0) {
        document.getElementById("intro").style.marginTop = "200px"
        document.getElementById("pb1").style.width = "75%";
        document.getElementById("pb1").classList.add("animate");
        document.getElementById("pb_container").style.margin = "130px auto";
        document.getElementById("navbar").style.height = "100px";
        for(var i = 0; i < parallaxBoxes.length; i++){
            if (parallaxBoxes[i].classList.contains("top3")) {
                parallaxBoxes[i].classList.remove("top3");
            }  
        }       
    } else if (scrolled > 0 ) {
        document.getElementById("intro").style.margin = "0px"
        document.getElementById("pb_container").style.margin = "-25px auto 120px";
        document.getElementById("pb1").classList.remove("animate");
        document.getElementById("navbar").style.height = "80px";
          
        for(var i = 0; i < parallaxBoxes.length; i++){
            if (!parallaxBoxes[i].classList.contains("top3")) {
                parallaxBoxes[i].className += " top3";
            }  
        }
    }

    if (pb1Width > 100) {
        
        var scaleVal = (winScroll / height / 5) + 1;

        document.getElementById("pb1").style.transform = "scaleX(" + scaleVal + ")";
        for (let i = 0; i < pbArr.length; i++) {
            
            if (scaleVal < 1.07) {
                pbArr[i].style.transform = "scale(" + scaleVal + ", " + scaleVal + ")";   
            }              
        }
    } 

    //INCREASE OPACITY OF PARALLAXBODY WHEN IN VIEWPORT
    
    var image = document.getElementById("frame");
    parallaxBody.style.opacity = winScroll/windowHeight - 1.25;
    image.style.opacity = winScroll/windowHeight - 1.5;
  
  
}

var colorPercentage = 100 / parallaxBoxes.length;

for (let index = 0; index < parallaxBoxes.length; index++) {


    //  COLOR-MIX PROPERTY TO SHADE EACH PB

    if(index == 0) {
        parallaxBoxes[index].style.background = "color-mix(in srgb, #4832D5 100%, #CCF281 0%)";
    } else if (index == 1 ){
        parallaxBoxes[index].style.background = "color-mix(in srgb, #4832D5 92.5%, #CCF281 12.5%)";
    } else if (index == 2 ){
        parallaxBoxes[index].style.background = "color-mix(in srgb, #4832D5 87.5%, #CCF281 25%)";
    } else if (index == 3 ){
        parallaxBoxes[index].style.background = "color-mix(in srgb, #4832D5 75%, #CCF281 37.5%)";
    } else if (index == 4 ){
        parallaxBoxes[index].style.background = "color-mix(in srgb, #4832D5 62.5%, #CCF281 50%)";
    } else if (index == 5 ){
        parallaxBoxes[index].style.background = "color-mix(in srgb, #4832D5 50%, #CCF281 62.5%)";
    } else if (index == 6 ){
        parallaxBoxes[index].style.background = "color-mix(in srgb, #4832D5 37.5%, #CCF281 75%)";
    } else if (index == 7 ){
        parallaxBoxes[index].style.background = "color-mix(in srgb, #4832D5 25%, #CCF281 87.5%)";
    } else if (index == 8 ){
        parallaxBoxes[index].style.background = "color-mix(in srgb, #4832D5 12.5%, #CCF281 92.5%)";
    } else if (index == 9 ){
        parallaxBoxes[index].style.background = "color-mix(in srgb, #4832D5 0%, #CCF281 100%)";
    } else if (index == 10 ){
        parallaxBoxes[index].style.background = "color-mix(in srgb, #CCF281 75%, #fff 25%)";
    } else if (index == 11 ){
        parallaxBoxes[index].style.background = "color-mix(in srgb, #CCF281 50%, #fff 50%)";
    } else if (index == 12 ){
        parallaxBoxes[index].style.background = "color-mix(in srgb, #CCF281 25%, #fff 75%)";
    } else if (index == 13 ){
        parallaxBoxes[index].style.background = "color-mix(in srgb, #CCF281 0%, #fff 100%)";
    } else {
        parallaxBoxes[index].style.background = "#4832d5";
    }
};


  // MAKE DIV VISIBLE WHEN DIV IS WITHIN WINDOW VIEW

  function reveal() {
    var reveals = document.querySelectorAll(".reveal, .reveal_left, .reveal_right");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  // MAKE HAMBURGER MENU TOGGLE

  const hamMenu = document.querySelector(".ham_menu");
  const offScreenMenu = document.querySelector(".off_screen_menu");

  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  })


//   MODAL CLOSE 

// Get the modal
var modal = document.getElementById("contact_modal");

function showModal() {
    modal.classList.add('show');
}

// Get the <close> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks on <close> (x), close the modal
close.onclick = function() {
    modal.classList.remove('show'); 
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('show');
  }
}



