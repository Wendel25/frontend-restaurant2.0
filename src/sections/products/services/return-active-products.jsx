import APIMethodGet from 'src/services/api/get/api';
import { GetActiveProducts } from 'src/application/use-case/products/active-products.use-case';

const returnListActiveProduct = async () => {
  try {
    const routeAPI = new GetActiveProducts();
    const listAllProducts = await APIMethodGet(routeAPI.route);

    return listAllProducts;
  } catch (error) {
    console.error('Erro ao buscar a lista de produtos:', error);
    throw error;
  }
};

export default returnListActiveProduct;
