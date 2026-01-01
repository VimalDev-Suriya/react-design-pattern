import axios from 'axios';
import { MOCK_API_BASE_PATH } from '../env';

export default class CartService {
  constructor() {}

  async getAllCart() {
    const { data } = await axios.get(`${MOCK_API_BASE_PATH}/cart`);

    return data;
  }

  async addToCart(product) {
    const { data } = await axios.post(`${MOCK_API_BASE_PATH}/cart`, product);

    return data;
  }
}
