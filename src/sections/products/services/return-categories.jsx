import APIMethodGet from 'src/services/api/get/api';
import { GetCategory } from 'src/application/use-case/products/category-products.use-case';

const returnListCategory = async () => {
  try {
    const routeAPI = new GetCategory();

    const categoryList = await APIMethodGet(routeAPI.route);

    return categoryList;
  } catch (error) {
    console.error('Erro ao buscar a lista de categorias:', error);
    throw error;
  }
};

export default returnListCategory;
