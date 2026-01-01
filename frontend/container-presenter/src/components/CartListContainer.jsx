import { useEffect, useState } from 'react';
import CartService from '../services/CartService';

const CartListContainer = () => {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchCart = async () => {
    setIsLoading(true);

    try {
      const data = await new CartService().getAllCart();

      setCart(data);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return <></>;
};

export default CartListContainer;
