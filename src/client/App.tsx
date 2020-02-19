import React from "react";
import * as _ from "lodash";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import { CreatePost } from "./pages/CreatePost";

import "antd/dist/antd.css";
import { Layout, Menu } from "antd";

const { Header, Footer, Content } = Layout;

export const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} style={{ lineHeight: "64px" }}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/create">Create</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 20px" }}>
          <div
            style={{
              background: "white",
              padding: "20px",
              minHeight: "calc(100vh-64px)",
              marginTop: "20px"
            }}
          >
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/create">
                <CreatePost />
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ backgroundColor: "#F0F2F5", textAlign: "center" }}>Reddit Clone</Footer>
      </Layout>
    </Router>
  );
};
