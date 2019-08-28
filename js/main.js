document.addEventListener("DOMContentLoaded", function() {
  var trigger = document.getElementById("trigger");

  trigger.addEventListener("click", function(e) {
    this.classList.toggle("is-active");
    this.nextElementSibling.classList.toggle("show");
    e.stopPropagation();
  });

  var mobileDropdown = document.querySelectorAll(".nav__item__trigger");
  Array.from(mobileDropdown);

  mobileDropdown.forEach(function(el) {
    el.addEventListener("click", function(e) {
      e.target.children[1].classList.toggle("show");
    });
  });

  var navMain = document.querySelector(".nav__main__wrapper");
  var topOfNav = navMain.offsetTop;
  var navLinks = document.querySelectorAll('.nav__desktop .nav__item');

  function fixNav() {
    if (window.scrollY >= topOfNav) {
      navLinks.forEach(function(nav) {
        nav.classList.add('nav__item--sm');
      });
      document.body.style.paddingTop = navMain.offsetHeight + "px";
      document.body.classList.add("fixed-nav");
    } else {
      navLinks.forEach(function(nav) {
        nav.classList.remove('nav__item--sm');
      });
      document.body.style.paddingTop = 0;
      document.body.classList.remove("fixed-nav");
    }
  }

  window.addEventListener("scroll", fixNav);

  var popLink = document.querySelectorAll('.popup__menu__link');
  // console.log(popLink);
  popLink.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      // console.log(e);
      var selectedLink = e.target.childNodes[1].cloneNode('true');
      // console.log(selectedLink);
      document.querySelector('.nav__sub__link.trigger').childNodes[1].firstElementChild.replaceWith(selectedLink);;;
      
    });
  })
});
