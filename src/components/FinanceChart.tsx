"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Passed: 40,
    Failed: 24,
  },
  {
    name: "Feb",
    Passed: 30,
    Failed: 13,
  },
  {
    name: "Mar",
    Passed: 20,
    Failed: 98,
  },
  {
    name: "Apr",
    Passed: 27,
    Failed: 39,
  },
  {
    name: "May",
    Passed: 18,
    Failed: 48,
  },
  {
    name: "Jun",
    Passed: 23,
    Failed: 38,
  },
  {
    name: "Jul",
    Passed: 34,
    Failed: 43,
  },
  {
    name: "Aug",
    Passed: 34,
    Failed: 43,
  },
  {
    name: "Sep",
    Passed: 34,
    Failed: 43,
  },
  {
    name: "Oct",
    Passed: 34,
    Failed: 43,
  },
  {
    name: "Nov",
    Passed: 34,
    Failed: 43,
  },
  {
    name: "Dec",
    Passed: 34,
    Failed: 43,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Lorem</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false}  tickMargin={20}/>
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="Passed"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="Failed" stroke="#CFCEFF" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
