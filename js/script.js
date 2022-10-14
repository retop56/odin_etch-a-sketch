const titleHeading = document.createElement("h1");
titleHeading.classList.add("title");
titleHeading.textContent = "Etch-A-Sketch";
document.body.append(titleHeading);

const wrapper = document.createElement("div");
wrapper.classList.add("sc-wrapper");
document.body.append(wrapper);

const squareContainer = document.createElement("div");
squareContainer.classList.add("square-container");
wrapper.append(squareContainer);

let numOfSquares = 16;

function generateSquares(num) {
  for (let i = 0; i < num ** 2; i++) {
    let square = document.createElement("div");
    square.classList.add("square", `square-num-${i + 1}`);
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

generateSquares(numOfSquares);
addHoverEffect();
