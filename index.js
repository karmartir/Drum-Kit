// Detecting Button Press
const numberOfDrumButtons = document.querySelectorAll(".drum");

for (let i = 0; i <= numberOfDrumButtons.length; i++) {
  numberOfDrumButtons[i]?.addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting Keyboard Press

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log("Try to use another button, play with rules, please!");
  }
}

function buttonAnimation(currentKey) {
  if (
    currentKey === "w" ||
    currentKey === "a" ||
    currentKey === "s" ||
    currentKey === "d" ||
    currentKey === "j" ||
    currentKey === "k" ||
    currentKey === "l"
  ) {
    const activeButton = document.querySelector(`.${currentKey}`);

    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  } else {
    console.log('use specific button only please')
  }
}
