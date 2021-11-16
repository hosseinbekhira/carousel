// Start Settings Search Value on the Tab Search:

let elSubmit = document.getElementById("sectorInput");
let valueSubmit = "Search (19,293 Businesses)";
// End Settings Search Value on the Tab Search:

// ===================================================== //
// ===================================================== //

// Start Clear Input Placeholder On Focus
let myInput1 = document.getElementById("sectorInput1"),
  myInput2 = document.getElementById("locationInput1"),
  valueAttr1 = myInput1.getAttribute("placeholder"),
  valueAttr2 = myInput2.getAttribute("placeholder");

let myInput3 = document.getElementById("sectorInput2"),
  myInput4 = document.getElementById("locationInput2"),
  valueAttr3 = myInput1.getAttribute("placeholder"),
  valueAttr4 = myInput2.getAttribute("placeholder");

const clearPlaceholder = (myInput, valueAttr) => {
  myInput.onfocus = () => {
    if (myInput.placeholder === valueAttr) {
      myInput.placeholder = "";
    }
  };
  myInput.onblur = () => {
    if (myInput.placeholder === "") {
      myInput.placeholder = valueAttr;
    }
  };
};
// Function Input 01:
clearPlaceholder(myInput1, valueAttr1);
// Function Input 02:
clearPlaceholder(myInput2, valueAttr2);
// Function Input 03:
clearPlaceholder(myInput3, valueAttr3);
// Function Input 04:
clearPlaceholder(myInput4, valueAttr4);
// End Clear Input Placeholder On Focus

// ===================================================== //
// ===================================================== //

// Start Tab Search Toggle
let myTabs = document.querySelectorAll(".tab-search .tabs li");
let ArrayTabs = Array.from(myTabs);
let allContent = document.querySelectorAll(".tab-search .content"),
  arrayAllContents = Array.from(allContent);

ArrayTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    ArrayTabs.forEach((el) => {
      el.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    arrayAllContents.forEach((form) => {
      form.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.content).style.display =
      "block";
  });
});
// End Tab Search Toggle

// ===================================================== //
// ===================================================== //
