const titleHeading = document.createElement("h1");
titleHeading.classList.add("title");
titleHeading.textContent = "16x16 Etch-A-Sketch";
document.body.append(titleHeading);

const wrapper = document.createElement("div");
wrapper.classList.add("sc-wrapper");
document.body.append(wrapper);

const squareContainer = document.createElement("div");
squareContainer.classList.add("square-container");
wrapper.append(squareContainer);

const changeNumOfSquaresButton = document.createElement("button");
changeNumOfSquaresButton.textContent = "Change Number Of Squares";
document.body.append(changeNumOfSquaresButton);
changeNumOfSquaresButton.setAttribute("onclick", "askNumOfSquares()");

function askNumOfSquares() {
  while (true) {
    const newNumOfSquares = parseInt(
      prompt("How many squares would you like? (min 1, max 100)", "1"),
      10
    );
    if (newNumOfSquares === null) {
      return;
    }
    if (isNaN(newNumOfSquares)) {
      alert("Please enter a number!");
    } else if (newNumOfSquares > 100 || newNumOfSquares < 1) {
      alert("Must be number between 1 and 100!");
    } else {
      clearOutSquares();
      generateSquares(newNumOfSquares);
      addHoverEffect();
      editTitle(newNumOfSquares);
      break;
    }
  }
}

function editTitle(num) {
  titleHeading.textContent = `${num}x${num} Etch-A-Sketch`;
}

function clearOutSquares() {
  while (squareContainer.firstChild) {
    squareContainer.removeChild(squareContainer.firstChild);
  }
}

function generateSquares(num) {
  for (let i = 0; i < num ** 2; i++) {
    let square = document.createElement("div");
    square.classList.add("square", `square-num-${i + 1}`);
    square.style.width = `${600 / num}px`;
    square.style.height = `${600 / num}px`;
    squareContainer.append(square);
  }
}

function addHoverEffect() {
  const squareChildren = squareContainer.childNodes;
  for (let i = 0; i < squareChildren.length; i++) {
    child = squareChildren[i];
    child.addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "red";
    });
  }
}

generateSquares(16);
addHoverEffect();
