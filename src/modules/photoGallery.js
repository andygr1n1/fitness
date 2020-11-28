/* eslint-disable strict */
"use strict";

const photoGallery = () => {
  //style
  const style = document.createElement("style");
  style.id = "gallery-style";
  style.textContent = `
    
       .photo-gallery-images {
        display: none;
    }

      .photo-gallery-image-active {
        display: flex;
    }

        .photo-gallery-wrapper {
        position: relative;
        display: flex;
    } 

        .photo-gallery-wrapper > span {
        z-index: 9999 !important;
        position: absolute;
        width: 36px;
        height: 37px;
        background-color: #f4c71b !important;
        border-radius: 50%;
        text-align: center;
        padding-top: 11px;
    }

    .photo-gallery-left {
        display: block;
        top: 40%;
        left: 6.5%;
        cursor: pointer;
    }

    .photo-gallery-right {
        display: blockl;
        top: 40%;
        left: 89%;
        cursor: pointer;
    }

    .photo-gallery-buttons {
      position: absolute;
      top: 90%;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .photo-gallery-dots {
        min-height: 10px;
        min-width: 30px;
        border-radius: 10%;
        margin: 1px;
        border: 1px solid rgba(204, 204, 204, 0.911);
    }


    .photo-gallery-dot-active {
        background: #f4c71b;
        border: 1px solid #f4c71b;
    }


    
    @media (max-width: 768px) {

    .photo-gallery-left {
        display: none;
    }

    .photo-gallery-right {
        display: none;
    }
}

    `;

  document.head.append(style);

  const galleryBg = document.querySelector(".gallery-bg > .wrapper"),
    gallerySlider = document.querySelector(".gallery-slider"),
    images = document.querySelectorAll(" .gallery-slider > .slide > img"),
    leftArrow = document.createElement("span"),
    rightArrow = document.createElement("span"),
    buttonsWrapper = document.createElement("div");

  galleryBg.classList.add("photo-gallery-wrapper");
  gallerySlider.classList.add("photo-gallery-slider");
  buttonsWrapper.classList.add("photo-gallery-buttons");

  leftArrow.className = "photo-gallery-left";
  leftArrow.innerHTML = `<i class="fa fa-angle-left"></i>`;
  rightArrow.className = "photo-gallery-right";
  rightArrow.innerHTML = `<i class="fa fa-angle-right"></i>`;

  galleryBg.append(leftArrow);
  galleryBg.append(rightArrow);
  galleryBg.append(buttonsWrapper);

  images.forEach(x => {
    if (x === images[0]) {
      x.classList.add("photo-gallery-image-active");
    }
    x.classList.add("photo-gallery-images");
  });
  for (let i = 0; i < images.length; i++) {
    const newDot = document.createElement("button");
    newDot.classList.add("photo-gallery-dots");
    if (i === 0) {
      newDot.classList.add("photo-gallery-dot-active");
    }
    buttonsWrapper.append(newDot);
  }

  const sliderDots = document.querySelectorAll(".photo-gallery-dots");

  const prevSlide = () => {
    for (let i = 0; i < images.length; i++) {
      if (images[0].classList.contains("photo-gallery-image-active")) {
        images[0].classList.remove("photo-gallery-image-active");
        images[0].classList.add("photo-gallery-images");
        images[images.length - 1].classList.add("photo-gallery-image-active");
        sliderDots[0].classList.remove("photo-gallery-dot-active");
        sliderDots[images.length - 1].classList.add("photo-gallery-dot-active");
        return;
      }
      if (images[i].classList.contains("photo-gallery-image-active")) {
        images[i].classList.remove("photo-gallery-image-active");
        images[i - 1].classList.add("photo-gallery-image-active");
        sliderDots[i].classList.remove("photo-gallery-dot-active");
        sliderDots[i - 1].classList.add("photo-gallery-dot-active");
        return;
      }
    }
  };

  const nextSlide = () => {
    for (let i = 0; i < images.length; i++) {
      if (
        images[images.length - 1].classList.contains(
          "photo-gallery-image-active"
        )
      ) {
        images[images.length - 1].classList.remove(
          "photo-gallery-image-active"
        );
        images[images.length - 1].classList.add("photo-gallery-images");
        images[0].classList.add("photo-gallery-image-active");
        sliderDots[images.length - 1].classList.remove(
          "photo-gallery-dot-active"
        );
        sliderDots[0].classList.add("photo-gallery-dot-active");
        return;
      }
      if (images[i].classList.contains("photo-gallery-image-active")) {
        images[i].classList.remove("photo-gallery-image-active");
        images[i].classList.add("photo-gallery-images");
        images[i + 1].classList.add("photo-gallery-image-active");
        sliderDots[i].classList.remove("photo-gallery-dot-active");
        sliderDots[i + 1].classList.add("photo-gallery-dot-active");
        return;
      }
    }
  };

  galleryBg.addEventListener("click", event => {
    const target = event.target;
    console.log(target);

    //!left
    if (target.closest(".photo-gallery-left")) {
      prevSlide();
    }

    //!right
    if (target.closest(".photo-gallery-right")) {
      nextSlide();
    }

    //!btn
    if (target.closest(".photo-gallery-dots")) {
      for (let i = 0; i < images.length; i++) {
        if (sliderDots[i] === target) {
          images.forEach(elem =>
            elem.classList.remove("photo-gallery-image-active")
          );
          sliderDots.forEach(elem =>
            elem.classList.remove("photo-gallery-dot-active")
          );
          images[i].classList.add("photo-gallery-image-active");
          sliderDots[i].classList.add("photo-gallery-dot-active");
        }
      }
    }
  });

  let interval;

  interval = setInterval(nextSlide, 3000);

  galleryBg.addEventListener("mouseover", event => {
    if (
      event.target.matches(".photo-gallery-left") ||
      event.target.matches(".photo-gallery-right") ||
      event.target.matches(".photo-gallery-dots")
    ) {
      clearInterval(interval);
    }
  });

  galleryBg.addEventListener("mouseout", event => {
    if (
      event.target.matches(".photo-gallery-left") ||
      event.target.matches(".photo-gallery-right") ||
      event.target.matches(".photo-gallery-dots")
    ) {
      interval = setInterval(nextSlide, 3000);
    }
  });
};

export default photoGallery;
