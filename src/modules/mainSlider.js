const mainSlider = () => {
  //style
  const style = document.createElement("style");
  style.id = "main-slider-styles";
  style.textContent = `
    .main-slider-active {
      display: flex !important;
    }
    `;
  document.head.append(style);

  const sliders = [...document.querySelectorAll(".main-slider > .slide")];

  sliders.forEach(x => {
    x.style.display = "none";
    if (x === sliders[0]) {
      x.classList.add("main-slider-active");
    }
  });

  const slideMe = () => {
    if (sliders[sliders.length - 1].classList.contains("main-slider-active")) {
      sliders[sliders.length - 1].classList.remove("main-slider-active");
      sliders[0].classList.add("main-slider-active");
      return;
    }

    for (let i = 0; i < sliders.length; i++) {
      if (sliders[i].classList.contains("main-slider-active")) {
        sliders[i].classList.remove("main-slider-active");
        sliders[i + 1].classList.add("main-slider-active");
        return;
      }
    }
  };
  setInterval(slideMe, 3000);
};

export default mainSlider;
