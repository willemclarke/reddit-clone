import { Application, Request, Response } from "express";
import * as _ from "lodash";
const express = require("express");

const app: Application = express();
const port = process.env.HTTP_PORT || 3000;

app.get("/api/", (req: Request, res: Response) => {
  console.info(`This is an API request. Request path is: ${req.path}`);
  res.status(200).json({
    hello: "world"
  });
});

app.use(express.static("dist/client"));

(async () => {
  app.listen(port, async () => {
    console.log(`Server listening on port ${port}`);
  });
})();
