import React from "react";
import Sidebar from "../layouts/Sidebar";
import {
  CustomBubbleChart,
  CustomDoughnutChart,
  CustomMultiAxisChart,
  CustomPieChart,
  CustomScatterChart,
  CustomVerticalBarChart,
} from "../components/charts/CustomCharts";

export default function Dashboard() {
  return (
    <>
      <div className="w-screen flex flex-col gap-6">
        <div className="w-full flex gap-4">
          <div className="w-1/3">
            <CustomVerticalBarChart />
          </div>
          <div className="w-1/3">
            <CustomMultiAxisChart />
          </div>
        </div>
        <div className="w-full flex gap-4">
          <div className="w-1/4">
            <CustomPieChart />
          </div>
          <div className="w-1/4">
            <CustomDoughnutChart />
          </div>
          <div className="w-1/4">
            <CustomBubbleChart />
          </div>
          <div className="w-1/4">
            <CustomScatterChart />
          </div>
        </div>
      </div>
    </>
  );
}
