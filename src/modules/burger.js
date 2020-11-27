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

  const menu = document.querySelector(".top-menu");
  const getCoords = elem => {
    const box = elem.getBoundingClientRect(),
      body = document.body,
      docEl = document.documentElement,
      scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop,
      clientTop = docEl.clientTop || body.clientTop || 0,
      top = box.top + scrollTop - clientTop;
    return top;
  };
  const menuStartCoords = getCoords(menu);
  const fixMenu = () => {
    const Y = window.scrollY;
    if (Y >= menuStartCoords) {
      menu.classList.add("top_fixed");
    } else if (Y <= menuStartCoords) {
      menu.classList.remove("top_fixed");
    }
  };
  if (window.innerWidth < 768) {
    window.addEventListener("scroll", fixMenu);
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      window.addEventListener("scroll", fixMenu);
    }

    if (window.innerWidth > 768) {
      window.removeEventListener("scroll", fixMenu);
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
