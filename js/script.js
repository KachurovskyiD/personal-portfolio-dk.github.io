'use strict';

window.addEventListener('DOMContentLoaded', () => {
  //ScrollOnScroll

let scr_items = document.querySelectorAll('._scr-item');
window.addEventListener('scroll', scroll_scroll);

function scroll_scroll() {
  let src_value = pageYOffset;

  if (scr_items.length > 0) {
    for (let index = 0; index < scr_items.length; index++) {
      let scr_item = scr_items[index];
      let scr_item_offset = offset(scr_item).top;
      let scr_item_height = scr_item.offsetHeight;
      let scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);
      if (window.innerHeight > scr_item_height) {
        scr_item_point = window.innerHeight - scr_item_height / 3;
      }
      if ((src_value > scr_item_offset - scr_item_point) && src_value < (scr_item_offset + scr_item_height)) {
        scr_item.classList.add('_active');
      } else {
        // scr_item.classList.remove('_active');
      }
    }
  }
}

setTimeout(function () {
  //document.addEventListener("DOMContentLoaded", scroll_scroll);
  scroll_scroll();
}, 100);

//SameFunctions
function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  }
}
  // Preloader

window.onload = function () {
  setTimeout(() => {
    let preloader = document.querySelector('#preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 1000);
};
  // JS - функция определения поддержки WebP

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
   // Scroll top

 (function () {
   window.addEventListener("scroll", () => {
     let scrollTop = document.querySelector('.scroll-top');
     scrollTop.classList.toggle("scroll-topUp", window.scrollY > 500);
   });
 })();
   // Smooth scroll

 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
     e.preventDefault();
     document.querySelector(this.getAttribute('href')).scrollIntoView({
       behavior: 'smooth'
     });
   });
 });
  // Header-burger

function getBurgerMenu(inputSelector, menuSelector) {
  let input = document.querySelector(inputSelector),
    menu = document.querySelector(menuSelector);

  document.addEventListener('click', (e) => {
    if (input.checked == true) {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target == menu) {
      input.checked = false;
      menu.style.display = 'none';
    }
  });
}

getBurgerMenu('#check-menu', '.header__menu');
  // Header sticky

(function () {
  window.addEventListener("scroll", () => {
    let header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
  });
})();
  // Brogress bars

const about = document.querySelector('.about');
const progressValue = document.querySelectorAll('.progress-value');

window.addEventListener('scroll', startProgress);

function startProgress() {
  let count = 1;
  if (about.classList.contains("_active")) {
    progressValue.forEach(item => {
      item.classList.add(`bar-${count++}`);
    })
  }
}
  // Counter

let time = 2;
const counter = document.querySelector('.about');
window.addEventListener('scroll', startCount);

function startCount() {
  if (counter.classList.contains("_active")) {
    $(".number").each(function () {
      let i = 1,
        num = $(this).data("num"),
        step = 1000 * time / num,
        that = $(this),
        int = setInterval(function () {
          if (i <= num) {
            that.html(i);
          } else {
            clearInterval(int);
          }
          i++;
          window.removeEventListener('scroll', startCount);
        }, step);
    });
  }
}
  // Mouse move position

const position = document.documentElement;
position.addEventListener('mousemove', e => {
  position.style.setProperty('--x', e.clientX + 'px');
  position.style.setProperty('--y', e.clientY + 'px');
})
});




