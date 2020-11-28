const calculator = () => {
  const checkMozaika = document.getElementById("card_leto_mozaika"),
    checkSchelkovo = document.getElementById("card_leto_schelkovo"),
    priceTotal = document.getElementById("price-total"),
    promo = document.querySelector('[placeholder="Промокод"'),
    m1 = document.getElementById("m1"),
    m2 = document.getElementById("m2"),
    m3 = document.getElementById("m3"),
    m4 = document.getElementById("m4");

  document.getElementById("cards").addEventListener("click", () => {
    if (checkMozaika.checked) {
      if (m1.checked) {
        if (promo.value === "ТЕЛО2020") {
          priceTotal.innerHTML = Math.floor(1999 - 1999 * 0.3);
        } else {
          priceTotal.innerHTML = 1999;
          return;
        }
      }

      if (m2.checked) {
        if (promo.value === "ТЕЛО2020") {
          priceTotal.innerHTML = Math.floor(9900 - 9900 * 0.3);
        } else {
          priceTotal.innerHTML = 9900;
          return;
        }
      }

      if (m3.checked) {
        if (promo.value === "ТЕЛО2020") {
          priceTotal.innerHTML = Math.floor(13900 - 13900 * 0.3);
        } else {
          priceTotal.innerHTML = 13900;
          return;
        }
      }

      if (m4.checked) {
        if (promo.value === "ТЕЛО2020") {
          priceTotal.innerHTML = Math.floor(19900 - 19900 * 0.3);
        } else {
          priceTotal.innerHTML = 19900;
          return;
        }
      }
    }

    if (checkSchelkovo.checked) {
      if (m1.checked) {
        if (promo.value === "ТЕЛО2020") {
          priceTotal.innerHTML = Math.floor(2999 - 2999 * 0.3);
        } else {
          priceTotal.innerHTML = 2999;
          return;
        }
      }

      if (m2.checked) {
        if (promo.value === "ТЕЛО2020") {
          priceTotal.innerHTML = Math.floor(14900 - 14900 * 0.3);
        } else {
          priceTotal.innerHTML = 14990;
          return;
        }
      }

      if (m3.checked) {
        if (promo.value === "ТЕЛО2020") {
          priceTotal.innerHTML = Math.floor(21900 - 21900 * 0.3);
        } else {
          priceTotal.innerHTML = 21990;
          return;
        }
      }

      if (m4.checked) {
        if (promo.value === "ТЕЛО2020") {
          priceTotal.innerHTML = Math.floor(24900 - 24900 * 0.3);
        } else {
          priceTotal.innerHTML = 24990;
          return;
        }
      }
    }
  });

  document.addEventListener("input", () => {
    if (promo.value === "ТЕЛО2020" && m1.checked && checkMozaika.checked) {
      priceTotal.innerHTML = Math.floor(1999 - 1999 * 0.3);
    }
    if (promo.value === "ТЕЛО2020" && m2.checked && checkMozaika.checked) {
      priceTotal.innerHTML = Math.floor(9900 - 9900 * 0.3);
    }
    if (promo.value === "ТЕЛО2020" && m3.checked && checkMozaika.checked) {
      priceTotal.innerHTML = Math.floor(13900 - 13900 * 0.3);
    }
    if (promo.value === "ТЕЛО2020" && m4.checked && checkMozaika.checked) {
      priceTotal.innerHTML = Math.floor(19900 - 19900 * 0.3);
    }
    if (promo.value === "ТЕЛО2020" && m1.checked && checkSchelkovo.checked) {
      priceTotal.innerHTML = Math.floor(2999 - 2999 * 0.3);
    }
    if (promo.value === "ТЕЛО2020" && m2.checked && checkSchelkovo.checked) {
      priceTotal.innerHTML = Math.floor(14900 - 14900 * 0.3);
    }
    if (promo.value === "ТЕЛО2020" && m3.checked && checkSchelkovo.checked) {
      priceTotal.innerHTML = Math.floor(21900 - 21900 * 0.3);
    }
    if (promo.value === "ТЕЛО2020" && m4.checked && checkSchelkovo.checked) {
      priceTotal.innerHTML = Math.floor(24900 - 24900 * 0.3);
    }
  });
};

export default calculator;
