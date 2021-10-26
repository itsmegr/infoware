import { execQuery } from "../DB/execute_query";
import { getOrdersByOwnerIdQuery, getOrdersByCustomerIdQuery, addOrderQuery } from "../DB/order_sql"

export interface ICustomerOrder {
  order_id: number;
  product_id: number;
  product_name: string;
  product_price: number;
  ordered_quantity: number;
  paid_subtotal: number;
  ordered_at: Date;
  shipping_address: string;
}
export interface IOwnerOrder extends ICustomerOrder {
  customer_id: number;
}

export function getOrdersByOwnerId(owner_id: number): Promise<IOwnerOrder[]> {
  return new Promise<IOwnerOrder[]>(async (resolve, reject) => {
    try {
      let res: IOwnerOrder[] = await execQuery(getOrdersByOwnerIdQuery, owner_id);
      resolve(res);
    } catch (err) {
      reject(err);
    }
  });
}

export function getOrdersByCustomerId(owner_id: number): Promise<ICustomerOrder[]> {
  return new Promise<ICustomerOrder[]>(async (resolve, reject) => {
    try {
      let res: ICustomerOrder[] = await execQuery(getOrdersByCustomerIdQuery, owner_id);
      resolve(res);
    } catch (err) {
      reject(err);
    }
  });
}
export interface IAddOrderArgs {
  product_id: number;
  customer_id: number;
  ordered_quantity: number;
  paid_subtotal: number;
  shipping_address : string;
}

export function addOrder(arg: IAddOrderArgs): Promise<boolean> {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      let res = await execQuery(
        addOrderQuery,
        arg.product_id,
        arg.customer_id,
        arg.ordered_quantity,
        arg.paid_subtotal,
        arg.shipping_address
      );
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}
