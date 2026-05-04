import { useFetch } from './useFetch';

const ProductList = () => {
  const { data, loading, error } = useFetch('https://dummyjson.com/products');

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

  if (!data || data?.length === 0) {
    return <p>No Products to show</p>;
  }

  return (
    <ul>
      {data?.map((product) => {
        return <li>{product.title}</li>;
      })}
    </ul>
  );
};

export default ProductList;
