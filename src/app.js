/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["ate", "pissed", "crushed", "broke"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function generateExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];
  let excuse =
    "Sorry, I couldn't do it because " +
    randomWho +
    " " +
    randomWhat +
    " " +
    "my work " +
    randomWhen +
    ".";
  document.getElementById("excuse").innerHTML = excuse;
}

document.addEventListener("DOMContentLoaded", function() {
  const generateBtn = document.getElementById("generate-btn");
  generateBtn.addEventListener("click", generateExcuse);
});
