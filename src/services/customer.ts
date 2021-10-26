import { addCostumerQuery, getCustomerByEmailQuery } from "../DB/customer_sql";
import { execQuery } from "../DB/execute_query";
import { addOwnerQuery } from "../DB/owner_sql";
import { hashString } from "../Helpers/bcrypt";

export interface addCustomerAccountArgs {
  full_name: string;
  email: string;
  login_password:string;
}

export interface ICustomer extends addCustomerAccountArgs {
  customer_id: number;
}


function addCustomerAccount(arg: addCustomerAccountArgs): Promise<boolean> {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      //hash the password 
      let hashedPass = await hashString(arg.login_password);
      let res = await execQuery(
        addCostumerQuery,
        arg.full_name,
        arg.email,
        hashedPass
      );
      console.log(res);
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}

function GetCustomerAccountByEmail(email: string): Promise<ICustomer> {
  return new Promise<ICustomer>(async (resolve, reject) => {
    try {
      let res = await execQuery(getCustomerByEmailQuery, email);
      console.log(res[0]);
      resolve(res[0]);
    } catch (err) {
      reject(err);
    }
  });
}



export { addCustomerAccount,GetCustomerAccountByEmail };
