// Button
let btn = document.querySelectorAll(".drum button");

// Audio file
let audio = document.querySelectorAll(".drum button audio");

// for button press
for (let i = 0; i < audio.length; i++) {
  btn[i].addEventListener("click", function () {
    audio[i].play();
  });
}

// for key press
document.addEventListener("keydown", function (e) {
  if (e.key === "a") {
    audio[0].play();
  } else if (e.key === "s") {
    audio[1].play();
  } else if (e.key === "d") {
    audio[2].play();
  } else if (e.key === "f") {
    audio[3].play();
  } else if (e.key === "l") {
    audio[4].play();
  } else if (e.key === "k") {
    audio[5].play();
  } else if (e.key === "j") {
    audio[6].play();
  }
});
