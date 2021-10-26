import express, { Application } from "express";
import { getorders, postAddAccoount, postAddProduct } from "../Controller/owner";
const router = express.Router();

router.post("/addAccount", postAddAccoount)
router.post("/addProduct",postAddProduct )
router.post("/orders", getorders)


export default router;
