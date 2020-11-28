"use strict";

const getPromocode = () => {
  const oneMonth = document.getElementById("m1"),
    sixMonth = document.getElementById("m2"),
    nineMonth = document.getElementById("m3"),
    twelveMonth = document.getElementById("m4"),
    inputPromo = document.querySelector('[placeholder="Промокод"'),
    priceTotal = document.getElementById("price-total"),
    cardLetoMozaika = document.getElementById("card_leto_mozaika"),
    cardLetoSchelkovo = document.getElementById("card_leto_schelkovo"),
    telo = "ТЕЛО2020";
  if (cardLetoMozaika) {
    document.addEventListener("click", () => {
      if (cardLetoMozaika.checked && inputPromo.value !== telo) {
        if (oneMonth.checked) {
          priceTotal.innerHTML = 1999;
        }
        if (sixMonth.checked) {
          priceTotal.innerHTML = 9900;
        }
        if (nineMonth.checked) {
          priceTotal.innerHTML = 13900;
        }
        if (twelveMonth.checked) {
          priceTotal.innerHTML = 19900;
        }
      }
      if (cardLetoSchelkovo.checked && inputPromo.value !== telo) {
        if (oneMonth.checked) {
          priceTotal.innerHTML = 1999 + 1000;
        }
        if (sixMonth.checked) {
          priceTotal.innerHTML = 9900 + 5000;
        }
        if (nineMonth.checked) {
          priceTotal.innerHTML = 13900 + 7000;
        }
        if (twelveMonth.checked) {
          priceTotal.innerHTML = 19900 + 5000;
        }
      }
      if (cardLetoMozaika.checked && inputPromo.value === telo) {
        if (oneMonth.checked) {
          priceTotal.innerHTML = Math.floor(1999 - 1999 * 0.3);
        }
        if (sixMonth.checked) {
          priceTotal.innerHTML = Math.floor(9900 - 9900 * 0.3);
        }
        if (nineMonth.checked) {
          priceTotal.innerHTML = Math.floor(13900 - 13900 * 0.3);
        }
        if (twelveMonth.checked) {
          priceTotal.innerHTML = Math.floor(19900 - 19900 * 0.3);
        }
      }
      if (cardLetoSchelkovo.checked && inputPromo.value === telo) {
        if (oneMonth.checked) {
          priceTotal.innerHTML = Math.floor(2999 - 2999 * 0.3);
        }
        if (sixMonth.checked) {
          priceTotal.innerHTML = Math.floor(14900 - 14900 * 0.3);
        }
        if (nineMonth.checked) {
          priceTotal.innerHTML = Math.floor(21900 - 21900 * 0.3);
        }
        if (twelveMonth.checked) {
          priceTotal.innerHTML = Math.floor(24900 - 24900 * 0.3);
        }
      }

      document.addEventListener("input", () => {
        if (
          inputPromo.value === telo &&
          oneMonth.checked &&
          cardLetoMozaika.checked
        ) {
          priceTotal.innerHTML = Math.floor(1999 - 1999 * 0.3);
        } else if (
          inputPromo.value !== telo &&
          oneMonth.checked &&
          cardLetoMozaika.checked
        ) {
          priceTotal.innerHTML = 1999;
        } else if (
          inputPromo.value === telo &&
          sixMonth.checked &&
          cardLetoMozaika.checked
        ) {
          priceTotal.innerHTML = Math.floor(9900 - 9900 * 0.3);
        } else if (
          inputPromo.value !== telo &&
          sixMonth.checked &&
          cardLetoMozaika.checked
        ) {
          priceTotal.innerHTML = 9900;
        } else if (
          inputPromo.value === telo &&
          nineMonth.checked &&
          cardLetoMozaika.checked
        ) {
          priceTotal.innerHTML = Math.floor(13900 - 13900 * 0.3);
        } else if (
          inputPromo.value !== telo &&
          nineMonth.checked &&
          cardLetoMozaika.checked
        ) {
          priceTotal.innerHTML = 13900;
        } else if (
          inputPromo.value === telo &&
          twelveMonth.checked &&
          cardLetoMozaika.checked
        ) {
          priceTotal.innerHTML = Math.floor(19900 - 19900 * 0.3);
        } else if (
          inputPromo.value !== telo &&
          twelveMonth.checked &&
          cardLetoMozaika.checked
        ) {
          priceTotal.innerHTML = 19900;
        }

        if (
          inputPromo.value === telo &&
          oneMonth.checked &&
          cardLetoSchelkovo.checked
        ) {
          priceTotal.innerHTML = Math.floor(2999 - 2999 * 0.3);
        } else if (
          inputPromo.value === telo &&
          sixMonth.checked &&
          cardLetoSchelkovo.checked
        ) {
          priceTotal.innerHTML = Math.floor(14900 - 14900 * 0.3);
        } else if (
          inputPromo.value === telo &&
          nineMonth.checked &&
          cardLetoSchelkovo.checked
        ) {
          priceTotal.innerHTML = Math.floor(21900 - 21900 * 0.3);
        } else if (
          inputPromo.value === telo &&
          twelveMonth.checked &&
          cardLetoSchelkovo.checked
        ) {
          priceTotal.innerHTML = Math.floor(24900 - 24900 * 0.3);
        }
        if (
          inputPromo.value !== telo &&
          oneMonth.checked &&
          cardLetoSchelkovo.checked
        ) {
          priceTotal.innerHTML = 2999;
        } else if (
          inputPromo.value !== telo &&
          sixMonth.checked &&
          cardLetoSchelkovo.checked
        ) {
          priceTotal.innerHTML = 14900;
        } else if (
          inputPromo.value !== telo &&
          nineMonth.checked &&
          cardLetoSchelkovo.checked
        ) {
          priceTotal.innerHTML = 21900;
        } else if (
          inputPromo.value !== telo &&
          twelveMonth.checked &&
          cardLetoSchelkovo.checked
        ) {
          priceTotal.innerHTML = 24900;
        }
      });
    });
  }
};

export default getPromocode;
