import { Application } from "express";
import {
  makeError,
  coatError,
} from "../Helpers/ErrorHandling/Helper.EH.MakeError";
function SinkErrorFor(server: Application) {
  server.use((req, res, next) => {
    next(new makeError.NotFound());
  });

  server.use((err: any, req: any, res: any, next: any) => {
    console.log(err);
    err = coatError(err);
    res.status(err.status || 500);
    res.send({
      status: err.status,
      message: err.message,
    });
  });
}

export default SinkErrorFor;
