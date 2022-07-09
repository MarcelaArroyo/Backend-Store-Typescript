import ordersModel from '../models/orders.model';
import IOrder from '../interfaces/orders.interface';
import productsModel from '../models/products.model';

const getOrders = async (): Promise<IOrder[]> => {
  const orders = await ordersModel.getAllOrders();
  const products = await productsModel.getAllProducts();

  const result = orders.map((order) => {
    const productIds = products.filter((product) => product.orderId === order.id);
    
    return {
      id: order.id,
      userId: order.userId,
      productsIds: productIds.map((productId) => productId.id),
    };
  });

  return result;
};

export default { getOrders };