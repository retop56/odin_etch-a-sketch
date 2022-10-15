function toggleSquareBorders() {
  const allSquares = document.getElementsByClassName("square");
  for (let i = 0; i < allSquares.length; i++) {
    allSquares[i].classList.toggle("add-border");
  }
}

function askNumOfSquares() {
  while (true) {
    let newNumOfSquares = prompt(
      "How many squares would you like? (min 1, max 100)",
      "1"
    );
    if (newNumOfSquares === null) {
      return;
    }
    newNumOfSquares = parseInt(newNumOfSquares, 10);
    if (isNaN(newNumOfSquares)) {
      alert("Please enter a number!");
    } else if (newNumOfSquares > 100 || newNumOfSquares < 1) {
      alert("Must be number between 1 and 100!");
    } else {
      const hasSquareBorder = checkSquareBorder();
      clearOutSquares();
      generateSquares(newNumOfSquares, hasSquareBorder);
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

function checkSquareBorder() {
  const squareChildren = squareContainer.childNodes;
  return squareChildren[0].classList.contains("add-border");
}

function generateSquares(num, addSquareBorder) {
  for (let i = 0; i < num ** 2; i++) {
    let square = document.createElement("div");
    square.classList.add("square", `square-num-${i + 1}`);
    square.style.width = `${600 / num}px`;
    square.style.height = `${600 / num}px`;
    squareContainer.append(square);
  }
  if (addSquareBorder) {
    toggleSquareBorders();
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

function clearHoverEffect() {
  const squareChildren = squareContainer.childNodes;
  for (let i = 0; i < squareChildren.length; i++) {
    child = squareChildren[i];
    child.style.backgroundColor = "transparent";
  }
}

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
document.body.append(buttonContainer);

const changeNumOfSquaresButton = document.createElement("button");
changeNumOfSquaresButton.textContent = "Change Number Of Squares";
changeNumOfSquaresButton.setAttribute("onclick", "askNumOfSquares()");
buttonContainer.append(changeNumOfSquaresButton);

const toggleSquareBordersButton = document.createElement("button");
toggleSquareBordersButton.textContent = "Toggle Square Borders";
toggleSquareBordersButton.setAttribute("onclick", "toggleSquareBorders()");
buttonContainer.append(toggleSquareBordersButton);

const clearSquareBackgroundButton = document.createElement("button");
clearSquareBackgroundButton.textContent = "Clear Squares";
clearSquareBackgroundButton.setAttribute("onclick", "clearHoverEffect()");
buttonContainer.append(clearSquareBackgroundButton);

const eas_Container = document.createElement("div");
eas_Container.classList.add("eas-Container");
document.body.append(eas_Container);

const titleHeading = document.createElement("h1");
titleHeading.classList.add("title");
titleHeading.textContent = "16x16 Etch-A-Sketch";
eas_Container.append(titleHeading);

const wrapper = document.createElement("div");
wrapper.classList.add("sc-wrapper");
eas_Container.append(wrapper);

const squareContainer = document.createElement("div");
squareContainer.classList.add("square-container");
wrapper.append(squareContainer);

const rest_wrapper = document.createElement("div");
rest_wrapper.classList.add("rest-wrapper");
rest_wrapper.append(eas_Container);
rest_wrapper.append(wrapper);
document.body.append(rest_wrapper);

generateSquares(16);
addHoverEffect();
