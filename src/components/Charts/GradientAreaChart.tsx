"use client";
import React from "react";
import type { AreaConfig } from "@ant-design/plots";
import dynamic from "next/dynamic";
import { ISalesByMonthOrDay, TrendType } from "@/common/types/interface";
import { useMode } from "../context/ThemeModeProvider";

const Area = dynamic(
  () => import("@ant-design/plots").then((mod) => mod.Area),
  { ssr: false }
);

const trendFill: Record<string, { fill: string; stroke: string }> = {
  falling: {
    fill: "l(270) 0:rgba(237, 84, 78, 0) 1:#ED544E",
    stroke: "#ED544E",
  },
  rising: {
    fill: "l(270) 0:rgba(119, 185, 0, 0) 1:#77B900",
    stroke: "#77B900",
  },
};
const GradientAreaChart = ({
  trend,
  data = [],
}: {
  trend: TrendType;
  data: ISalesByMonthOrDay[];
}) => {
  const { mode } = useMode();
  const config: AreaConfig = {
    theme: mode === "dark" ? "classicDark" : "classic",
    data,
    height: 70,
    xField: "day",
    yField: "sales",
    style: {
      fill: trendFill[trend].fill,
    },
    axis: {
      y: { label: false, grid: false, tick: false },
      x: {
        label: false,
        grid: false,
        tick: false,
      },
    },
    line: {
      style: {
        stroke: trendFill[trend].stroke,
        strokeWidth: 1,
      },
      animate: { enter: { animation: "morphIn" } },
    },
  };
  return <Area {...config} />;
};

export default GradientAreaChart;
