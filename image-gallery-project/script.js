// script.js

const images =
document.querySelectorAll(".card img");

const lightbox =
document.querySelector(".lightbox");

const lightboxImg =
document.querySelector(".lightbox-img");

const closeBtn =
document.querySelector(".close");

const nextBtn =
document.querySelector(".light-next");

const prevBtn =
document.querySelector(".light-prev");

let currentIndex = 0;

/* OPEN IMAGE */

images.forEach((img,index)=>{

  img.addEventListener("click",()=>{

    currentIndex = index;

    showImage();

  });

});

/* SHOW IMAGE */

function showImage(){

  lightbox.style.display = "flex";

  lightboxImg.src =
  images[currentIndex].src;

}

/* CLOSE */

closeBtn.addEventListener("click",()=>{

  lightbox.style.display = "none";

});

/* NEXT */

nextBtn.addEventListener("click",()=>{

  currentIndex++;

  if(currentIndex >= images.length){
    currentIndex = 0;
  }

  showImage();

});

/* PREV */

prevBtn.addEventListener("click",()=>{

  currentIndex--;

  if(currentIndex < 0){
    currentIndex = images.length - 1;
  }

  showImage();

});

/* CLOSE ON OUTSIDE CLICK */

lightbox.addEventListener("click",(e)=>{

  if(e.target === lightbox){

    lightbox.style.display = "none";

  }

});

/* SLIDER */

const slider =
document.querySelector(".slider");

const next =
document.querySelector(".next");

const prev =
document.querySelector(".prev");

next.addEventListener("click",()=>{

  slider.scrollLeft += 400;

});

prev.addEventListener("click",()=>{

  slider.scrollLeft -= 400;

});

/* AUTO SLIDE */

setInterval(()=>{

  slider.scrollLeft += 420;

  if(
    slider.scrollLeft >=
    slider.scrollWidth -
    slider.clientWidth
  ){

    slider.scrollLeft = 0;

  }

},4500);