import { Application } from "express";
import ownerRoutes from "../Routes/Route.Owner"
import consumerRoutes from "../Routes/Route.Customer"
function HandleRoutesFor(server: Application) {
    server.use("/owner", ownerRoutes)
    server.use("/consumer", consumerRoutes)
}

export default HandleRoutesFor;
