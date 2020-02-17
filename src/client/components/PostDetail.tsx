import React from "react";
import * as _ from "lodash";

import { Post } from "../../common/types";

export interface PostDetailProps {
  post: Post;
}

export const PostDetail: React.SFC<PostDetailProps> = (
  props: PostDetailProps
) => {
  const { post } = props;
  return (
    <div>
      <h1 className="title">{post.title}</h1>
      <h2 className="content">{post.content}</h2>
    </div>
  );
};
