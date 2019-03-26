// //SIDE NAV TOGGLE SPIN EFFECT
// // Select the DOM Item
// // mobileNav = document.getElementById("mobile_nav");
// primaryNav = document.getElementById("primary_nav");
// const menuBtn = document.querySelector(".menu-btn");
// const mainDisplay = document.getElementById("main-display");
// const overlay = document.getElementById("overlay");

// // /set initial state of menu
// let showMenu = false;
// menuBtn.addEventListener("click", toggleMenu);
// function toggleMenu() {
//   if (!showMenu) {
//     open();
//     //set menu state back to true
//     showMenu = true;
//   } else {
//     close();
//     //set menu state back to false
//     showMenu = false;
//   }
// }

// function open() {
//   menuBtn.classList.add("close");
//   overlay.classList.add("overlay");
//   primaryNav.style.left = "0px";
//   mainDisplay.style.left = "170px";
// }

// function close() {
//   menuBtn.classList.remove("close");
//   overlay.classList.remove("overlay");
//   primaryNav.style.left = "-170px";
//   mainDisplay.style.left = "0px";
// }

// // sticky navbar
// var stickymenu = document.getElementById("nav-display");
// var stickymenuoffset = stickymenu.offsetTop;

// window.addEventListener("scroll", function(e) {
//   requestAnimationFrame(function() {
//     if (window.pageYOffset > stickymenuoffset) {
//       stickymenu.classList.add("sticky");
//       document.querySelector("#logo").style.marginTop = "50px";
//     } else {
//       stickymenu.classList.remove("sticky");
//       document.querySelector("#logo").style.marginTop = "-25px";
//     }
//   });
// });

// //Get the current year for the copyright
// $("#year").text(new Date().getFullYear());

// // SMOOTH SCROLL
// // add smooth scrolling
// $("#scroll-top a").on("click", function(e) {
//   if (this.hash !== "") {
//     e.preventDefault();
//     const hash = this.hash;
//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top
//       },
//       850,
//       function() {
//         window.location.hash = hash;
//       }
//     );
//   }
// });

// //tool tip
// $(function() {
//   $('[data-toggle="tooltip"]').tooltip();
// });

import { images } from "./data/data.js";
console.log(images);

const navTrigger = document.querySelector(".hamburger");
const headerEl = document.querySelector(".nav");
const contentEl = document.querySelector(".content");
const hamburgerBarEl = document.getElementsByTagName("span");

const toggleNav = () => {
  navTrigger.addEventListener("click", () => {
    headerEl.classList.toggle("open");
    contentEl.classList.toggle("shift");
    animateHamburgers();
  });
};

const animateHamburgers = () => {
  for (let item of hamburgerBarEl) {
    item.classList.toggle("change");
  }
};
toggleNav();

//images section

//init container for images
let imagesOnDisplay = [];

//display function
function display() {
  let output = "";
  imagesOnDisplay.map(image => {
    output += `
   
      <img
        class="stack__img"
        data-toggle="tooltip"
        data-placement="top"
        title="HTML5"
        src="${image.href}"
        alt="html5"
      />
    `;
  });
  document.getElementById("stack_images").innerHTML = output;
}

//init the state of images on display
function init() {
  imagesOnDisplay = images;
  display();
}

//filter items on click of each category
// const filterLink = document.querySelectorAll("#filter a");

function imageCategory(event) {
  console.log(event.target.id);
  let imagesCatergory = [];
  for (let i = 0; i < images.length; i++) {
    if (event.target.id === "all") {
      imagesCatergory = images;
    } else if (event.target.id === images[i].category) {
      imagesCatergory.push(images[i]);
    }
    imagesOnDisplay = imagesCatergory;
  }
  display();
}

document.addEventListener("DOMContentLoaded", init);
document.getElementById("filter").addEventListener("click", imageCategory);
