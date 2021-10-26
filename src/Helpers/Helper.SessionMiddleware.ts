import { Application } from "express";
import session from "express-session";

function sessionMiddlware(server: Application) {
  server.use(
    session({
      secret: process.env.SESSION_SECRET || "",
      resave: false,
      rolling: true,
      saveUninitialized: true,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: true,
      },
    })
  );
}

export default sessionMiddlware;
