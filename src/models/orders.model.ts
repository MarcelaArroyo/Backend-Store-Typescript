import connection from './connection';
import IOrder from '../interfaces/orders.interface';

const getAllOrders = async (): Promise<IOrder[]> => {
  const [rows] = await connection.execute('SELECT * FROM Trybesmith.Orders');
  return rows as IOrder[];
};

export default { getAllOrders };