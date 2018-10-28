/////// TOGGLE FUNCTION /////////
/////// TOGGLE FUNCTION /////////
$(document).ready(function() {
  $("#mobile_nav").click(function() {
    if ($("#primary_nav").css("left") < "0px") {
      $("#primary_nav").animate({ left: "0px" }, 300);
      $("#main-display").animate({ left: "170px" }, 300);
      $("body").css("overflow-x", "hidden");
      $("#primary_nav").css("overflow-y", "hidden");
    } else {
      $("#primary_nav").animate({ left: "-170px" }, 300);
      $("#main-display").animate({ left: "0px" }, 300);
      $("body").css("overflow-x", "hidden");
    }
  });
}); //end

//Get the current year for the copyright
$("#year").text(new Date().getFullYear());

// SMOOTH SCROLL
//init Scroll spy
$(".body").scrollspy({ target: "#scroll-top" });
$("#scroll-top a").on("click", function(e) {
  if (this.hash !== "") {
    //prevent default
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

var toggleStatus = 1;
function toggleMenu() {
  if (toggleStatus === 1) {
    document.getElementById;
  }
}

//SIDE NAV TOGGLE SPIN EFFECT
// Select the DOM Item
const menuBtn = document.querySelector(".menu-btn");
// /set initial state of menu
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    //set menu state back to true
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    //set menu state back to false
    showMenu = false;
  }
}
