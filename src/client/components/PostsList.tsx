import React from "react";
import * as _ from "lodash";

import { PostDetail } from "./PostDetail";
import { Post } from "../../common/types";

export interface PostsListProps {
  posts: Post[];
}

export const PostsList: React.SFC<PostsListProps> = (props: PostsListProps) => {
  const { posts } = props;
  const details = _.map(posts, post => {
    return <PostDetail key={post.id} post={post} />;
  });
  return <div>{details}</div>;
};
