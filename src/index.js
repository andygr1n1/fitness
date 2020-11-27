/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-var */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
require("es6-promise").polyfill();
const fetchPolyfill = require("fetch-polyfill");
const formdataPolyfill = require("formdata-polyfill");
import "nodelist-foreach-polyfill";
import "@babel/polyfill";
import elementClosest from "element-closest";
elementClosest(window);

// полифил для метода append()
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty("append")) {
      return;
    }
    Object.defineProperty(item, "append", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function append() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {          
          var isNode = argItem instanceof Node;
          docFrag.appendChild(
            isNode ? argItem : document.createTextNode(String(argItem))
          );
        });

        this.appendChild(docFrag);
      },
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

import carousel from "./modules/carousel.js";
import burger from "./modules/burger.js";
import photoGallery from "./modules/photoGallery.js";
import mainSlider from "./modules/mainSlider.js";

carousel(); //9
photoGallery();
burger(); //14, 15, 16
mainSlider();
