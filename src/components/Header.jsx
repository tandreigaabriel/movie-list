import React from "react";
import { Layout, Typography } from "antd";

const { Header: AntdHeader } = Layout;
const { Title } = Typography;

const Header = () => {
  return (
    <AntdHeader>
      <Title level={3} style={{ color: "white", margin: 0 }}>
        🎬 Movie List App
      </Title>
    </AntdHeader>
  );
};

export default Header;
