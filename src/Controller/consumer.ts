import { ISession, performLogin } from "../services/auth";
import {
  addCustomerAccount,
  addCustomerAccountArgs,
  ICustomer,
} from "../services/customer";
import {
  addOrder,
  getOrdersByCustomerId,
  IAddOrderArgs,
  ICustomerOrder,
} from "../services/orders";
import { getAllProducts, getProductById, IProduct } from "../services/product";
import RouteHandler from "./RouteHadlerType";

export const postLogin: RouteHandler = async (req, res, next) => {
  try {
    //get the email and password
    let email: string = req.body.email;
    let pass: string = req.body.login_password;
    let sessionData: ISession = await performLogin(email, pass);
    req.session.userData = sessionData;
    res.status(200);
    res.json({
      status: 200,
      ...sessionData,
    });
  } catch (error) {
    next(error);
  }
};

export const getLogout: RouteHandler = async (req, res, next) => {
  try {
    req.session.userData = undefined;
    res.status(200);
    res.send({
      status: 200,
      msg: "logged out successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const postAddAccoount: RouteHandler = async (req, res, next) => {
  try {
    let arg: addCustomerAccountArgs = {
      full_name: req.body.full_name,
      email: req.body.email,
      login_password: req.body.login_password,
    };
    await addCustomerAccount(arg);
    res.send({
      status: 201,
      msg: "Account created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getProducts: RouteHandler = async (req, res, next) => {
  try {
    let products: IProduct[] = await getAllProducts();
    res.status(200);
    res.json({
      ...products,
    });
  } catch (error) {
    next(error);
  }
};

export const postOrder: RouteHandler = async (req, res, next) => {
  try {
    //getting the order data
    let product = await getProductById(req.body.product_id);
    let arg: IAddOrderArgs = {
      product_id: req.body.product_id,
      customer_id: req.session.userData == undefined ? 0 : req.session.userData.customer_id,
      ordered_quantity: req.body.ordered_quantity,
      paid_subtotal: product.price * req.body.ordered_quantity,
      shipping_address: req.body.shipping_address,
    };
    await addOrder(arg);

    res.status(201);
    res.json({
      msg: "ordered successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getOrderOyCustomer: RouteHandler = async (req, res, next) => {
  try {
    let cut_id = req.session.userData == undefined ? 0 : req.session.userData.customer_id;
    console.log(cut_id);
    let orders: ICustomerOrder[] = await getOrdersByCustomerId( cut_id);
    res.status(200);
    res.json({
      ...orders
    });
  } catch (error) {
    next(error);
  }
};
