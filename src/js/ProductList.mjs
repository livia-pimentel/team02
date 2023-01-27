function productCardTemplate(product){
    return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
    <img
      src="${product.Image}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.Name}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p>
    <p class="product-card__price">Discount of $${product.ListPrice - product.FinalPrice}</p></a>
  </li>`
}

export default class ProductList{
    constructor(category, dataSource, listElement){
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;

    }
    async init(){
        const list = await this.dataSource.getData();
        this.renderList(list);
    }
    renderList(list) {
        const htmlStrings =  list.map(productCardTemplate);
        this.listElement.insertAdjacentHTML('afterbegin', htmlStrings.join(''));
    }
}