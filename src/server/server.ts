import { Application, Request, Response } from "express";
import { Database } from "../server/database";
import * as _ from "lodash";
import * as express from "express";
import * as bodyParser from "body-parser";

export const createApp = (database: Database) => {
  const app: Application = express();

  app.use(bodyParser.json());

  app.get("/api/posts", (req: Request, res: Response) => {
    res.status(200).json(database.getPosts());
  });
  app.get("/api/posts/:id", (req: Request, res: Response) => {
    console.info(`This is an API request. Request path is: ${req.path}`);
    res.status(200).json({
      id: 666
    });
  });
  app.delete("/api/posts/:id", (req: Request, res: Response) => {
    console.info(`This is an API request. Request path is: ${req.path}`);
    res.status(200);
  });
  app.post("/api/posts", (req: Request, res: Response) => {
    const postReq = req.body;
    const post = database.storePost(postReq);
    res.status(200).json(post);
  });

  app.use(express.static("dist/client"));
  return app;
};
