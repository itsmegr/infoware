import { conn } from "../Helpers/Helper.DBInit";

/*
    a single function to execute queries
    for small application i am doing like this, otherwise 
    writing one function for each query make more sense
*/
function execQuery(statement: string, ...args : any): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const [rows] = await conn.query(statement, [...args]);
      return resolve(rows);
    } catch (err) {
      reject(err);
    }
  });
}

export { execQuery };
