/** @jsxImportSource @emotion/react */
import Logo from "@/assets/svg/Vector.svg";
import { menuItems } from "@/constants/data";
import { css } from "@emotion/react";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
import ExpandIcon from "@/assets/svg/arrow-right.svg";

function Sidebar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}) {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      trigger={null}
      collapsedWidth={80}
      className="fixed  overflow-auto h-screen left-0 top-0 bottom-0"
      css={css`
        & .ant-layout-sider-children {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}
    >
      <div>
        <div className="w-full flex justify-center my-5">
          <Logo />
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={menuItems}
          css={css`
            & .ant-menu-item {
              padding: 10px;
              display: flex;
              width: 100%;
              justify-content: center;
              display: flex;
              align-items: center;
            }
            &.ant-menu-inline-collapsed .ant-menu-item .ant-menu-title-content {
              display: none;
            }
          `}
        />
      </div>
      <div>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={[
            {
              key: "expand",
              icon: <ExpandIcon />,
              label: "Expand",
            },
          ]}
          css={css`
            & .ant-menu-item {
              padding: 10px;
              display: flex;
              width: 100%;
              justify-content: center;
              display: flex;
              align-items: center;
            }
            &.ant-menu-inline-collapsed .ant-menu-item .ant-menu-title-content {
              display: none;
            }
          `}
        />
      </div>
    </Sider>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
