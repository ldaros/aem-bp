import Vue from "vue";
import image from "./Image.vue";

function init() {
  let components = document.querySelectorAll("[cmp-vue-image]");

  components.forEach((component) => {
    new Vue({
      el: "[cmp-vue-image]",

      render: (h) =>
        h(image, {
          props: {
            source: component.getAttribute("source"),
          },
        }),
    });

    component.removeAttribute("cmp-vue-image");
  });
}

document.addEventListener("DOMContentLoaded", init);
