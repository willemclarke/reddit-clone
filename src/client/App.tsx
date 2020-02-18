import React from "react";
import * as _ from "lodash";
import { useFetch } from "./hooks/fetch";

import { PostsList } from "./components/PostsList";

import "./index.less";
import "antd/dist/antd.css";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export const App: React.FC = () => {
  const [data, loading] = useFetch("http://localhost:3000/api/posts");

  const content = loading ? <h1>Loading</h1> : <PostsList posts={data} />;

  return (
    <Layout>
      <Header>Reddit Clone</Header>
      <Layout>
        <Content>{content}</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};
