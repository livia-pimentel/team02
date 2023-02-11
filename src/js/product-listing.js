import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import {loadHeaderFooter} from "./utils.mjs";

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list")
const productList = new ProductList("tents",dataSource,element);
productList.init()
console.log(productList)
loadHeaderFooter()
