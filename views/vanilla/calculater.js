
const resultScreen = document.getElementById("result");
const c = document.getElementById("cancel");
const plus = document.getElementById("+");
const minus = document.getElementById("-");
const multiply = document.getElementById("*");
const divide = document.getElementById("/");
const equal = document.getElementById("=");
const notice = document.getElementById("notice");

//Numbers
const zero = document.getElementById("num0");
const one = document.getElementById("num1");
const two = document.getElementById("num2");
const three = document.getElementById("num3");
const four = document.getElementById("num4");
const five = document.getElementById("num5");
const six = document.getElementById("num6");
const seven = document.getElementById("num7");
const eight = document.getElementById("num8");
const nine = document.getElementById("num9");

let value = 0;
let clicked = "";
let calculation = "init";

const initValue = () => {
  if (calculation === "init") {
    value = clicked;
  }
};

const handleCancel = () => {
  value = "0";
  clicked = "";
  calculation = "init";
  resultScreen.innerHTML = value;
  notice.innerHTML = "Initialized!";
};

const handlePlus = () => {
  if (calculation !== "init") {
    handleEqual();
  }
  if (value) {
    notice.innerHTML = `${value} +`;

    calculation = "+";
    clicked = "";
  }
};

const handleMinus = () => {
  if (calculation !== "init") {
    handleEqual();
  }
  if (value) {
    notice.innerHTML = `${value} -`;

    calculation = "-";
    clicked = "";
  }
};
const handleMultiPly = () => {
  if (calculation !== "init") {
    handleEqual();
  }
  if (value) {
    notice.innerHTML = `${value} *`;

    calculation = "*";
    clicked = "";
  }
};

const handleDivide = () => {
  if (calculation !== "init") {
    handleEqual();
  }
  if (value) {
    notice.innerHTML = `${value} /`;

    calculation = "/";
    clicked = "";
  }
};

const handleEqual = () => {
  if (calculation === "+") {
    value = parseFloat(value, 10) + parseFloat(clicked, 10);
    if (value) {
      resultScreen.innerText = value;
    }
  } else if (calculation === "-") {
    value = parseFloat(value, 10) - parseFloat(clicked, 10);
    if (value) {
      resultScreen.innerText = value;
    }
  } else if (calculation === "*") {
    value = parseFloat(value, 10) * parseFloat(clicked, 10);
    if (value) {
      resultScreen.innerText = value;
    }
  } else if (calculation === "/") {
    value = parseFloat(value, 10) / parseFloat(clicked, 10);
    if (value) {
      resultScreen.innerText = value;
    }
  }
  notice.innerHTML = "";
  calculation = "init";
  clicked = "";
};

const equalSound = () => {
  const equalSound = new Audio(
    "http://soundbible.com/grab.php?id=172&type=mp3"
  );
  equalSound.play();
};

const numberSound = () => {
  const numberSound = new Audio(
    "http://soundbible.com/grab.php?id=1705&type=mp3"
  );
  numberSound.play();
};

const events = () => {
  zero.addEventListener("click", function() {
    clicked += "0";
    resultScreen.innerHTML = clicked;
    initValue();
    numberSound();
  });
  one.addEventListener("click", function() {
    clicked += "1";
    resultScreen.innerHTML = clicked;
    initValue();
    numberSound();
  });
  two.addEventListener("click", function() {
    clicked += "2";
    resultScreen.innerHTML = clicked;
    initValue();
    numberSound();
  });
  three.addEventListener("click", function() {
    clicked += "3";
    resultScreen.innerHTML = clicked;
    initValue();
    numberSound();
  });
  four.addEventListener("click", function() {
    clicked += "4";
    resultScreen.innerHTML = clicked;
    initValue();
    numberSound();
  });
  five.addEventListener("click", function() {
    clicked += "5";
    resultScreen.innerHTML = clicked;
    initValue();
    numberSound();
  });
  six.addEventListener("click", function() {
    clicked += "6";
    resultScreen.innerHTML = clicked;
    initValue();
    numberSound();
  });
  seven.addEventListener("click", function() {
    clicked += "7";
    resultScreen.innerHTML = clicked;
    initValue();
    numberSound();
  });
  eight.addEventListener("click", function() {
    clicked += "8";
    resultScreen.innerHTML = clicked;
    initValue();
    numberSound();
  });
  nine.addEventListener("click", function() {
    clicked += "9";
    resultScreen.innerHTML = clicked;
    initValue();
    numberSound();
  });

  c.addEventListener("click", handleCancel);
  plus.addEventListener("click", handlePlus);
  minus.addEventListener("click", handleMinus);
  equal.addEventListener("click", handleEqual);
  multiply.addEventListener("click", handleMultiPly);
  divide.addEventListener("click", handleDivide);
  equal.addEventListener("click", equalSound);
};

function init() {
  resultScreen.innerHTML = value;
  events();
}

init();
