import React from "react";
import "./AppLayout.css";
import { Button, ConfigProvider, theme, Breadcrumb, Layout, Menu } from "antd";
import Navbar from "../Component/Navbar/Navbar";
import Sidebar from "../Component/Sidebar/Sidebar";
import PageContent from "../Component/PageContent/PageContent";
const { Header, Sider, Content, Footer } = Layout;

const AppLayout = () => (
  <ConfigProvider
    theme={{
      //   algorithm: theme.defaultAlgorithm,

      token: {
        colorPrimary: "#0E58D6",
        colorPrimaryText: "orange",
      },
    }}
  >
    <Layout className="container">
      {/* <Header style={{ backgroundColor: "#0E58D6" }}>
        <div className="brand">Tesseract</div>
      </Header> */}
      <Navbar />
      <Layout>
        {/* <Sider theme="light">
          <Menu></Menu>
        </Sider> */}
        <Sidebar />
        <PageContent />
      </Layout>
    </Layout>
  </ConfigProvider>
);

export default AppLayout;
