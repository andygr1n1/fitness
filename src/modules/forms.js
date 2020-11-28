const forms = () => {
  //style
  const style = document.createElement("style");
  style.id = "forms-style";
  style.textContent = `
    .loading-message{
        margin: 5px;
        color: green;
        font-family: 'Roboto';
        font-size: 12px;
        font-weight: 700;
        line-height: 22px;
        text-transform: uppercase;
    }

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
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sk-chasing-dots {
      width: 1.5em;
      height: 1.5em;
      position: relative;
      margin: auto;
      text-align: center;
      animation: sk-chasing-dots-rotate 2s infinite linear;
    }
    .sk-chasing-dots .sk-child {
      width: 0.7em;
      height: 0.7em;
      display: inline-block;
      position: absolute;
      top: 0;
      background-color: green;
      border-radius: 100%;
      animation: sk-chasing-dots-bounce 2s infinite ease-in-out;
    }
    .sk-chasing-dots .sk-dot-2 {
      top: auto;
      bottom: 0;
      animation-delay: -1s;
    }
    @keyframes sk-chasing-dots-rotate {
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes sk-chasing-dots-bounce {
      0%, 100% {
        transform: scale(0);
      }
      50% {
        transform: scale(1);
      }
    }
    `;

  document.head.append(style);

  const loadMessage = `
                        <div class="loading-message">
                          <div class='sk-chasing-dots'>
                          <div class='sk-child sk-dot-1'></div>
                          <div class='sk-child sk-dot-2'></div>
                          </div>
                          Идёт отправка
                        </div>
                      `,
    thanks = document.getElementById("thanks"),
    freeVisitForm = document.getElementById("free_visit_form"),
    callbackForm = document.getElementById("callback_form"),
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
      name = document.getElementById("form1-name");
      checker = document.getElementById("check");
    }
    if (target === form2) {
      formTransformator = form2;
      tel = document.getElementById("callback_form2-phone");
      name = document.getElementById("form2-name");
      checker = document.getElementById("check2");
    }
    if (target === bannerForm) {
      formTransformator = bannerForm;
      tel = document.getElementById("phone");
      name = document.getElementById("banner-form-name");
      checker = document.getElementById("check1");
    }

    const clearForms = () => {
      document.querySelectorAll("input").forEach(elem => {
        elem.value = "";
      });
      statusMessage.innerHTML = "";
      checker.checked = false;
    };

    //!f/animation
    const formAnimate = (selector, clearForms) => {
      let opacityCounter = 0,
        animation;

      const timer = () => {
        animation = requestAnimationFrame(timer);
        selector.style.display = "flex";
        opacityCounter += 0.07;

        selector.style.opacity = `${opacityCounter}`;

        if (opacityCounter >= 1) {
          cancelAnimationFrame(animation);
        }
      };
      freeVisitForm.style.display = "none";
      callbackForm.style.display = "none";
      clearForms();
      timer();
    };

    const msgAnimate = selector => {
      let opacityCounter = 0,
        animation,
        animationMinus,
        timeOut;
      const timer2 = () => {
        animation = requestAnimationFrame(timer2);
        selector.style.display = "flex";
        opacityCounter += 0.1;

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

      timer2();
    };
    //!f-animation ends

    formTransformator.append(statusMessage);
    if (name.value === "") {
      statusMessage.innerHTML = `<div class="error-message"> Необходимо указать имя </div>`;
      const errorMsg = document.querySelector(".error-message");
      msgAnimate(errorMsg);
      return;
    }
    if (tel.value.length !== 16) {
      statusMessage.innerHTML = `<div class="error-message"> Необходимо указать номер телефона </div>`;
      const errorMsg = document.querySelector(".error-message");
      msgAnimate(errorMsg);
      return;
    }
    if (checker.checked === false) {
      statusMessage.innerHTML = `<div class="error-message"> необходимо согласиться на обработку персональных данных </div>`;
      const errorMsg = document.querySelector(".error-message");
      msgAnimate(errorMsg);
      return;
    }

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
        thanks.innerHTML = `
        <div class="overlay">
        </div>
        <div class="form-wrapper">
            <div class="close-form">
                <img src="images/close-icon.png" alt="close" class="close_icon">
            </div>
            <div class="form-content">
                <h4>Спасибо!</h4>
            <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>
                <button class="btn close-btn">OK</button>
            </div>
        </div>
        `;
        formAnimate(thanks, clearForms);
      })
      .catch(error => {
        thanks.innerHTML = `
        <div class="overlay">
        </div>
        <div class="form-wrapper">
            <div class="close-form">
                <img src="images/close-icon.png" alt="close" class="close_icon">
            </div>
            <div class="form-content">
                <h4>Ошибка!</h4>
            <p>Ваша заявка не отправлена по техническим причинам. <br> Свяжитесь с нами по номеру <br> +7 (800) 555-64-47.</p>
                <button class="btn close-btn">OK</button>
            </div>
        </div>
        `;
        formAnimate(thanks, clearForms);
        console.error(error);
      });
  });
};
export default forms;