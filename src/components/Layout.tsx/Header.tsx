import { Avatar, DatePicker, Dropdown, Input, Layout } from "antd";
import SearchIcon from "@/assets/svg/search.svg";
import CalendarIcon from "@/assets/svg/solar_calendar-linear.svg";
import NotificationIcon from "@/assets/svg/solar_bell-outline.svg";
import dayjs from "dayjs";
import type { MenuProps } from "antd";
import Link from "next/link";
import ProfileIcon from "@/assets/svg/profile-2user.svg";
import ArrowIcon from "@/assets/svg/arrow-down.svg";
import ExpandIcon from "@/assets/svg/arrow-right.svg";
import { usePathname } from "next/navigation";

const items: MenuProps["items"] = [
  {
    key: "1",
    icon: <ProfileIcon />,
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Account
      </Link>
    ),
  },
];

const { Header } = Layout;

function LayoutHeader({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}) {
  const paths = usePathname()?.split("/");
  const currentPath = paths[paths.length - 1];
  return (
    <Header className="py-[18px] px-[18px] dark:bg-dark-area dark:text-dark-txt border-b space-x-5 border-[#E5EAEF] leading-normal h-auto min-h-[70px] flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <button
          className="h-10 w-10 rounded-full flex items-center justify-center border border-light-brd flex-shrink-0 xs:hidden"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ExpandIcon className="transform" />
        </button>
        <h3 className="font-semibold text-base sm:text-xl capitalize ">
          {currentPath || "Dashboard"}
        </h3>
      </div>

      <div className="flex items-center space-x-3 sm:space-x-[22px] w-full max-w-[800px] justify-end">
        <Input
          className="h-[48px] rounded-[24px] border-light-brd w-full max-w-[333px]  hidden lg:flex"
          prefix={<SearchIcon />}
        />
        <button className="lg:hidden h-10 w-10 rounded-full flex items-center justify-center border border-light-brd flex-shrink-0">
          <SearchIcon />
        </button>
        <div className="md:flex items-center flex-shrink-0 hidden ">
          <CalendarIcon />
          <span className="ml-4 text-sm font-medium ">
            {dayjs().format("MMMM DD, YYYY")}
          </span>
        </div>
        <button className="h-10 w-10 rounded-full flex items-center justify-center border border-light-brd flex-shrink-0">
          <NotificationIcon />
        </button>
        <Dropdown menu={{ items }}>
          <div className="flex items-center space-x-2 border border-light-brd px-2 py-[6px] rounded-[28px]">
            <Avatar
              src="https://i.pravatar.cc/300"
              className="h-[38px] w-[38px]"
            />
            <span className="hidden md:inline-block">
              <p className="text-base">Justin Bergson</p>
              <span className="text-sm text-sec-text">Justin@gmail.com</span>
            </span>
            <ArrowIcon className="hidden sm:inline-block" />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
}

export default LayoutHeader;
