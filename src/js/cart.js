import { getLocalStorage } from "./utils.mjs";
import {loadHeaderFooter} from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  let totalValue = 0;
  cartItems.map((item) => totalValue += item.FinalPrice);
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
  document.querySelector(".cart-total").innerHTML = `Total: $${totalValue}`;

  // const cartItems = getLocalStorage("so-cart");
  // const htmlItems = cartItemTemplate(cartItems);
  // document.querySelector(".product-list").innerHTML = htmlItems;


}

function cartItemTemplate(item) {
  if(item != null){
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimaryLarge}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;
const total = document.querySelector('.cart-total').innerHTML += item.FinalPrice //Need to correct when there are more items in the cart make a sum
return newItem;
  }
  return ""
  
}

renderCartContents();
loadHeaderFooter()
