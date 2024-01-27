"use client";

import SalesTrendChart from "@/components/Charts/SalesTrendChart";
import NoSsr from "@/components/NoSsr";
import { salesByMonth } from "@/constants/data";
import { useState } from "react";

function SalesGraph() {
  const [filterVlaue, setFilterValue] = useState<string | undefined>();
  return (
    <div>
      <SalesTrendChart
        salesData={salesByMonth}
        filterValue={filterVlaue}
        onFilterChange={setFilterValue}
      />
    </div>
  );
}

export default SalesGraph;
