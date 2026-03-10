"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 400 },
  { month: "Feb", revenue: 800 },
  { month: "Mar", revenue: 600 },
  { month: "Apr", revenue: 1000 },
];

export default function RevenueChart() {
  return (
    <div className="w-full h-72 sm:h-80 md:h-96 bg-white dark:bg-slate-800 p-4 rounded shadow">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderRadius: 6 }} />
          <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}