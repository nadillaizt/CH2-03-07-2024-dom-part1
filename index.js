// generate random number antara 1-6 for player 1
let randomNum1 = Math.floor(Math.random() * 6) + 1;

// mengambil image based on hasil generate randomNum
var randomDiceImg = "dice" + randomNum1 + ".png";

// set random image source based on random number
const randomImgSource = `images/${randomDiceImg}`;

let img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSource);

// generate random number antara 1-6 for player 2
let randomNum2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImg2 = "dice" + randomNum2 + ".png";

let randomImgSource2 = `images/${randomDiceImg2}`;

let img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImgSource2);

if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "Player 1 Win!";
} else if (randomNum2 > randomNum1) {
  document.querySelector("h1").innerHTML = "Player 2 Win!";
} else document.querySelector("h1").innerHTML = "Draw!";
