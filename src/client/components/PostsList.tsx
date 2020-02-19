import React from "react";
import * as _ from "lodash";

import { Post } from "../../common/types";
import { List } from "antd";
import { IconText } from "./IconText";

export interface PostsListProps {
  posts: Post[];
}

export const PostsList: React.SFC<PostsListProps> = (props: PostsListProps) => {
  const { posts } = props;

  return (
    <List
      itemLayout="vertical"
      dataSource={posts}
      renderItem={post => (
        <List.Item
          key={post.id}
          actions={[<IconText type="up" text="0" key="upvote" />, <IconText type="down" text="0" key="downvote" />]}
        >
          <List.Item.Meta title={<a href="">{post.title}</a>} />
        </List.Item>
      )}
    />
  );
};
