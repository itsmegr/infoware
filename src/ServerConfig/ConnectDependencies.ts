import { connectToDB } from "../Helpers/Helper.DBInit";
async function ConnectDependencies() {
  try {
    await connectToDB();
  } catch (err) {
    throw err;
  }
}
export default ConnectDependencies;
