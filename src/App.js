// src/App.jsx
import React from "react";
import { Layout } from "antd";
import { CopyrightOutlined } from "@ant-design/icons";

import Header from "./components/Header";
import Home from "./pages/Home";

import "./App.css";

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />

      <Content style={{ padding: "20px 50px" }}>
        <Home />
      </Content>

      <Footer style={{ textAlign: "center", marginTop: 20 }}>
        <CopyrightOutlined /> {new Date().getFullYear()} Toma Andrei Gabriel
      </Footer>
    </Layout>
  );
}

export default App;
