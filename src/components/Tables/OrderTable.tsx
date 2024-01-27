/** @jsxImportSource @emotion/react */
"use client";
import DocumentDownload from "@/assets/svg/document-download.svg";
import { IOrder, IUser } from "@/common/types/interface";
import { formatCurrency } from "@/common/utils/currency.utils";
import { Avatar, Card, Space, Table, TableProps } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import cx from "classnames";
import { css } from "@emotion/react";
import { statusColorClass } from "@/constants/data";

const columns: TableProps<IOrder>["columns"] = [
  {
    title: "Name",
    dataIndex: "customer",
    key: "name",
    render: (customer: IUser) => (
      <span className="text-base font-medium text-dark-blue flex items-center">
        <Avatar src={customer?.avatarUrl} className="mr-[10px]" />
        {customer?.firstName} {customer?.lastName}
      </span>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (date: string) => (
      <span className="text-base text-neutral-500 ">
        {dayjs(date)?.format("MMM DD, YYYY ")}
      </span>
    ),
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (amount: number) => (
      <span className="text-base font-medium text-secondary">
        {formatCurrency(amount?.toFixed(), "$")}
      </span>
    ),
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status: string) => (
      <span
        className={cx(statusColorClass[status?.toLowerCase()], "capitalize")}
      >
        {status}
      </span>
    ),
  },
  {
    title: "Invoice",
    key: "invoice",
    dataIndex: "name",
    render: (invoice: string) => (
      <span className="flex items-center space-x-[6px]">
        <DocumentDownload />
        <Link href="#" className="text-secondary">
          View
        </Link>
      </span>
    ),
  },
];

function OrderTable({
  data = [],
  className,
}: {
  data: IOrder[];
  className?: string;
}) {
  return (
    <Card
      className={className}
      css={css`
        & .ant-card-head {
          padding: 18px 24px !important;
          border-bottom: none;
        }
        & .ant-card-body {
          padding-top: 0px;
        }
      `}
      title={<h4 className="text-base sm:text-lg font-semibold">Last Orders</h4>}
      extra={
        <Link href="/#" className="text-status-paid text-lg font-medium">
          See All
        </Link>
      }
    >
      <Table
        columns={columns}
        dataSource={data}
        css={css`
          & .ant-table-thead .ant-table-cell {
            background: transparent;
            font-size: 16px;
            color: #9ca4ab;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
            &::before {
              display: none;
            }
          }
        `}
        pagination={false}
      />
    </Card>
  );
}

export default OrderTable;
