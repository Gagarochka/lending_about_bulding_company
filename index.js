window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.hamburger').classList.toggle('is-active');
  });
  document.querySelector('.accordion-heading-1').setAttribute('tabindex', 22);
  document.querySelector('.accordion-heading-2').setAttribute('tabindex', 23);
  document.querySelector('.accordion-heading-3').setAttribute('tabindex', 24);
  document.querySelector('.accordion-heading-4').setAttribute('tabindex', 25);
  document.querySelector('.accordion-heading-5').setAttribute('tabindex', 26);
  document.querySelector('.swiper-slide-1').removeAttribute('tabindex');
  document.querySelector('.swiper-slide-2').removeAttribute('tabindex');
  document.querySelector('.swiper-slide-3').removeAttribute('tabindex');
  function changeCheckbox(event) {
    let item = document.getElementById('agreement');
    switch(item.getAttribute('aria-checked')) {
        case "true":
            item.setAttribute('aria-checked', "false");
            break;
        case "false":
            item.setAttribute('aria-checked', "true");
            break;
    }
}
})


$( "#accordion").accordion();

$( ".faq-accordion" ).accordion({
  icons: false,
});


var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  onlyExternal: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  }
});