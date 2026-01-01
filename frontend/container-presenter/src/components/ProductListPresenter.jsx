import Loader from './Loader';
import Error from './Error';

const ProductListPresenter = (props) => {
  const { products, loading, error } = props;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  if (!products.length) {
    return (
      <div>
        <p>No Products</p>
      </div>
    );
  }

  return (
    <div className="product-container">
      {products.map(({ id, name, imageUrl, price }) => {
        return (
          <div key={`${id}-${name}`} className="product">
            <img src={imageUrl} width="100%" />
            <p>{name}</p>
            <div className="product-desc">
              <span>{price}</span>
              <button>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListPresenter;
