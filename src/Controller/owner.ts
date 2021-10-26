import { getOwnerAccountByEmailQuery } from "../DB/owner_sql";
import { getOrdersByOwnerId } from "../services/orders";
import {
  addOwnerAccount,
  addOwnerAccountArgs,
  getOwnerAccountByEmail,
  IOwner,
} from "../services/owner";
import { addProduct, addProductArgs } from "../services/product";
import RouteHandler from "./RouteHadlerType";

//adding owner account
export const postAddAccoount: RouteHandler = async (req, res, next) => {
  try {
    //getting the data
    let arg: addOwnerAccountArgs = {
      full_name: req.body.full_name,
      email: req.body.email,
    };
    await addOwnerAccount(arg);
    let owner: IOwner = await getOwnerAccountByEmail(req.body.email);
    res.status(201);
    res.json({
      msg: "Owner's Account created successfully",
      ...owner,
    });
  } catch (err) {
    next(err);
  }
};

//handling add product request by owner
export const postAddProduct: RouteHandler = async (req, res, next) => {
  try {
    //   getting the data from request
    let arg: addProductArgs = {
      owner_id: req.body.owner_id,
      product_name: req.body.product_name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
    };
    await addProduct(arg);
    res.status(201);
    res.json({
      msg: "Product created successfully",
    });
  } catch (err) {
    next(err);
  }
};

//getting all the orders of owner,who created the products
export const getorders: RouteHandler = async (req, res, next) => {
  try {
      let owner_id : number = req.body.owner_id;
      let orders =  await getOrdersByOwnerId(owner_id);
      res.status(200);
      res.json({
          ...orders
      })
  } catch (err) {
    next(err);
  }
};