/** @jsxImportSource @emotion/react */
"use client";
import { ISalesByMonthOrDay } from "@/common/types/interface";
import { mergeData } from "@/common/utils/chart.utils";
import { formatCurrency } from "@/common/utils/currency.utils";
import type { ColumnConfig } from "@ant-design/plots";
import { css } from "@emotion/react";
import { Card, Select } from "antd";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { useMode } from "../context/ThemeModeProvider";

const Column = dynamic(
  () => import("@ant-design/plots").then((mod) => mod.Column),
  { ssr: false }
);

const SalesTrendChart = ({
  className,
  salesData = [],
  onFilterChange,
  filterValue,
  xField = "month",
}: {
  className?: string;
  salesData: ISalesByMonthOrDay[];
  filterValue?: string;
  onFilterChange: (value?: string) => void;
  xField?: string;
}) => {
  const { mode } = useMode();
  const data = useMemo(() => mergeData(salesData), [salesData]);
  const config: ColumnConfig = {
    theme: mode === "dark" ? "classicDark" : "classic",
    height: 305,
    smooth: true,
    autoFit: true,
    data,
    xField: xField,
    yField: "sales",
    columnWidthRatio: 0.5,
    axis: {
      x: {
        size: 20,
        autoRotate: false,
        labelFormatter: (text: string) => text?.substring(0, 3),
        lineLineWidth: 20,
        labelFill: mode === "dark" ? "#fff" : undefined,
      },
      y: {
        labelSpaceing: 50,
        labelFormatter: (text: string) => (+text)?.toFixed(3),
        labelFill: mode === "dark" ? "#fff" : undefined,
      },
    },
    style: {
      radiusTopLeft: 20,
      radiusTopRight: 20,
      maxWidth: 30,
      fill: "#34CAA51A",
    },
    state: {
      inactive: { opacity: 0.5 },
      active: { fill: "l(90) 0:#34CAA5 1:rgba(52, 202, 165, 0)" },
    },
    interaction: {
      elementHighlightByColor: false,
      elementHighlight: false,
      elementHighlightByX: true,
      tooltip: {
        position: "top",
      },
    },
    animate: { enter: { type: "growInY" } },
    tooltip: {
      color: "#000",
      title: (d) => formatCurrency(d.sales?.toFixed(3), "$"),
      items: false,
      
    },
  };

  return (
    <Card
      css={css`
        & .ant-card-head {
          padding: 24px !important;
          border-bottom: none;
        }
        & .ant-card-body {
          @media (max-width: 768px) {
            padding-left: 5px !important;
            padding-right: 5px !important;
          }
        }
      `}
      className={className}
      title={
        <div>
          <h3 className="text-lg font-semibold dark:text-dark-txt">
            Sales Trend
          </h3>
        </div>
      }
      extra={
        <div className="dark:text-dark-txt">
          Sort By:
          <Select
            css={css`
              & .ant-select-selector {
                border-radius: 20px;
                border: 1px solid #e1dfdf;
                font-size: 12px;
              }
            `}
            className="ml-2 dark:text-dark-txt"
            defaultValue={"anually"}
            value={filterValue}
            style={{ width: 96 }}
            onChange={onFilterChange}
            options={[
              { value: "weekly", label: "Weekly" },
              { value: "monthly", label: "Monthly" },
              { value: "anually", label: "Anually" },
            ]}
          />
        </div>
      }
    >
      <Column {...config} colorField="#fff" />
    </Card>
  );
};

export default SalesTrendChart;
