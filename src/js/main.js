// import ExternalServices from "./ExternalServices.mjs";
// import ProductList from "./ProductList.mjs";
import { Admin } from "./Admin.mjs";
import {loadHeaderFooter} from "./utils.mjs";



// const dataSource = new ExternalServices("tents");
// const element = document.querySelector(".product-list")
// const productList = new ProductList("tents",dataSource,element);
// productList.init();
// console.log(productList);
loadHeaderFooter();
const admin = new Admin();
admin.showLogin();
