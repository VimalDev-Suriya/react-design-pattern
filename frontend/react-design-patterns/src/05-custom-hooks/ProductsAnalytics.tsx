import { useFetch } from './useFetch';

const ProductsAnalytics = (props) => {
  const { data, loading, error } = useFetch('https://dummyjson.com/products');

  const avgRating = data?.reduce((acc, product) => {
    return acc + product.rating;
  }, 0);

  if (loading)
    return (
      <div>
        <p>Loading.........</p>
      </div>
    );

  if (error)
    return (
      <div>
        <p>Having some error</p>
      </div>
    );

  if (!data) {
    return null;
  }

  return (
    <div>
      <p>Avg Rating {Math.floor(avgRating / data?.length)}</p>
    </div>
  );
};

export default ProductsAnalytics;
