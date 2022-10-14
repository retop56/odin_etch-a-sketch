const squareContainer = document.createElement("div");
squareContainer.classList.add("square-container");
document.body.append(squareContainer);

for (let i = 0; i < 256; i++) {
  let square = document.createElement("div");
  square.classList.add(`square-num-${i + 1}`);
  squareContainer.append(square);
}
