"use client";
import { ConfigProvider, Grid, Layout, theme } from "antd";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import LayoutHeader from "./Header";
import { appTheme } from "../antd/theme";
import { useMode } from "../context/ThemeModeProvider";

const { Content } = Layout;
const { useBreakpoint } = Grid;

function MainLayout({ children }: React.PropsWithChildren) {
  const [collapsed, setCollapsed] = useState(true);
  const screens = useBreakpoint();
  const collapsedWidth = screens.xs ? 0 : 80;
  const { mode } = useMode();

  console.log(collapsed, collapsedWidth);

  return (
    <ConfigProvider
      theme={{
        ...appTheme,
        token: {
          ...appTheme.token,
          colorText: mode === "dark" ? "#9ca4ab" : appTheme?.token?.colorText,
        },
        algorithm:
          mode === "dark" ? theme.darkAlgorithm : theme?.defaultAlgorithm,
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar
          collapsedWidth={collapsedWidth}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          theme={mode}
        />
        <Layout
          className="dark:bg-[#1A1A1A]"
          style={{
            marginLeft: collapsed ? collapsedWidth : !screens.xs ? 200 : 0,
          }}
        >
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
