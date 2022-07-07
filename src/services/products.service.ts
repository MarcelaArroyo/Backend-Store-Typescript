import productsModel from '../models/products.model';
import IProduct from '../interfaces/products.interface';

const getProducts = (): Promise<IProduct[]> => productsModel.getAllProducts();

export default { getProducts };