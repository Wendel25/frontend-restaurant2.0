import APIMethodGet from 'src/services/api/get/api';
import { GetDisabledProducts } from 'src/application/use-case/products/disabled-products.use-case';

const returnListDisabledProduct = async () => {
  try {
    const routeAPI = new GetDisabledProducts();
    const listAllProducts = await APIMethodGet(routeAPI.route);

    return listAllProducts;
  } catch (error) {
    console.error('Erro ao buscar a lista de produtos:', error);
    throw error;
  }
};

export default returnListDisabledProduct;
