const burger = () => {
  const popupMenu = document.querySelector(".popup-menu");

  const flyBurger = () => {
    const topMenu = document.querySelector(".top-menu");

    if (window.pageYOffset > 190 && window.innerWidth < 768) {
      topMenu.style.position = "fixed";
    } else {
      topMenu.style.position = "";
    }
  };
  window.addEventListener("scroll", flyBurger);
  window.addEventListener("resize", flyBurger);
  //popupMenu
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

