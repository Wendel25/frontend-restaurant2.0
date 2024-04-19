import APIMethodGet from 'src/services/api/get/api';
import { GetListAllProducts } from 'src/application/use-case/products/products-all-list.use-case';

const returnAllProducts = async () => {
  try {
    const routeAPI = new GetListAllProducts();

    const productList = await APIMethodGet(routeAPI.route);

    return productList;
  } catch (error) {
    console.error('Erro ao buscar a lista de produtos:', error);
    throw error;
  }
};

export default returnAllProducts;
