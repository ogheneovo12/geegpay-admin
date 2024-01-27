/** @jsxImportSource @emotion/react */
import Logo from "@/assets/svg/Vector.svg";
import { menuItems } from "@/constants/data";
import { css } from "@emotion/react";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
import ExpandIcon from "@/assets/svg/arrow-right.svg";
import LogoutIcon from "@/assets/svg/logout.svg";
import SettingsIcon from "@/assets/svg/setting-2.svg";
import cx from "classnames";

const menuCss = css`
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
`;

function Sidebar({
  collapsed,
  setCollapsed,
  collapsedWidth,
}: {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  collapsedWidth?: number;
}) {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      trigger={null}
      collapsedWidth={collapsedWidth}
      className="fixed  overflow-auto h-screen left-0 top-0 bottom-0"
      css={css`
        z-index: 1000;
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
          css={menuCss}
        />
      </div>
      <div>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={[
            {
              key: "expand",
              icon: <ExpandIcon className={cx({ "rotate-180": !collapsed })} />,
              label: collapsed ? "Expand" : "Collapse",
              onClick: (e) => setCollapsed(!collapsed),
            },
            {
              key: "Settings",
              icon: <SettingsIcon />,
              label: "Settings",
            },
            {
              key: "logout",
              icon: <LogoutIcon />,
              label: "Logout",
            },
          ]}
          css={menuCss}
        />
      </div>
    </Sider>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
