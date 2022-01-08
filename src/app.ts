import * as express from "express";
import { HealthController } from "./application/controller";

class App {
  public server;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use("/api/v1/", HealthController);
  }
}

export default new App().server;