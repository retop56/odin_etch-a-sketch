const squareContainer = document.createElement("div");
squareContainer.classList.add("square-container");
document.body.append(squareContainer);

for (let i = 0; i < 256; i++) {
  let square = document.createElement("div");
  square.classList.add("square", `square-num-${i + 1}`);
  squareContainer.append(square);
}

// const squareChildren = squareContainer.childNodes;
// for (let i = 0; i < squareChildren.length; i++) {
//   child = squareChildren[i];
//   child.addEventListener("mouseenter", (event) => {
//     event.target.style.backgroundColor = "red";
//   });
// }
