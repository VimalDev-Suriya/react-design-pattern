import axios from 'axios';
import { MOCK_API_BASE_PATH } from '../env';

export default class ProductService {
  constructor() {}

  async getAllProducts() {
    const { data } = await axios.get(`${MOCK_API_BASE_PATH}/products`);
    return data;
  }
}
