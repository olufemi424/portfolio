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

//Get form details
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDWyu_QuQIyQVd-8N1j1Yz6v6dsJA99Op4",
  authDomain: "portfolio-bb31c.firebaseapp.com",
  databaseURL: "https://portfolio-bb31c.firebaseio.com",
  projectId: "portfolio-bb31c",
  storageBucket: "portfolio-bb31c.appspot.com",
  messagingSenderId: "1031816312871"
};
firebase.initializeApp(config);

//reference messages collection
var messagesRef = firebase.database().ref("messages");

//listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

//submmit form
function submitForm(e) {
  e.preventDefault();

  //get values
  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");

  if (validateEmail(email)) {
    // save messages to firebase on click
    saveMessage(name, email, message);

    alertStatus("form #alertSuccess");
  } else {
    alertStatus("form #alertFail");
  }

  //reset input field/clear form
  document.getElementById("contactForm").reset();
}

//function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}

//validate email
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// form alert
function alertStatus(status) {
  document.querySelector(status).style.display = "block";
  //hide aleart after three seconds
  setTimeout(function() {
    document.querySelector(status).style.display = "none";
  }, 3000);
}

//tool tip

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
