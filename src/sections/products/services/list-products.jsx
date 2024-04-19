import returnAllProducts from './return-products'; // return all products active
import returnListActiveProduct from './return-active-products'; // return active products
import returnListDisabledProduct from './return-disabled-products'; // return disabled products
import returnListProductByCategory from './products-by-category'; // return products by category

// ----------------------------------------------------------------------

const returnProducts = async ({ category }) => {
  let returnList = '';

  if (category === 'Ativados') {
    returnList = await returnListActiveProduct();
  } else if (category === 'Desativados') {
    returnList = await returnListDisabledProduct();
  } else if (category === 'Todos') {
    returnList = await returnAllProducts();
  } else {
    const apiResult = await returnListProductByCategory(category);
    returnList = apiResult;
  }

  console.log(returnList);
};

export default returnProducts;
