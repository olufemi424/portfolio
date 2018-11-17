//SIDE NAV TOGGLE SPIN EFFECT
// Select the DOM Item
// mobileNav = document.getElementById("mobile_nav");
// primaryNav = document.getElementById("primary_nav");
const menuBtn = document.querySelector(".menu-btn");
let mainDisplay = document.getElementById("main-display");

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
  mainDisplay.classList.add("overlay");
  $("#primary_nav").animate({ left: "0px" }, 300);
  $("#main-display").animate({ left: "170px" }, 300);
  $("body").css("overflow-x", "hidden");
  $("#primary_nav").css("overflow-y", "hidden");
}

function close() {
  menuBtn.classList.remove("close");
  mainDisplay.classList.remove("overlay");
  $("#primary_nav").animate({ left: "-170px" }, 300);
  $("#main-display").animate({ left: "0px" }, 300);
  $("body").css("overflow-x", "hidden");
}

// sticky navbar
$(document).ready(function() {
  var $window = $(window);
  var nav = $("nav");
  var navTop = nav.offset().top;

  $window.scroll(function() {
    nav.toggleClass("sticky-nav", $window.scrollTop() > navTop);
    document.querySelector("#logo").style.marginTop = "50px";
    document.querySelector(".menu-btn").style.marginTop = "-10px";
  });
});

//Get the current year for the copyright
$("#year").text(new Date().getFullYear());

// SMOOTH SCROLL
// add smooth scrolling
$("#nav-display a").on("click", function(e) {
  if (this.hash !== "") {
    //prevent default
    e.preventDefault();
    //store hash
    const hash = this.hash;
    //Animate smooth scroll
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      850,
      function() {
        //add hash to url after scroll
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
    // remove character
    this.text = fullText.substring(0, this.text.length - 1);
  } else {
    //  add character
    this.text = fullText.substring(0, this.text.length + 1);
  }
  //insert txt into element
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
    //set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.text === "") {
    this.isDeleting = false;
    //move to next word
    this.wordsIndex++;
    //pause before start typing
    typeSpeed = 500;
  }
  setTimeout(() => this.type(), typeSpeed);
};

//Init app
function init() {
  const textElement = document.getElementById("typewriter");
  const words = dataWords;
  const wait = textElement.getAttribute("data-wait");
  new TypeWriter(textElement, words, wait);
}

//Init on DOM load
document.addEventListener("DOMContentLoaded", init);
