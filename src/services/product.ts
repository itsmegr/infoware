import { execQuery } from "../DB/execute_query";
import { addOwnerQuery } from "../DB/owner_sql";
import { addProductQuery, getAllProductsQuery, getProductByIdQuery } from "../DB/product_sql";

export interface addProductArgs {
  owner_id: number;
  product_name: string;
  description: string;
  price: number;
  quantity: number;
}
export interface IProduct extends addProductArgs {
  product_id: number;
  created_at: Date;
}

function addProduct(arg: addProductArgs): Promise<boolean> {
  return new Promise<boolean>(async (resolve, reject) => {
    //calling the db function
    try {
      let res = await execQuery(
        addProductQuery,
        arg.owner_id,
        arg.product_name,
        arg.description,
        arg.price,
        arg.quantity
      );
      console.log(res);
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}

function getAllProducts(): Promise<IProduct[]> {
  return new Promise<IProduct[]>(async (resolve, reject) => {
    //calling the db function
    try {
      let res = await execQuery(getAllProductsQuery);
      resolve(res);
    } catch (err) {
      reject(err);
    }
  });
}

function getProductById(product_id: number): Promise<IProduct> {
  return new Promise<IProduct>(async (resolve, reject) => {
    //calling the db function
    try {
      let res = await execQuery(getProductByIdQuery, product_id);
      resolve(res[0]);
    } catch (err) {
      reject(err);
    }
  });
}

export { addProduct, getAllProducts, getProductById };
