import APIMethodGet from 'src/services/api/get/api';
import { GetProductsByCategory } from 'src/application/use-case/products/products-by-category.use-case';

const returnListProductByCategory = async (category) => {
  try {
    const routeAPI = new GetProductsByCategory(category);
    const listProductByCategory = await APIMethodGet(routeAPI.route, { category_id: category });

    return listProductByCategory;
  } catch (error) {
    console.error('Erro ao buscar a lista de produtos:', error);
    throw error;
  }
};

export default returnListProductByCategory;
