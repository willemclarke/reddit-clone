import * as supertest from "supertest";
import { Database } from "../database";
import { createApp } from "../server";

describe("post /api/posts", () => {
  test("Testing /api/posts post request", async () => {
    const request = supertest(createApp(new Database()));
    const postReq = { title: "test-title", content: "content-one" };
    const res = await request.post("/api/posts").send(postReq);
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject(postReq);
  });
});

describe("get /api/posts", () => {
  test("returns empty when no post exists", async () => {
    const request = supertest(createApp(new Database()));
    const res = await request.get("/api/posts");
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  test("returns post when post exists", async () => {
    const request = supertest(createApp(new Database()));
    const postReq = { title: "test-title", content: "content-one" };
    const postRes = await request.post("/api/posts").send(postReq);
    const res = await request.get("/api/posts");
    expect(res.status).toBe(200);
    expect(res.body).toEqual([postRes.body]);
  });
});
