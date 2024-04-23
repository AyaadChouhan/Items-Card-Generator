function selectElement(selector) {
  return document.getElementById(selector);
}
//html Element.....
const fragment = document.createDocumentFragment();
const mainContainter = selectElement("main-containter");
const prName = selectElement("pr-name");
const prQuantity = selectElement("pr-quantity");
const prPrice = selectElement("pr-price");
const subBtn = selectElement("submit-btn");
const cards = selectElement("cards");
const editCard = selectElement("editCard-cont");

function createCardElement(element) {
  return document.createElement(element);
}

function createCard() {
  // create Element when user click on submit btn...
  const card = createCardElement("div");
  const editBtn = createCardElement("button");
  const deletBtn = createCardElement("button");
  let productName = createCardElement("div");
  let productPrice = createCardElement("div");
  let productQuantity = createCardElement("div");

  productName.innerText = `${prName.value}`;
  productPrice.innerText = `${prPrice.value}`;
  productQuantity.innerText = `${prQuantity.value}`;

  editBtn.innerText = "Edit";
  deletBtn.innerText = "Delet";
  editBtn.classList.add("edit-btn");
  deletBtn.classList.add("delet-btn");
  productName.classList.add("product-Name");
  productPrice.classList.add("product-Price");
  productQuantity.classList.add("product-Quantity");
  card.classList.add("singleCard");
  card.append(productName, productQuantity, productPrice, deletBtn, editBtn);
  cards.append(card);
}
function editFunc() {
  const editCard = createCardElement("div");
  let editPrName = createCardElement("input");
  let editPrPrice = createCardElement("input");
  let editPrQuantity = createCardElement("input");
  const submitBtn = createCardElement("button");

  submitBtn.innerText = "EditData";
  submitBtn.classList.add("submitButton");
  editPrName.classList.add("editPrName");
  editPrPrice.classList.add("editPrPrice");
  editPrQuantity.classList.add("editPrQuantity");
  // editPrName.value = getParentElement.closest(".product-Name").innerText;
  // editPrPrice.value = getParentElement.closest(".product-Price").innerText;
  // editPrQuantity.valu = getParentElement.closest(".product-Quantity").innerText;
  // console.log(
  //   getParentElement.querySelector(".product-Name"),
  //   getParentElement.querySelector(".product-Price"),
  //   getParentElement.querySelector(".product-Quantity")
  // );

  editCard.append(editPrName, editPrPrice, editPrQuantity, submitBtn);
  mainContainter.append(editCard);
}
let currentCard = null;
mainContainter.addEventListener("click", (event) => {
  if (event.target.classList[0] === "submit-btn") {
    createCard();
  } else if (event.target.classList[0] === "delet-btn") {
    event.target.parentElement.remove();
  } else if (event.target.classList[0] === "edit-btn") {
    editFunc();
    currentCard = event.target;
    console.log(currentCard);
  } else if (event.target.classList[0] === "submitButton") {
    const inpData = event.target.parentElement.parentElement;
   inpData.querySelector(".product-Name").innerText = document.querySelector(".editPrName").value;
   inpData.querySelector(".product-Price").innerText = document.querySelector(".editPrPrice").value;
   inpData.querySelector(".product-Quantity").innerText = document.querySelector(".editPrQuantity").value;
    event.target.parentElement.remove();
  }
});

fragment.append(mainContainter);
document.body.append(fragment);
