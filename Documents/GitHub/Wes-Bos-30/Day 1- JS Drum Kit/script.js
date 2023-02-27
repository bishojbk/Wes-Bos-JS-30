const A = document.querySelector(".A");
const S = document.querySelector(".S");
const D = document.querySelector(".D");
const F = document.querySelector(".F");
const G = document.querySelector(".G");
const H = document.querySelector(".H");
const J = document.querySelector(".J");
const K = document.querySelector(".K");
const L = document.querySelector(".L");
const body = document.querySelector("body");

const audio1 = new Audio("./sounds/clap.wav");
const audio2 = new Audio("./sounds/hihat.wav");
const audio3 = new Audio("./sounds/kick.wav");
const audio4 = new Audio("./sounds/openhat.wav");
const audio5 = new Audio("./sounds/boom.wav");
const audio6 = new Audio("./sounds/ride.wav");
const audio7 = new Audio("./sounds/snare.wav");
const audio8 = new Audio("./sounds/tom.wav");
const audio9 = new Audio("./sounds/tink.wav");

body.addEventListener("keydown", (e) => {
  let key = e.keyCode;
  if (key === 65) {
    if (audio1.paused) {
      audio1.play();
      A.classList.add("playing");
    }
  } else if (key === 83) {
    if (audio2.paused) {
      audio2.play();
      S.classList.add("playing");
    }
  } else if (key === 68) {
    if (audio3.paused) {
      audio3.play();
      D.classList.add("playing");
    }
  } else if (key === 70) {
    if (audio4.paused) {
      audio4.play();
      F.classList.add("playing");
    }
  } else if (key === 71) {
    if (audio5.paused) {
      audio5.play();
      G.classList.add("playing");
    }
  } else if (key === 72) {
    if (audio6.paused) {
      audio6.play();
      H.classList.add("playing");
    }
  } else if (key === 74) {
    if (audio7.paused) {
      audio7.play();
      J.classList.add("playing");
    }
  } else if (key === 75) {
    if (audio8.paused) {
      audio8.play();
      K.classList.add("playing");
    }
  } else if (key === 76) {
    if (audio9.paused) {
      audio9.play();
      L.classList.add("playing");
    }
  }
});

setInterval(A1, 200);
function A1() {
  A.classList.remove("playing");
}
setInterval(A2, 200);
function A2() {
  S.classList.remove("playing");
}
setInterval(A3, 200);
function A3() {
  D.classList.remove("playing");
}
setInterval(A4, 200);
function A4() {
  F.classList.remove("playing");
}

setInterval(A5, 200);
function A5() {
  G.classList.remove("playing");
}
setInterval(A6, 200);
function A6() {
  H.classList.remove("playing");
}
setInterval(A7, 200);
function A7() {
  J.classList.remove("playing");
}
setInterval(A8, 200);
function A8() {
  K.classList.remove("playing");
}
setInterval(A9, 200);
function A9() {
  L.classList.remove("playing");
}
