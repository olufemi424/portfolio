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
