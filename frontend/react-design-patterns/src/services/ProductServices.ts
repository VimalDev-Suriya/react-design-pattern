class ProductSerices {
  constructor() {}

  async getAllProducts() {
    const data = await fetch(`https://dummyjson.com/products`);

    return data.json();
  }
}

export default ProductSerices;
