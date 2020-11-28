const forms = () => {
  //style
  const style = document.createElement("style");
  style.id = "forms-style";
  style.textContent = `
    .error-message {
        margin: 5px;
        color: red;
        font-family: 'Roboto';
        font-size: 12px;
        font-weight: 700;
        line-height: 22px;
        text-transform: uppercase;
        display: none;
        opacity: 0;
    }

    `;

  document.head.append(style);

  const loadMessage = `идет отправка`,
    errorMessage = `<div class="error-message"> что-то пошло не так... попробуйте позже </div>`,
    successMessage = `Спасибо! Мы скоро с вами свяжемся!`,
    form1 = document.getElementById("form1"),
    form2 = document.getElementById("form2"),
    bannerForm = document.getElementById("banner-form");

  const statusMessage = document.createElement("div");
  statusMessage.style.cssText = "font-size: 2rem";
  statusMessage.style.color = "#19b5fe";

  document.addEventListener("submit", event => {
    const target = event.target;
    event.preventDefault();
    if (!target.matches("#form1, #form2, #banner-form")) {
      return;
    }

    let formTransformator, checker, name, tel;
    if (target === form1) {
      formTransformator = form1;
      tel = document.getElementById("callback_form1-phone");
      name = document.querySelectorAll('[name="name"]')[3];
      checker = document.getElementById("check");
    }
    if (target === form2) {
      formTransformator = form2;
      tel = document.getElementById("callback_form2-phone");
      name = document.querySelectorAll('[name="name"]')[4];
      checker = document.getElementById("check2");
    }
    if (target === bannerForm) {
      formTransformator = bannerForm;
      tel = document.getElementById("phone");
      name = document.querySelectorAll('[name="name"]')[0];
      checker = document.getElementById("check1");
    }

    //!f/animation
    const formAnimate = selector => {
      let opacityCounter = 0,
        animation,
        animationMinus,
        timeOut;
      const timer = () => {
        animation = requestAnimationFrame(timer);
        selector.style.display = "block";
        opacityCounter += 0.01;

        selector.style.opacity = `${opacityCounter}`;

        if (opacityCounter >= 1) {
          cancelAnimationFrame(animation);
          const timerMinus = () => {
            animationMinus = requestAnimationFrame(timerMinus);
            opacityCounter -= 0.01;
            selector.style.opacity = `${opacityCounter}`;

            if (opacityCounter < 0) {
              cancelAnimationFrame(animationMinus);
              selector.style.display = "none";
              clearTimeout(timeOut);
            }
          };
          timeOut = setTimeout(timerMinus, 1000);
        }
      };
      timer();
    };
    //!f-animation ends

    formTransformator.append(statusMessage);
    if (name.value === "") {
      statusMessage.innerHTML = `<div class="error-message"> Необходимо указать имя </div>`;
      const errorMsg = document.querySelector(".error-message");
      formAnimate(errorMsg);
      return;
    }
    if (tel.value.length !== 16) {
      statusMessage.innerHTML = `<div class="error-message"> Необходимо указать номер телефона </div>`;
      const errorMsg = document.querySelector(".error-message");
      formAnimate(errorMsg);
      return;
    }
    if (checker.checked === false) {
      statusMessage.innerHTML = `<div class="error-message"> необходимо согласиться на обработку персональных данных </div>`;
      const errorMsg = document.querySelector(".error-message");
      formAnimate(errorMsg);
      return;
    }

    formTransformator.append(statusMessage);
    statusMessage.innerHTML = loadMessage;

    const formData = new FormData(formTransformator);
    const bodyObj = {};
    formData.forEach((value, key) => {
      bodyObj[key] = value;
    });
    const networkData = JSON.stringify(bodyObj);

    const postData = networkData =>
      fetch("server.php", {
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify(networkData),
      });

    postData(networkData)
      .then(response => {
        if (response.status !== 200) {
          throw new Error("status network not 200");
        }
        statusMessage.innerHTML = successMessage;
        document.querySelectorAll("input").forEach(elem => {
          elem.value = "";
        });
      })
      .catch(error => {
        statusMessage.innerHTML = errorMessage;
        console.error(error);
      });
  });
};
export default forms;
