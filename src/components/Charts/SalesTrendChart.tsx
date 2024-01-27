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
  const data = useMemo(() => mergeData(salesData), [salesData]);
  const config: ColumnConfig = {
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
      },
      y: {
        labelSpaceing: 50,
        labelFormatter: (text: string) => (+text)?.toFixed(3),
      },
    },
    style: {
      radiusTopLeft: 20,
      radiusTopRight: 20,
      maxWidth: 30,
      fill: "#34CAA51A",
    },
    // interaction: {
    //   elementHighlight: true,
    // },
    // state: {
    //   inactive: {
    //     opacity: 0.5,
    //   },
    //   active: {
    //     fill: "red",
    //   },
    // },
    animate: { enter: { type: "growInY" } },
    tooltip: {
      color: "#000",
      title: (d) => formatCurrency(d.sales?.toFixed(0), "$"),
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
          <h3 className="text-lg font-semibold">Sales Trend</h3>
        </div>
      }
      extra={
        <div>
          Sort By:
          <Select
            css={css`
              & .ant-select-selector {
                border-radius: 20px;
                border: 1px solid #e1dfdf;
                font-size: 12px;
              }
            `}
            className="ml-2"
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
      <Column {...config} />
    </Card>
  );
};

export default SalesTrendChart;
