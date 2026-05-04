const ProductsAnalytics = (props) => {
  const { products } = props;

  const avgRating = products.reduce((acc, product) => {
    return acc + product.rating;
  }, 0);

  return (
    <div>
      <p>Avg Rating {Math.floor(avgRating / products.length)}</p>
    </div>
  );
};

export default ProductsAnalytics;
