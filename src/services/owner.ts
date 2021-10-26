import { execQuery } from "../DB/execute_query";
import { addOwnerQuery, getOwnerAccountByEmailQuery } from "../DB/owner_sql";



export interface addOwnerAccountArgs {
  full_name: string;
  email: string;
}

export interface IOwner extends addOwnerAccountArgs {
  owner_id: number;
}

function addOwnerAccount(
  arg: addOwnerAccountArgs
): Promise<boolean> {
  return new Promise<boolean>(async (resolve, reject) => {
    //calling the db function
    try {
      let res = await execQuery(addOwnerQuery, arg.full_name, arg.email);
      console.log(res);
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}
function getOwnerAccountByEmail(email : string): Promise<IOwner> {
  return new Promise<IOwner>(async (resolve, reject) => {
    //calling the db function
    try {
      let res = await execQuery(getOwnerAccountByEmailQuery, email);
      console.log(res[0]);
      resolve(res[0]);
    } catch (err) {
      reject(err);
    }
  });
}
export { addOwnerAccount, getOwnerAccountByEmail };