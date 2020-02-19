import React from "react";
import * as _ from "lodash";

import { PostsList } from "../components/PostsList";
import { useFetch } from "../hooks/fetch";
import { Empty, Spin } from "antd";

export const Home = () => {
  const [data, loading] = useFetch("http://localhost:3000/api/posts");
  if (loading) {
    return <Spin />;
  } else if (_.isEmpty(data)) {
    return <Empty />;
  } else {
    return <PostsList posts={data} />;
  }
};
