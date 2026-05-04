// * Here I am using smaller Case to represent the Component. As we are not going to render this component, instead it will return a component

import { useEffect, useState } from 'react';
import ProductSerices from '../../services/ProductServices';

const withDataFetching = (WrappedComponent: React.FC) => {
  return (props) => {
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
    return <WrappedComponent {...props} products={products.data} />;
  };
};

export default withDataFetching;
