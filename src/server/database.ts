import { Post, PostRequest } from "../common/types";
import * as _ from "lodash";
import * as uuidv1 from "uuid/v1";

export class Database {
  posts: Post[];

  constructor() {
    this.posts = [];
  }

  storePost(postReq: PostRequest): Post {
    const id: string = uuidv1();
    const post: Post = {
      id: id,
      title: postReq.title,
      content: postReq.content
    };
    this.posts.push(post);
    return post;
  }

  getPosts(): Post[] {
    return this.posts;
  }
}
