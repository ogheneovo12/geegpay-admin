export interface ISalesByMonthOrDay {
  month?: string;
  day?: number;
  sales: number;
}

export interface IUser {
  firstName: string;
  lastName: string;
  avatarUrl: string;
}
export interface IOrder {
  customer: IUser;
  date: string;
  amount: number;
  status: string;
  invoice: string;
}

export interface IPlatformData {
  amount: number;
  platform: string;
  percentage: number;
  brandColor?: string;
}

export type TrendType = "rising" | "falling";
