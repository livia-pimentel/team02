import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  if (cartItems != null){
    let hide = document.querySelector('.hide').style.display = 'block';
  }
  const htmlItems = cartItemTemplate(cartItems);
  document.querySelector(".product-list").innerHTML = htmlItems;
}

function cartItemTemplate(item) {
  if(item != null){
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
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
