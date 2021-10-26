require("dotenv").config();
import express, { Application } from "express";
import morgan from "morgan";



function ConfigureServer(): Application {
  const app = express();
  //for nginx proxy setup
  app.enable("trust proxy");


  // parsing body
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(morgan("tiny"));

  return app;
}

export default ConfigureServer;
