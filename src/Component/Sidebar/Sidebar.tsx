import "./Sidebar.css";
import React from "react";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider collapsed={true} className="sidebar" theme="light">
      <Menu
        className="menue"
        items={[
          {
            label: "Home",
            key: "Home",
          },
          {
            label: "Apps Overview",
            key: "appsOverview",
          },
          {
            label: "Global Roles",
            key: "globalRoles",
          },
          {
            label: "Groups",
            key: "groups",
          },
          {
            label: "Request",
            key: "request",
          },
        ]}
      ></Menu>
    </Sider>
  );
};

export default Sidebar;
