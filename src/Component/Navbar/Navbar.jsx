import React from "react";
import "./Navbar.css";
import { Layout } from "antd";
const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className="header" style={{ backgroundColor: "#0E58D6" }}>
      <div className="brand">Tesseract</div>
    </Header>
  );
};

export default Navbar;
