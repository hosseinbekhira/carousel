let rightArrow = document.querySelector(".right-arrow");
let leftArrow = document.querySelector(".left-arrow");
let product = document.getElementsByClassName("product");
let product_page = Math.ceil(product.length / 1);
let l = 0;

let movePer = 100;
let maxMove = movePer * (product.length - 1);

let right_mover = () => {
  l = l + movePer;
  if (product == 1) {
    l = 0;
  }
  for (const i of product) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.left = "-" + l + "%";
  }
};

let left_mover = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of product) {
    if (product_page > 1) {
      i.style.left = "-" + l + "%";
    }
  }
};

rightArrow.onclick = () => {
  console.log("Right Clicked");
  right_mover();
};

leftArrow.onclick = () => {
  console.log("Left Clicked");
  left_mover();
};
