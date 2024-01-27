import type { MenuProps } from "antd";
import CategoryIcon from "@/assets/svg/category.svg";
import TrendUpIcon from "@/assets/svg/trend-up.svg";
import UserIcon from "@/assets/svg/profile-2user.svg";
import BoxIcon from "@/assets/svg/box.svg";
import DiscountShapeIcon from "@/assets/svg/discount-shape.svg";
import InfoIcon from "@/assets/svg/info-circle.svg";
import {
  IOrder,
  IPlatformData,
  ISalesByMonth,
  IUser,
} from "@/common/types/interface";
import dayjs from "dayjs";

type MenuItem = Required<MenuProps>["items"][number];

export const menuItems: MenuItem[] = [
  {
    key: "home",
    label: "Home",
    icon: <CategoryIcon />,
  },
  {
    key: "trends",
    label: "TrendUpIcon",
    icon: <TrendUpIcon />,
  },
  {
    key: "users",
    label: "Users",
    icon: <UserIcon />,
  },
  {
    key: "products",
    label: "Products",
    icon: <BoxIcon />,
  },
  {
    key: "coupons",
    label: "Coupons",
    icon: <DiscountShapeIcon />,
  },
  {
    key: "info",
    label: "InfoIcon",
    icon: <InfoIcon />,
  },
];

export const salesTrendData: ISalesByMonth[] = [
  { month: "January", sales: 25 },
  { month: "February", sales: 20 },
  { month: "March", sales: 5 },
  { month: "April", sales: 10 },
  { month: "May", sales: 15 },
  { month: "June", sales: 30 },
  { month: "July", sales: 40 },
  { month: "August", sales: 35 },
  { month: "September", sales: 20 },
  { month: "October", sales: 25 },
  { month: "November", sales: 30 },
  { month: "December", sales: 35 },
];

const user: IUser = {
  firstName: "Marcus",
  lastName: " Bergson",
  avatarUrl: "https://i.pravatar.cc/300",
};

export const orderTable: IOrder[] = [
  {
    customer: user,
    date: dayjs().toISOString(),
    amount: 5000,
    status: "paid",
    invoice: "viewId",
  },
  {
    customer: user,
    date: dayjs().toISOString(),
    amount: 5000,
    status: "paid",
    invoice: "viewId",
  },
  {
    customer: user,
    date: dayjs().toISOString(),
    amount: 5000,
    status: "paid",
    invoice: "viewId",
  },
  {
    customer: user,
    date: dayjs().toISOString(),
    amount: 5000,
    status: "paid",
    invoice: "viewId",
  },
  {
    customer: user,
    date: dayjs().toISOString(),
    amount: 5000,
    status: "paid",
    invoice: "viewId",
  },
];

export const platformList: IPlatformData[] = [
  {
    platform: "Book Bazaar",
    amount: 2500000,
    percentage: 15,
    brandColor: "#6160DC",
  },
  {
    platform: "Artisan Aisle",
    amount: 1800000,
    percentage: 10,
    brandColor: "#54C5EB",
  },
  {
    platform: "Toy Troop",
    amount: 1200000,
    percentage: 8,
    brandColor: "#FFB74A",
  },
];
