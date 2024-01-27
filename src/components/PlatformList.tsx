"use client";
import { IPlatformData } from "@/common/types/interface";
import { formatCurrency } from "@/common/utils/currency.utils";
import { List, Progress, Typography } from "antd";

function PlatformList({
  header,
  data,
}: {
  header: React.ReactNode;
  data: IPlatformData[];
}) {
  return (
    <List
      header={header}
      bordered
      dataSource={data}
      itemLayout="vertical"
      className="bg-white"
      renderItem={(item) => {
        return (
          <List.Item>
            <Typography.Text className="text-lg font-semibold text-[#22242C]">
              {item?.platform}
            </Typography.Text>
            <Progress
              size={["default", 12]}
              strokeColor={item?.brandColor}
              percent={item?.percentage}
              showInfo={false}
              trailColor="#F5F5F5"
            />
            <div className="flex items-center justify-between text-lg text-[#525252]">
              <p>{formatCurrency(item.amount?.toFixed(0), "$")}</p>
              <p>+{item.percentage}%</p>
            </div>
          </List.Item>
        );
      }}
    />
  );
}

export default PlatformList;
