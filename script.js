const images = houseGallery;


const gallery = document.getElementById("gallery");
const counter = document.getElementById("counter");


// Create image cards
images.forEach((item) => {

  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  slide.innerHTML = `
    <img 
      src="${item.src}" 
      style="object-position:${item.position};"
    >

    <div class="caption">
      ${item.caption}
    </div>
  `;

  gallery.appendChild(slide);

});


// Start Swiper
const swiper = new Swiper(".swiper", {

  slidesPerView: "auto",
  centeredSlides: true,

  spaceBetween: 15,

  grabCursor: true,

  effect: "coverflow",

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 120,
    modifier: 1,
    slideShadows: false,
  },

  on: {

    slideChange: function () {
      counter.textContent =
        `${this.realIndex + 1} / ${images.length}`;
    }

  }

});
