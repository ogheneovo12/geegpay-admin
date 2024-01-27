import BoxIcon from "@/assets/svg/box.svg";
import CategoryIcon from "@/assets/svg/category.svg";
import DiscountShapeIcon from "@/assets/svg/discount-shape.svg";
import InfoIcon from "@/assets/svg/info-circle.svg";
import UserIcon from "@/assets/svg/profile-2user.svg";
import TrendUpIcon from "@/assets/svg/trend-up.svg";
import {
  IOrder,
  IPlatformData,
  ISalesByMonthOrDay,
  IUser,
} from "@/common/types/interface";
import type { MenuProps } from "antd";
import dayjs from "dayjs";


type MenuItem = Required<MenuProps>["items"][number];

export const menuItems: MenuItem[] = [
  {
    key: "/",
    label: "Dashboard",
    icon: <CategoryIcon />,
  },
  {
    key: "/trends",
    label: "TrendUpIcon",
    icon: <TrendUpIcon />,
  },
  {
    key: "/users",
    label: "Users",
    icon: <UserIcon />,
  },
  {
    key: "/products",
    label: "Products",
    icon: <BoxIcon />,
  },
  {
    key: "/coupons",
    label: "Coupons",
    icon: <DiscountShapeIcon />,
  },
  {
    key: "/info",
    label: "InfoIcon",
    icon: <InfoIcon />,
  },
];

export const salesByMonth: ISalesByMonthOrDay[] = [
  { month: "January", sales: 25 },
  { month: "February", sales: 20 },
  { month: "March", sales: 5 },
  { month: "April", sales: 10 },
  { month: "May", sales: 15 },
  { month: "June", sales: 30 },
  { month: "July", sales: 50 },
  { month: "August", sales: 30 },
  { month: "September", sales: 20 },
  { month: "October", sales: 10 },
  { month: "November", sales: 25 },
  { month: "December", sales: 60 },
];

export const dailySalesRisingEnd: ISalesByMonthOrDay[] = [
  { day: 1, sales: 5 },
  { day: 2, sales: 7 },
  { day: 3, sales: 6 },
  { day: 4, sales: 5 },
  { day: 5, sales: 7 },
  { day: 6, sales: 8 },
  { day: 7, sales: 10 },
  { day: 8, sales: 9 },
  { day: 9, sales: 8 },
  { day: 10, sales: 7 },
  { day: 11, sales: 9 },
  { day: 12, sales: 11 },
  { day: 13, sales: 13 },
  { day: 14, sales: 12 },
  { day: 15, sales: 11 },
  { day: 16, sales: 12 },
  { day: 17, sales: 14 },
  { day: 18, sales: 13 },
  { day: 19, sales: 15 },
  { day: 20, sales: 17 },
  { day: 21, sales: 16 },
  { day: 22, sales: 18 },
  { day: 23, sales: 19 },
  { day: 24, sales: 20 },
  { day: 25, sales: 21 },
  { day: 26, sales: 23 },
  { day: 27, sales: 25 },
  { day: 28, sales: 27 },
  { day: 29, sales: 29 },
  { day: 30, sales: 30 },
];

export const dailySalesFallingEnd: ISalesByMonthOrDay[] = [
  { day: 1, sales: 30 },
  { day: 2, sales: 29 },
  { day: 3, sales: 50 },
  { day: 4, sales: 45 },
  { day: 5, sales: 26 },
  { day: 6, sales: 25 },
  { day: 7, sales: 60 },
  { day: 8, sales: 55 },
  { day: 9, sales: 22 },
  { day: 10, sales: 21 },
  { day: 11, sales: 30 },
  { day: 12, sales: 35 },
  { day: 13, sales: 45 },
  { day: 14, sales: 55 },
  { day: 15, sales: 65 },
  { day: 16, sales: 55 },
  { day: 17, sales: 66 },
  { day: 18, sales: 55 },
  { day: 19, sales: 53 },
  { day: 20, sales: 52 },
  { day: 21, sales: 51 },
  { day: 22, sales: 55 },
  { day: 23, sales: 53 },
  { day: 24, sales: 48 },
  { day: 25, sales: 47 },
  { day: 26, sales: 46 },
  { day: 27, sales: 44 },
  { day: 28, sales: 34 },
  { day: 29, sales: 30 },
  { day: 30, sales: 20 },
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

export const statusColorClass: Record<string, string> = {
  refund: "text-alert-error",
  paid: "text-status-paid",
};
