
const scrollTop = () => {
  const toTop = document.getElementById("totop");

  toTop.style.display = "none";
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 680) {
      toTop.style.display = "block";
    } else {
      toTop.style.display = "none";
    }
  });

  toTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

export default scrollTop;
