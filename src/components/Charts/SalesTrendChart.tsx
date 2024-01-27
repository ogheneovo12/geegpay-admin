/** @jsxImportSource @emotion/react */
"use client";
import { ISalesByMonth } from "@/common/types/interface";
import { mergeData } from "@/common/utils/chart.utils";
import type {ColumnConfig } from "@ant-design/plots";
import { css } from "@emotion/react";
import { Card, Select } from "antd";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const Column= dynamic(
  () => import("@ant-design/plots").then((mod) => mod.Column ),
  { ssr: false }
)

const SalesTrendChart = ({
  className,
  salesData = [],
  onFilterChange,
  filterValue,
}: {
  className?: string;
  salesData: ISalesByMonth[];
  filterValue?: string;
  onFilterChange: (value?: string) => void;
}) => {
  const data = useMemo(() => mergeData(salesData), [salesData]);
  const config: ColumnConfig = {
    height: 245,
    smooth: true,
    autoFit: true,
    data,
    xField: "month",
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
    state: {
      inactive: { opacity: 0.1 },
      active: { fill: "blue" },
    },
    interaction: {
      // elementHighlight: true,
      elementHighlightByColor: true,
    },
  };

  return (
    <Card
      css={css`
        & .ant-card-head {
          padding: 24px !important;
          border-bottom: none;
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
