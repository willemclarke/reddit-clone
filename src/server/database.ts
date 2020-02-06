import { Post, PostRequest } from "../common/types";
import * as _ from "lodash";
const uuidv1 = require("uuid/v1");

export class Database {
  posts: Post[];

  constructor() {
    this.posts = [];
  }

  storePost(postReq: PostRequest): void {
    const id: string = uuidv1();
    const post: Post = {
      id: id,
      title: postReq.title,
      content: postReq.content
    };
    this.posts.push(post);
  }
}
