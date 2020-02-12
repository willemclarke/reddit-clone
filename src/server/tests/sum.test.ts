import * as supertest from "supertest";
import { Database } from "../database";

const app = require("../index");
const request = supertest(app);
const port = process.env.HTTP_PORT || 3000;
app.listen(port);

test("Testing /api/posts post request", async done => {
  const postReq = { title: "test-title", content: "content-one" };
  const res = await request.post("/api/posts").send(postReq);
  expect(res.status).toBe(200);
  expect(res.body).toEqual(postReq);
  done();
});

test("Testing /api/posts get request", async done => {
  const res = await request.get("/api/posts");
  expect(res.status).toBe(200);
  expect(res.body).toEqual(res.body);
  done();
});

/* console.log src/server/tests/sum.test.ts:14
{ title: 'title', content: 'content1'}

console.log src/server/tests/sum.test.ts:22
  [ { id: '4350fd70-4d38-11ea-a4d2-1fcd371db80e',
      title: 'title',
      content: 'content1' } ]
*/
