"use client";
import React, { PureComponent } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

import { MdOutlineGirl } from "react-icons/md";
import { MdOutlineBoy } from "react-icons/md";

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const CountChart = ({ boys, girls }: { boys: number; girls: number }) => {
  const data = [
    {
      name: "Total",
      count: boys + girls,
      fill: "#FFF",
    },
    {
      name: "Girls",
      count: girls,
      fill: "#FFFB15",
    },
    {
      name: "Boys",
      count: boys,
      fill: "#083765",
    },
  ];
  return (
    <div className="relative w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="100%"
          barSize={32}
          data={data}
        >
          <RadialBar
            label={{ position: "insideStart", fill: "#fff" }}
            background
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <MdOutlineBoy className="text-4xl text-[#083765]" />
        <MdOutlineGirl className="text-4xl text-[#FFFB15] font-bold" />
      </div>
    </div>
  );
};

export default CountChart;
