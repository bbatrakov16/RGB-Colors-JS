// RGB Colors

// Clicking on the btn "Prewiev"
// Background
document.getElementById("main-btn").addEventListener("click", backgrChange);

function backgrChange() {
  let r = +document.getElementById("red").value;
  let g = +document.getElementById("green").value;
  let b = +document.getElementById("blue").value;

  document.getElementById("box").style.background = `rgb(${r}, ${g}, ${b})`;
  document.getElementById("box").style.width = "400px";
  document.getElementById("box").style.height = "200px";
  document.getElementById("box").style.border = "3px solid gray";
}

// String
document.getElementById("main-btn").addEventListener("click", stringChange);

function stringChange() {
  let r = +document.getElementById("red").value;
  let g = +document.getElementById("green").value;
  let b = +document.getElementById("blue").value;

  document.getElementById("rgb").innerHTML = `rgb (${r}, ${g}, ${b})`;
}

// Clicking on the btn "black"
// Background
document.getElementById("btn-bl").addEventListener("click", backgrBlack);

function backgrBlack() {
  document.getElementById("box").style.background = "black";
}

// String
document.getElementById("btn-bl").addEventListener("click", stringChangeBl);

function stringChangeBl() {
  document.getElementById("rgb").innerHTML = `rgb (0, 0, 0)`;
}

// Clicking on the btn "white"
// Background
document.getElementById("btn-wh").addEventListener("click", backgrWhite);

function backgrWhite() {
  document.getElementById("box").style.background = "white";
}

// String
document.getElementById("btn-wh").addEventListener("click", stringChangeWh);

function stringChangeWh() {
  document.getElementById("rgb").innerHTML = `rgb (255, 255, 255)`;
}
