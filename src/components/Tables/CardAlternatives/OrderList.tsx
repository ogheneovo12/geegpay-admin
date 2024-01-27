/** @jsxImportSource @emotion/react */
"use client";
import { IOrder } from "@/common/types/interface";
import React from "react";
import { Avatar, Card, List, Progress, Tag, Typography } from "antd";
import dayjs from "dayjs";
import cx from "classnames";
import { statusColorClass } from "@/constants/data";
import { formatCurrency } from "@/common/utils/currency.utils";
import Link from "next/link";
import DocumentDownload from "@/assets/svg/document-download.svg";
import { v4 } from "uuid";
import { css } from "@emotion/react";

function OrderList({
  data,
  className,
}: {
  data: IOrder[];
  className?: string;
}) {
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
        bordered
        header={
          <div className="flex items-center justify-between">
            <h4 className="text-base sm:text-lg font-semibold">Last Orders</h4>
            <Link
              href="/#"
              className="text-status-paid text-base sm:text-lg font-medium"
            >
              See All
            </Link>
          </div>
        }
        className={cx(className)}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={v4()}
            actions={[
              <span key={v4()} className="flex items-center space-x-[6px]">
                <DocumentDownload />
                <Link href="#" className="text-secondary dark:text-dark-txt">
                  View
                </Link>
              </span>,
            ]}
          >
            <List.Item.Meta
              key={v4()}
              avatar={<Avatar src={item.customer.avatarUrl} />}
              title={
                <span className="font-semibold text-base sm:text-lg">
                  {item?.customer?.firstName} {item?.customer?.lastName}
                </span>
              }
              description={
                <div>
                  <p>
                    <span className="font-medium text-sm">Amount: </span>

                    <span className="text-sm text-secondary">
                      {formatCurrency(item.amount?.toFixed(), "$")}
                    </span>
                  </p>
                  <p className="my-2">
                    <span className="font-medium text-sm mr-1"> Status: </span>
                    <Tag
                      className={cx(
                        statusColorClass[item.status?.toLowerCase()],
                        "capitalize text-sm"
                      )}
                    >
                      {" "}
                      {item?.status}
                    </Tag>
                  </p>
                  <p>
                    <span className="font-medium text-sm"> Date: </span>
                    <span className="text-sm text-neutral-500 ">
                      {dayjs(item?.date)?.format("MMM DD, YYYY ")}
                    </span>
                  </p>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
}

OrderList.propTypes = {};

export default OrderList;
