/** @jsxImportSource @emotion/react */
"use client";
import TrendDownIcon from "@/assets/svg/trenddown.svg";
import TrendUpIcon from "@/assets/svg/trendup.svg";
import React, { useMemo } from "react";
import GradientAreaChart from "./Charts/GradientAreaChart";
import { ISalesByMonthOrDay, TrendType } from "@/common/types/interface";
import { Card } from "antd";
import { css } from "@emotion/react";
export interface IstatsCardProps {
  icon?: React.ReactNode;
  title?: string;
  value?: string;
  percentageValue: number;
  data: ISalesByMonthOrDay[];
}

const trendIcon: Record<
  string,
  {
    icon: React.ReactNode;
    color: string;
    key: TrendType;
  }
> = {
  rising: {
    icon: <TrendUpIcon />,
    color: "#34CAA5",
    key: "rising",
  },
  falling: {
    icon: <TrendDownIcon />,
    color: "#ED544E",
    key: "falling",
  },
};

function StatsCard({
  title,
  value,
  percentageValue,
  icon,
  data = [],
}: IstatsCardProps) {
  const trend = useMemo(
    () => trendIcon[percentageValue < 0 ? "falling" : "rising"],
    [percentageValue]
  );
  return (
    <Card
      css={css`
        & .ant-card-body {
          padding: 0px !important;
        }
      `}
      className=" p-4 rounded-[14px] border border-[#EDF2F7]"
    >
      <div className="flex items-center justify-between">
        <span className="h-10 w-10 border flex-shrink-0 border-[#E6E6E6] flex items-center justify-center rounded-full">
          {icon}
        </span>
        <div className="w-full max-w-[150px]">
          <GradientAreaChart trend={trend.key} data={data} />
        </div>
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
    </Card>
  );
}

export default StatsCard;
