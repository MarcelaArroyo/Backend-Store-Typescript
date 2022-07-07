import connection from './connection';
import IProduct from '../interfaces/products.interface';

const getAllProducts = async (): Promise<IProduct[]> => {
  const [rows] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );

  return rows as IProduct[];
};

export default { getAllProducts };