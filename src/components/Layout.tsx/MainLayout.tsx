"use client";
import { ConfigProvider, Layout, theme } from "antd";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import LayoutHeader from "./Header";
import { appTheme } from "../antd/theme";

const { Content } = Layout;

function MainLayout({ children }: React.PropsWithChildren) {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <ConfigProvider theme={appTheme}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout className="ml-[80px]">
          <LayoutHeader collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content
            style={{
              margin: "0 16px",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

MainLayout.propTypes = {};

export default MainLayout;
