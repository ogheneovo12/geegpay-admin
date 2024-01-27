import { ISalesByMonthOrDay } from "../types/interface";

const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Merge data with all months, adding missing months with sales as 0
export const mergeData = (data: ISalesByMonthOrDay[]) =>
  allMonths.map((month) => {
    const found = data.find(
      (d) => d.month?.toLowerCase() === month?.toLowerCase()
    );
    return found || { month, sales: 0 };
  });
