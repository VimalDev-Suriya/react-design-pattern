import { useEffect, useState } from 'react';
import ProductSerices from '../../services/ProductServices';
import ProductList from './ProductsList';
import ProductsAnalytics from './ProductsAnalytics';

const ProductsContainer = () => {
  const [products, setProducts] = useState({
    data: [],
    error: null,
    loading: false,
  });

  const getAllProducts = async () => {
    setProducts((prev) => ({
      ...prev,
      loading: true,
    }));

    try {
      const data = await new ProductSerices().getAllProducts();

      setProducts((prev) => ({
        ...prev,
        data: data.products,
      }));
    } catch (error) {
      setProducts((prev) => ({
        ...prev,
        error,
      }));
    } finally {
      setProducts((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  };

  useEffect(() => {
    if (!products.data.length) {
      getAllProducts();
    }
  }, []);

  if (products.loading)
    return (
      <div>
        <p>Loading.........</p>
      </div>
    );

  if (products.error)
    return (
      <div>
        <p>Having some error</p>
      </div>
    );

  if (products.data.length === 0) {
    return <p>No Products to show</p>;
  }

  return (
    <div>
      <ProductList products={products.data} />
      <ProductsAnalytics products={products.data} />
    </div>
  );
};

export default ProductsContainer;
