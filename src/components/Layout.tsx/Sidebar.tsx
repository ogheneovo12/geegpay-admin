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
import DarkModeToggle from "../DarkModeToggle";
import { ThemeMode } from "../context/ThemeModeProvider";
import { usePathname, useRouter } from "next/navigation";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { useMemo } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

const menuCss = css`
  & .ant-menu-item {
    padding: 10px;
    display: flex;
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 0px;
  }
  &.ant-menu-inline-collapsed .ant-menu-item .ant-menu-title-content {
    display: none;
  }
`;

function setMenuItemsActions(
  action: (item: MenuItemType) => void,
  activeKey: string
) {
  return menuItems.map((item) => {
    if (item) {
      (item as MenuItemType).onClick = action;
      if (activeKey === item.key) {
        item.className =
          "relative rounded-l-0 after:content-[''] after:absolute after:bottom-0  after:right-0 after:h-full after:bg-secondary dark:after:bg-dark-txt after:w-[4px] after:rounded-l-[3px] ";
      } else {
        item.className = "";
      }
    }
    return item;
  });
}
function Sidebar({
  collapsed,
  setCollapsed,
  collapsedWidth,
  theme,
}: {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  collapsedWidth?: number;
  theme: ThemeMode;
}) {
  const ref = useDetectClickOutside({
    onTriggered: () => setCollapsed(true),
  });
  const router = useRouter();
  const path = usePathname();
  const menuList = useMemo(
    () => setMenuItemsActions((item) => router.push(item.key as string), path),
    [path, router]
  );
  const bottomMenuList = useMemo(
    () => [
      {
        key: "expand",
        icon: <ExpandIcon className={cx({ "rotate-180": !collapsed })} />,
        label: collapsed ? "Expand" : "Collapse",
        onClick: () => setCollapsed(!collapsed),
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
    ],
    [collapsed, setCollapsed]
  );
  return (
    <Sider
      ref={ref}
      theme={theme}
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
          items={menuList}
          css={menuCss}
        />
        <DarkModeToggle rotate={!collapsed} />
      </div>
      <div>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={bottomMenuList}
          css={menuCss}
        />
      </div>
    </Sider>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
