interface IOrder {
  id?: number | undefined;
  userId: number;
  productsIds: (number | undefined)[];
}

export default IOrder;