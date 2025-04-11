"use client";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AttendanceChart = ({
  data,
}: {
  data: { name: string; present: number; absent: number }[];
}) => {
  return (
    /* ATTENDANCE CHART  */

    <ResponsiveContainer width="100%" height="90%">
      <BarChart data={data} barSize={20}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#fff" />
        <XAxis
          dataKey="name"
          axisLine={false}
          tick={{ fill: "#083765" }}
          tickLine={false}
        />
        <YAxis axisLine={false} />
        <Tooltip />
        <Legend
          className="font-bold bg-[#083765]"
          align="left"
          verticalAlign="top"
          wrapperStyle={{
            paddingTop: "20px",
            paddingBottom: "40px",
          }}
        />
        <Bar
          dataKey="present"
          fill="#083765"
          legendType="circle"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="absent"
          fill="#FFFB15"
          legendType="circle"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AttendanceChart;
