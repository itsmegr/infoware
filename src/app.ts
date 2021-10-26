import ConfigureServer from "./ServerConfig/ConfigureServer";
const server = ConfigureServer();
import SinkErrorFor from "./ServerConfig/ErrorSink";
import HandleRoutesFor from "./ServerConfig/RouteHandlers";
import ConnectDependencies from "./ServerConfig/ConnectDependencies";
import sessionMiddlware from "./Helpers/Helper.SessionMiddleware";
import { ISession } from "./services/auth";
import { addCustomerAccount } from "./services/customer";

declare module "express-session" {
  interface SessionData {
    userData: ISession;
  }
}
//session middleware
sessionMiddlware(server);

// Route Handling
HandleRoutesFor(server);

// Error Handling
SinkErrorFor(server);

async function check() {
  console.log(await addCustomerAccount({
    full_name : "govind",
    email : "govind@gmail.com",
    login_password : "123456"
  }));
}

const PORT = process.env.PORT;
ConnectDependencies()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Node app running at ${PORT}`);
      // check()
    });
  })
  .catch((err) => {
    console.log(err);
  });
