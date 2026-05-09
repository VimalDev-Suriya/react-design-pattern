import { useEffect, useMemo, useState } from 'react';
import ProductService from '../services/ProductService';
import ProductListPresenter from './ProductListPresenter';

const ProductContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState();
  // * always make sure to maintain the input va=lue as '', than null or undefined
  // As the react will consider this as the sfift from uncontrolled component to controlled one
  const [filteredText, setFilterText] = useState('');

  const fetchProducts = async () => {
    setIsLoading(true);

    try {
      const data = await new ProductService().getAllProducts();

      setProducts(data);
    } catch (error) {
      console.log(error);
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(
    () =>
      products.filter((product) =>
        product.name.toLowerCase().includes(filteredText)
      ),
    [filteredText, products]
  );

  const handleFilterText = (e) => {
    setFilterText(e.target.value.toLowerCase());
  };

  return (
    <>
      <input
        type="text"
        value={filteredText}
        placeholder="Filter the products here"
        onChange={(e) => handleFilterText(e)}
      />
      <ProductListPresenter
        products={filteredProducts}
        loading={isLoading}
        error={isError}
      />
    </>
  );
};

export default ProductContainer;
