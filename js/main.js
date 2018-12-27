//SIDE NAV TOGGLE SPIN EFFECT
// Select the DOM Item
// mobileNav = document.getElementById("mobile_nav");
primaryNav = document.getElementById("primary_nav");
const menuBtn = document.querySelector(".menu-btn");
const mainDisplay = document.getElementById("main-display");
const overlay = document.getElementById("overlay");

// /set initial state of menu
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    open();
    //set menu state back to true
    showMenu = true;
  } else {
    close();
    //set menu state back to false
    showMenu = false;
  }
}

function open() {
  menuBtn.classList.add("close");
  overlay.classList.add("overlay");
  primaryNav.style.left = "0px";
  mainDisplay.style.left = "170px";
}

function close() {
  menuBtn.classList.remove("close");
  overlay.classList.remove("overlay");
  primaryNav.style.left = "-170px";
  mainDisplay.style.left = "0px";
}

// sticky navbar
var stickymenu = document.getElementById("nav-display");
var stickymenuoffset = stickymenu.offsetTop;

window.addEventListener("scroll", function(e) {
  requestAnimationFrame(function() {
    if (window.pageYOffset > stickymenuoffset) {
      stickymenu.classList.add("sticky");
      document.querySelector("#logo").style.marginTop = "50px";
    } else {
      stickymenu.classList.remove("sticky");
      document.querySelector("#logo").style.marginTop = "-25px";
    }
  });
});

//Get the current year for the copyright
$("#year").text(new Date().getFullYear());

// SMOOTH SCROLL
// add smooth scrolling
$("#scroll-top a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      850,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

//tool tip
$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
