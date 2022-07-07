import productsModel from '../models/products.model';
import IProduct from '../interfaces/products.interface';

const getProducts = (): Promise<IProduct[]> => productsModel.getAllProducts();

const createProduct = async (product: IProduct): Promise<IProduct> => {
  const { insertId } = await productsModel.createProduct(product);

  return { id: insertId, ...product };
};

export default { getProducts, createProduct };