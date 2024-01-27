"use client";
import { ConfigProvider, Grid, Layout, theme } from "antd";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import LayoutHeader from "./Header";
import { appTheme } from "../antd/theme";

const { Content } = Layout;
const { useBreakpoint } = Grid;

function MainLayout({ children }: React.PropsWithChildren) {
  const [collapsed, setCollapsed] = useState(true);
  const screens = useBreakpoint();
  const collapsedWidth = screens.xs ? 0 : 80;

  return (
    <ConfigProvider theme={appTheme}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar
          collapsedWidth={collapsedWidth}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <Layout style={{ marginLeft: collapsedWidth }}>
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
