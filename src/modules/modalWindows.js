const modalWindows = () => {
  const freeVisitForm = document.getElementById("free_visit_form"),
    callbackForm = document.getElementById("callback_form"),
    thanks = document.getElementById("thanks"),
    gift = document.getElementById("gift");

  document.addEventListener("click", event => {
    const target = event.target;
    if (target.closest(".free-visit")) {
      freeVisitForm.style.display = "block";
    }
    if (target.closest(".right > .call > .callback-btn")) {
      callbackForm.style.display = "block";
    }

    if (target.closest(".fixed-gift")) {
      gift.style.display = "block";
    }

    if (
      target.closest(
        "#gift > .overlay, #gift > .form-wrapper > .close-form .close_icon, #gift > .form-wrapper > .form-content > .close-btn"
      )
    ) {
      gift.style.display = "none";
      document.querySelector(".fixed-gift").remove();
    }

    if (
      target.closest(
        ".overlay, .close_icon,  #thanks > .form-wrapper > .form-content > .close-btn"
      )
    ) {
      freeVisitForm.style.display = "none";
      callbackForm.style.display = "none";
      thanks.style.display = "none";
    }
  });
};

export default modalWindows;
