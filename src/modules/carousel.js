const carousel = () => {
  //style
  const style = document.createElement("style");
  style.id = "carousel-style";
  style.textContent = `
    .services-slider {
      width: 100%;
      overflow: hidden;
      padding-left: 5px;
      position: relative;
    }

    .services-slider > .slide {   
      min-width: 226px;    
      margin-right: 0% !important; 
      margin-left: 0%!important;
      transition: transform 0.5s !important;
      will-change: transform !important;
    }

    .services-slider > span {
      position: absolute;
      width: 36px;
      height: 37px;
      background-color: #f4c71b !important;
      border-radius: 50%;
      text-align: center;
      padding-top: 11px;
    }

    .carousel-slider-left {
      top: 22%;
      left: 0;
      cursor: pointer;
    }

    .carousel-slider-right {
      top: 22%;
      left: 97%;
      cursor: pointer;
    }

    @media (max-width: 1100px) {

    .services-slider {
      width: 95%;
    }

    .services-slider > .slide {
      flex: 0 0 34%;   

    }
  }

    @media (max-width: 768px) {

    .services-slider {
      width: 90%;
    }

    .services-slider > .slide {
      flex: 0 0 100%;   
    }

    .carousel-slider-left {
      top: 22;
      left: 3%;
      cursor: pointer;
    }

    .carousel-slider-right {
      top: 22%;
      left: 80%;
      cursor: pointer;
    }
  }

    @media (max-width: 330px) {

    .carousel-slider-left {
      left: 3%;
    }
  
    .carousel-slider-right {
      left: 80%;
    }
  }

    @media (max-width: 380px) {

    .carousel-slider-left {
      left: 6%;
    }
  
    .carousel-slider-right {
      left: 80%;
    }
  }
    `;
  document.head.append(style);

  //module-body
  const slider = document.querySelector(".services-slider"),
    slides = [...slider.children],
    images = document.querySelectorAll(" .services-slider > .slide > img"),
    leftArrow = document.createElement("span"),
    rightArrow = document.createElement("span");

  leftArrow.className = "carousel-slider-left";
  leftArrow.innerHTML = `<i class="fa fa-angle-left"></i>`;
  rightArrow.className = "carousel-slider-right";
  rightArrow.innerHTML = `<i class="fa fa-angle-right"></i>`;

  slider.append(leftArrow);
  slider.append(rightArrow);

  const menu = () => {
    let mover = 0,
      position = 0;
    slider.addEventListener("click", event => {
      const target = event.target;
      if (!target.closest(".carousel-slider-left, .carousel-slider-right")) {
        return;
      }
      if (target.closest(".carousel-slider-left") && position > 0) {
        if (window.innerWidth <= 768) {
          mover +=
            slides[0].getBoundingClientRect().width -
            images[0].getBoundingClientRect().width +
            images[0].getBoundingClientRect().width;

          position--;
          slides.forEach(x => {
            x.style.transform = `translateX(${mover}px)`;
          });

          return;
        }
        if (window.innerWidth < 1100) {
          mover += slides[0].getBoundingClientRect().width;
          position--;
          slides.forEach(x => {
            x.style.transform = `translateX(${mover}px)`;
          });

          return;
        }
        if (window.innerWidth > 1100) {
          mover += 226;
          position--;
          slides.forEach(x => {
            x.style.transform = `translateX(${mover}px)`;
          });
          return;
        }
      }

      if (target.closest(".carousel-slider-right")) {
        if (window.innerWidth <= 768 && position !== slides.length - 1) {
          mover -=
            slides[0].getBoundingClientRect().width -
            images[0].getBoundingClientRect().width +
            images[0].getBoundingClientRect().width;
          position++;
          slides.forEach(x => {
            x.style.transform = `translateX(${mover}px)`;
          });
          return;
        }

        if (
          window.innerWidth > 768 &&
          window.innerWidth <= 1100 &&
          position !== slides.length - 3
        ) {
          mover -= slides[0].getBoundingClientRect().width;
          position++;
          slides.forEach(x => {
            x.style.transform = `translateX(${mover}px)`;
          });
          return;
        }

        if (window.innerWidth > 1100 && position !== slides.length - 5) {
          mover -= 226;
          position++;
          slides.forEach(x => {
            x.style.transform = `translateX(${mover}px)`;
          });
          return;
        }
      }
    });
  };
  menu();
  window.addEventListener("resize", menu);
};

export default carousel;
