/** @jsxImportSource @emotion/react */
"use client";
import { IPlatformData } from "@/common/types/interface";
import { formatCurrency } from "@/common/utils/currency.utils";
import { css } from "@emotion/react";
import { Card, List, Progress, Typography } from "antd";
import { v4 } from "uuid";
import { useMode } from "./context/ThemeModeProvider";

function PlatformList({
  header,
  data,
}: {
  header: React.ReactNode;
  data: IPlatformData[];
}) {
  const { mode } = useMode();
  return (
    <Card
      className="p-0"
      css={css`
        & .ant-card-body {
          padding: 0px !important;
        }
      `}
    >
      <List
        header={header}
        bordered
        dataSource={data}
        itemLayout="vertical"
        renderItem={(item) => {
          return (
            <List.Item key={v4()}>
              <Typography.Text className="text-lg font-semibold dark:text-dark-txt text-[#22242C]">
                {item?.platform}
              </Typography.Text>
              <Progress
                size={["default", 12]}
                strokeColor={item?.brandColor}
                percent={item?.percentage}
                showInfo={false}
                trailColor={mode === "dark" ? "#4B5563" : "#F5F5F5"}
              />
              <div className="flex items-center justify-between text-lg dark:text-dark-txt text-[#525252]">
                <p>{formatCurrency(item.amount?.toFixed(0), "$")}</p>
                <p>+{item.percentage}%</p>
              </div>
            </List.Item>
          );
        }}
      />
    </Card>
  );
}

export default PlatformList;
