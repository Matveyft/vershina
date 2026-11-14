// Вершина — главный скрипт: меню, появление блоков
(function () {
  "use strict";

  // Мобильное меню
  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");

  if (burger && nav) {
    burger.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // закрыть меню после клика по ссылке
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Появление блоков при скролле
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("visible");
    });
  }
})();
