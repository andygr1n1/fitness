const burger = () => {
  //style
  const style = document.createElement("style");
  style.id = "burger-style";
  style.textContent = `
    .top_fixed {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    }

    `;
  document.head.append(style);

  window.addEventListener("scroll", () => {
    const topMenu = document.querySelector(".top-menu");
    const x = window.innerWidth;

    if (window.pageYOffset > 190 && x < 768) {
      topMenu.style.position = "fixed";
    } else {
      topMenu.style.position = "";
    }
  });

  //popupMenu
  const popupMenu = document.querySelector(".popup-menu");
  document.addEventListener("click", event => {
    const target = event.target;
    if (target.closest(".hidden-large > img")) {
      popupMenu.style.display = "flex";
    }
    if (target.closest(".close-menu-btn > img ")) {
      popupMenu.style.display = "none";
    }
    if (target.closest(".scroll > a")) {
      popupMenu.style.display = "none";
    }
  });
};

export default burger;
