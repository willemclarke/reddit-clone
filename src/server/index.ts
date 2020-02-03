import { Application, Request, Response } from "express";
import * as _ from "lodash";
import * as express from "express";

const app: Application = express();
const port = process.env.HTTP_PORT || 3000;

app.get("/api/posts", (req: Request, res: Response) => {
  console.info(`This is an API request. Request path is: ${req.path}`);
  res.status(200).json([
    { title: "title", content: "content" },
    { title: "title", content: "content" },
    { title: "title", content: "content" }
  ]);
});
app.get("/api/posts/:id", (req: Request, res: Response) => {
  console.info(`This is an API request. Request path is: ${req.path}`);
  res.status(200).json({
    hello: "world",
    id: 666
  });
});
app.delete("/api/posts/:id", (req: Request, res: Response) => {
  console.info(`This is an API request. Request path is: ${req.path}`);
  res.status(200);
});
app.post("/api/posts", (req: Request, res: Response) => {
  console.info(`This is an API request. Request path is: ${req.path}`);
  res.status(200).json({
    title: "title",
    content: "content"
  });
});

app.use(express.static("dist/client"));

app.listen(port);
console.log(`Server listening on ${port}`);
