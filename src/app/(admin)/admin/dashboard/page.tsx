"use client";

import { TrendingUp, Users, Briefcase, FileText, ChevronDown, User } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const CHART_COLORS = {
  primary: "var(--chart-primary)",
  teal: "var(--chart-teal)",
  grayBar: "var(--chart-gray-bar)",
  text: "var(--chart-text)",
};

// --- STATS DATA ---
const statsData = [
  {
    title: "Total Employees",
    value: "856",
    label: "Employee",
    trend: "+10.0%",
    icon: Users,
    trendColor: "text-[#0B8A00] bg-[#0B8A00]/10",
  },
  {
    title: "Job View",
    value: "3,342",
    label: "Viewers",
    trend: "+22.0%",
    icon: Briefcase,
    trendColor: "text-[#0B8A00] bg-[#0B8A00]/10",
  },
  {
    title: "Job Applied",
    value: "77",
    label: "Applicants",
    trend: "+12.0%",
    icon: FileText,
    trendColor: "text-[#0B8A00] bg-[#0B8A00]/10",
  },
];

const barData = [
  { name: "Jan", view: 60, applied: 45 },
  { name: "Feb", view: 75, applied: 60 },
  { name: "Mar", view: 85, applied: 70 },
  { name: "Apr", view: 60, applied: 40 },
  { name: "May", view: 45, applied: 35 },
  { name: "Jun", view: 70, applied: 55 },
  { name: "Jul", view: 80, applied: 60 },
  { name: "Aug", view: 95, applied: 77 },
  { name: "Sep", view: 80, applied: 65 },
  { name: "Oct", view: 60, applied: 45 },
  { name: "Nov", view: 50, applied: 30 },
  { name: "Dec", view: 85, applied: 70 },
];

// --- PIE DATA ---
// 1. Male Layer (Normal Size)
const malePieData = [
  { name: "Male", value: 65, color: CHART_COLORS.teal },
  { name: "Female", value: 35, color: "transparent" },
];

// 2. Female Layer (Bigger/Thicker Size)
const femalePieData = [
  { name: "Male", value: 65, color: "transparent" },
  { name: "Female", value: 35, color: CHART_COLORS.primary },
];

// Tooltip Component
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; dataKey: string }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const appliedValue = payload.find((p) => p.dataKey === "applied")?.value;
    return (
      <div className="relative flex flex-col items-center">
        <div className="bg-primary mb-1 rounded-sm px-2 py-1 text-[10px] font-bold text-white">
          {appliedValue}
        </div>
        <div className="border-t-primary h-0 w-0 border-t-4 border-r-4 border-l-4 border-r-transparent border-l-transparent"></div>
      </div>
    );
  }
  return null;
};

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      {/* 2. Stats Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="border-light-gray shadow-card rounded-2xl border bg-white p-6"
          >
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-heading text-sm font-semibold">{stat.title}</h3>
              <span
                className={`flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-bold ${stat.trendColor}`}
              >
                <TrendingUp size={12} /> {stat.trend}
              </span>
            </div>
            <div className="text-heading text-[32px] font-bold">{stat.value}</div>
            <p className="text-muted mt-1 text-xs">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* 3. Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        {/* --- Job Statistics --- */}
        <div className="border-light-gray shadow-card rounded-2xl border bg-white p-6">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <h3 className="text-heading text-lg font-bold">Job Statistics</h3>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-xs border border-gray-100 bg-[#F2F4F7]"></span>
                  <span className="text-heading text-xs font-medium">Job View</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-primary h-3 w-3 rounded-xs"></span>
                  <span className="text-heading text-xs font-medium">Job Applied</span>
                </div>
              </div>
              <button className="border-light-gray text-heading flex items-center gap-2 rounded-lg border bg-white px-3 py-1.5 text-[12px] font-semibold shadow-sm transition-colors hover:bg-gray-50">
                This Month
                <ChevronDown size={14} className="text-muted" />
              </button>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} barGap={0}>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#E5E7EB" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: CHART_COLORS.text, fontSize: 12, fontWeight: 500 }}
                  dy={15}
                  xAxisId={0}
                />
                <XAxis dataKey="name" axisLine={false} tickLine={false} hide xAxisId={1} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: CHART_COLORS.text, fontSize: 12, fontWeight: 500 }}
                  ticks={[0, 20, 40, 60, 80, 100]}
                  domain={[0, 100]}
                />
                <Tooltip cursor={false} content={<CustomTooltip />} />
                <Bar
                  dataKey="view"
                  fill={CHART_COLORS.grayBar}
                  barSize={50}
                  radius={[6, 6, 0, 0]}
                  xAxisId={0}
                />
                <Bar
                  dataKey="applied"
                  fill={CHART_COLORS.primary}
                  barSize={50}
                  radius={[6, 6, 0, 0]}
                  xAxisId={1}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* --- Employee Composition Card --- */}
        <div className="border-light-gray shadow-card relative flex flex-col items-center rounded-2xl border bg-white p-6">
          <h3 className="text-heading mb-2 self-start text-lg font-bold">Employee Composition</h3>

          {/* 1. CHART AREA */}
          <div className="relative flex h-60 w-full items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                {/* Layer 1: Male (Green) */}
                <Pie
                  data={malePieData}
                  innerRadius={68}
                  outerRadius={85}
                  paddingAngle={0}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  stroke="none"
                >
                  {malePieData.map((entry, index) => (
                    <Cell key={`cell-male-${index}`} fill={entry.color} />
                  ))}
                </Pie>

                {/* Layer 2: Female (Blue) */}
                <Pie
                  data={femalePieData}
                  innerRadius={68}
                  outerRadius={98}
                  paddingAngle={0}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  stroke="none"
                >
                  {femalePieData.map((entry, index) => (
                    <Cell key={`cell-female-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Female Badge (Left) */}
            <div className="absolute top-[40%] left-[5%] z-10 flex items-center gap-3 rounded-xl border border-gray-100/50 bg-white p-3 shadow-xl xl:left-[12%]">
              <User className="text-primary h-6 w-6" fill="currentColor" />
              <span className="text-heading text-xl font-bold">35%</span>
            </div>

            {/* Male Badge (Right) */}
            <div className="absolute right-[5%] bottom-[25%] z-10 flex items-center gap-3 rounded-xl border border-gray-100/50 bg-white p-3 shadow-xl xl:right-[12%]">
              <span className="text-heading text-xl font-bold">65%</span>
              <User className="h-6 w-6 text-[#16C098]" fill="currentColor" />
            </div>
          </div>

          {/* 2. TEXT AREA */}
          <div className="-mt-5 flex flex-col items-center justify-center">
            <span className="text-heading text-3xl font-bold">856</span>
            <span className="text-muted text-sm font-medium">employee total</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
