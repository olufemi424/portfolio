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
      document.querySelector(".menu-btn").style.marginTop = "-10px";
    } else {
      stickymenu.classList.remove("sticky");
      document.querySelector("#logo").style.marginTop = "-25px";
      document.querySelector(".menu-btn").style.marginTop = "0";
    }
  });
});

//Get the current year for the copyright
$("#year").text(new Date().getFullYear());

// SMOOTH SCROLL
// add smooth scrolling
$("#nav-display a").on("click", function(e) {
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

// ///////////////////////HOME TYPE WRITER
const TypeWriter = function(textElement, words, wait = 3000) {
  this.textElement = textElement;
  this.words = words;
  this.wait = parseInt(wait, 10);
  this.text = "";
  this.wordsIndex = 0;
  this.type();
  this.isDeleting = false;
};

const dataWords = [
  "Web Development",
  "Programming",
  "Designer",
  "Entrepreneur"
];
// type method
TypeWriter.prototype.type = function() {
  // current index of work
  const currentWord = this.wordsIndex % this.words.length;
  //get full text of current word
  const fullText = this.words[currentWord];
  //check if deleting
  if (this.isDeleting) {
    this.text = fullText.substring(0, this.text.length - 1);
  } else {
    //  add character
    this.text = fullText.substring(0, this.text.length + 1);
  }
  this.textElement.innerHTML = `<span class="txt"> ${this.text}</span> `;
  //initial type speed
  let typeSpeed = 300;
  if (this.isDeleting) {
    typeSpeed /= 2;
  }
  //if word is complete
  if (!this.isDeleting && this.text === fullText) {
    // make pause at end
    typeSpeed = this.wait;
    this.isDeleting = true;
  } else if (this.isDeleting && this.text === "") {
    this.isDeleting = false;
    //move to next word
    this.wordsIndex++;
    typeSpeed = 500;
  }
  setTimeout(() => this.type(), typeSpeed);
};

//Init app
function init() {
  const wait = "3000";
  const textElement = document.getElementById("typewriter");
  const words = dataWords;
  new TypeWriter(textElement, words, wait);
}

//Init on DOM load
document.addEventListener("DOMContentLoaded", init);

//tool tip
$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
