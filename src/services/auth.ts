import createHttpError from "http-errors";
import { compare } from "../Helpers/bcrypt";
import { makeError } from "../Helpers/ErrorHandling/Helper.EH.MakeError";
import { GetCustomerAccountByEmail, ICustomer } from "./customer";

export interface ISession {
    customer_id : number,
    email : string,
    full_name : string
}

export function performLogin(email: string, password: string): Promise<ISession> {
  return new Promise<ISession>(async (resolve, reject) => {
    try {
      let customer: ICustomer = await GetCustomerAccountByEmail(email);
      if(customer==undefined){
          reject(new makeError.Forbidden("invalid email"));
          return
      }
      let passMatched: boolean = await compare(
        password,
        customer.login_password
      );
      if(!passMatched) {
          reject(new makeError.Forbidden("invalid password"));
          return;
      }

      //username and password matched
      let ses : ISession = {
          customer_id : customer.customer_id,
          email : customer.email,
          full_name : customer.full_name
      }
      resolve(ses);
      
    } catch (err) {
      reject(err);
    }
  });
}
