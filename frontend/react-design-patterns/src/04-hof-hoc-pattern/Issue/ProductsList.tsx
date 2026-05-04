const ProductList = (props) => {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => {
        return <li>{product.title}</li>;
      })}
    </ul>
  );
};

export default ProductList;
