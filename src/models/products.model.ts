import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IProduct from '../interfaces/products.interface';

const getAllProducts = async (): Promise<IProduct[]> => {
  const [rows] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );

  return rows as IProduct[];
};

const createProduct = async (product: IProduct): Promise<ResultSetHeader> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [product.name, product.amount],
  );

  return result;
};

export default { getAllProducts, createProduct };