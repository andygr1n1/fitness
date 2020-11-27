const selectClub = () => {
  const clubList = document.querySelector(".clubs-list > ul");

  document.querySelector(".clubs-list").addEventListener("click", () => {
    if (clubList.style.display !== "block") {
      clubList.style.display = "block";
    } else {
      clubList.style.display = "none";
    }
  });
};

export default selectClub;
