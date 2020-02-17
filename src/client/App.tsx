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
  if (loading) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div>
        <Layout>
          <Header>Reddit Clone</Header>
          <Layout>
            <Content>
              Content
              <PostsList posts={data} />
            </Content>
            <Sider>Sider</Sider>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
};
