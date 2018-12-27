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
