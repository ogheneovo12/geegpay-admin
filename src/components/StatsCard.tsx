import TrendDownIcon from "@/assets/svg/trenddown.svg";
import TrendUpIcon from "@/assets/svg/trendup.svg";
import React, { useMemo } from "react";
export interface IstatsCardProps {
  icon?: React.ReactNode;
  title?: string;
  value?: string;
  percentageValue: number;
}

const trendIcon = {
  up: {
    icon: <TrendUpIcon />,
    color: "#34CAA5",
  },
  down: {
    icon: <TrendDownIcon />,
    color: "#ED544E",
  },
};

function StatsCard({ title, value, percentageValue, icon }: IstatsCardProps) {
  const trend = useMemo(
    () => trendIcon[percentageValue < 0 ? "down" : "up"],
    [percentageValue]
  );
  return (
    <div className="bg-white p-4 rounded-[14px] border border-[#EDF2F7]">
      <div>
        <span className="h-10 w-10 border border-[#E6E6E6] flex items-center justify-center rounded-full">
          {icon}
        </span>
        <div>{/* Graph */}</div>
      </div>
      <div className="mt-[10px]">
        <h4 className="text-lg font-medium text-light-pink">{title}</h4>
        <p className="text-dark-blue   font-semibold text-2xl">{value}</p>
      </div>
      <div className="mt-[10px]">
        <span
          style={{ color: trend?.color }}
          className="bg-trend-pill inline-flex items-center justify-center rounded-full py-1 px-2 text-xs mr-[10px]"
        >
          <span className="mr-1">{trend?.icon}</span>{" "}
          {Math.abs(percentageValue)}
        </span>
        <span className="text-bluish-grey">vs. previous month</span>
      </div>
    </div>
  );
}

export default StatsCard;
