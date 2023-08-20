$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 25,
  responsiveClass: true,
  autoplay: true,
  stoponhover: false,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: true,
      loop: true,
    },
  },
});
function menu() {
  let btn = document.getElementById("mainBtn");
  let lists = document.getElementById("menuLists");
  lists.classList.toggle("visible");
}
