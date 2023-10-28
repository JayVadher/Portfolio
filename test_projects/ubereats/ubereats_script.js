
 var coll = document.getElementsByClassName("aside_title");
//  var coll_icon = document.getElementById("collapsible_icon");
 
 var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    var coll_icon = this.lastElementChild;
    if (content.style.display === "none") {
      content.style.display = "block";
      coll_icon.classList.remove("fa-chevron-down");
      coll_icon.classList.add("fa-chevron-up");
    } else {
      content.style.display = "none";
      coll_icon.classList.remove("fa-chevron-up");
      coll_icon.classList.add("fa-chevron-down");
    }
  });
}



document.addEventListener('click',(e) =>
  {

   

    let elementClass = e.target.parentElement.id;

    if (elementClass.includes('arrows')) {

      let lastChar = elementClass.substr(elementClass.length - 1); 
     
      let carousel = "#carousel-" + lastChar;
      carousel = document.querySelector(carousel);

      let item = carousel.firstElementChild.classList;
      
      item = "." + item;
      let direction = e.target.classList.value;
      item = document.querySelector(item);

      if (direction === 'left') {
        carousel.scrollLeft -= (item.offsetWidth + 20);
      } else if (direction === 'right') {
        carousel.scrollLeft += (item.offsetWidth + 20);
      }
      
    } 
  }
);




var arr = [];

document.querySelectorAll('.items_section').forEach(function(el) {
  arr.push(el)
})

arr.forEach((element) => {
  
  var children = element.children;
  var disableLeft = element.parentElement.children[0].children[1].children[0];
  var disableRight = element.parentElement.children[0].children[1].children[1];
 
  var totalWidth = 0;
  var viewportwidth = document.getElementById('main-content').clientWidth;

  for (var i = 0; i < children.length; i++) {
      totalWidth += parseInt(children[i].clientWidth, 10);
  }

  if (totalWidth < viewportwidth ) {
    disableLeft.disabled = true;
    disableRight.disabled = true; 
  }

});





var fav_item = document.querySelectorAll('.restaurant_img_container');



fav_item.forEach(function(i) {
  // console.log(i);
  i.addEventListener("click", function() {
    this.children[1].children[0].classList.toggle('fa-solid');
    
  })
});



  