import mysql from "mysql2"
import { Pool } from "mysql2/promise";


const dbInfo = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "secret",
  database: "store",
};

let conn :Pool
async function connectToDB() {
  while (true) {
    try {
      let connPool = await mysql.createPool(dbInfo)
      conn = connPool.promise();
      break;
    } catch (err) {
      console.log("Failed Connecting To DB, retrying");
      console.log(err);
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
  console.log("Connected To DB");
}

export { connectToDB , conn}