import Rotate3d from "@/assets/svg/3d-rotate.svg";
import BoxIcon from "@/assets/svg/box-tick.svg";
import CoinIcon from "@/assets/svg/coin.svg";
import ShoppingCart from "@/assets/svg/shopping-cart.svg";
import PlatformList from "@/components/PlatformList";
import StatsCard from "@/components/StatsCard";
import OrderTable from "@/components/Tables/OrderTable";
import {
  dailySalesFallingEnd,
  dailySalesRisingEnd,
  orderTable,
  platformList,
} from "@/constants/data";
import { Col, Row } from "antd";
import SalesGraph from "./SalesGraph";
import Link from "next/link";
import OrderList from "@/components/Tables/CardAlternatives/OrderList";

export default function Home() {
  return (
    <div>
      <Row gutter={[16, 32]}>
        <Col xs={24} lg={14}>
          <SalesGraph />
        </Col>
        <Col xs={24} lg={10} className="space-y-4">
          <Row gutter={[16, 32]}>
            <Col xs={24} lg={12}>
              <StatsCard
                icon={<BoxIcon />}
                title="Total Order"
                value="1537"
                percentageValue={23.5}
                data={dailySalesRisingEnd}
              />
            </Col>
            <Col xs={24} lg={12}>
              <StatsCard
                icon={<Rotate3d />}
                title="Total Refund"
                value="270"
                percentageValue={-23.5}
                data={dailySalesFallingEnd}
              />
            </Col>
          </Row>
          <Row gutter={[16, 32]}>
            <Col xs={24} lg={12}>
              <StatsCard
                icon={<ShoppingCart />}
                title="Average Sales"
                value="1537"
                percentageValue={-23.5}
                data={dailySalesFallingEnd}
              />
            </Col>
            <Col xs={24} lg={12}>
              <StatsCard
                icon={<CoinIcon />}
                title="Total Income"
                value="$350.000"
                percentageValue={23.5}
                data={dailySalesRisingEnd}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={[16, 32]} className="mt-5">
        <Col xs={24} lg={14}>
          <OrderTable data={orderTable} className="hidden md:block" />
          <OrderList data={orderTable} className="md:hidden" />
        </Col>
        <Col xs={24} lg={10}>
          <PlatformList
            header={
              <div className="flex items-center justify-between">
                <p>Top Platform</p>
                <Link
                  href="/#"
                  className="text-status-paid text-lg font-medium"
                >
                  See All
                </Link>
              </div>
            }
            data={platformList}
          />
        </Col>
      </Row>
    </div>
  );
}
