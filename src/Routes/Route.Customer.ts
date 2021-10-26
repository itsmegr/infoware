import express from "express";
import { checkAllowance } from "../Controller/CheckAllowance";
import { getLogout, getOrderOyCustomer, getProducts, postAddAccoount, postLogin, postOrder } from "../Controller/consumer";
import { getorders } from "../Controller/owner";
const router = express.Router();

router.post("/login", postLogin)

//check allowance make the route protected, only authorized users can access them
router.get("/logout", checkAllowance, getLogout)
router.post("/addAccount", checkAllowance,postAddAccoount);
router.get("/products", checkAllowance,getProducts);
router.post("/order", checkAllowance,postOrder);
router.get("/order", checkAllowance, getOrderOyCustomer);


export default router;
