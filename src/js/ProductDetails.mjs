export default class ProductDetails {
    constructor(productId, dataSource) {
      this.productId = productId;
      this.product = {};
      this.dataSource = dataSource;
    }
    init() {

        
    }
    addtoCart() {
        setLocalStorage("so-cart", this.productId);
        
    }
    renderProductDetails() {
            
        
      }
  }