import { makeError } from "../Helpers/ErrorHandling/Helper.EH.MakeError";
import RouteHandler from "./RouteHadlerType";

/*
    this is authorization middleware
    used express-session package for managing session and cookie 
*/
export const checkAllowance : RouteHandler = async(req, res, next) =>{
    try {
        //check weather user data is there in session or not
        if(req.session.userData!=undefined){
            next();
            return
        }
        else{
            next(new makeError.Unauthorized())
        }

    } catch (error) {
        next(error)
    }
}