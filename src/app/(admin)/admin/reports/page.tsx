"use client";

import {
  Download,
  Calendar,
  Users,
  Briefcase,
  CheckCircle,
  XCircle,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";

// --- Mock Data ---
const stats = [
  {
    label: "Total Applicants",
    value: "1,240",
    change: "+12%",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "Active Jobs",
    value: "18",
    change: "+2",
    icon: Briefcase,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    label: "Hired Candidates",
    value: "45",
    change: "+5%",
    icon: CheckCircle,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    label: "Rejected",
    value: "120",
    change: "-2%",
    icon: XCircle,
    color: "text-red-600",
    bg: "bg-red-50",
  },
];

const jobPerformance = [
  {
    id: 1,
    title: "Senior Mental Health Practitioner",
    views: "2.4k",
    applicants: 145,
    hired: 2,
    status: "Active",
  },
  {
    id: 2,
    title: "IT Support Specialist",
    views: "1.1k",
    applicants: 56,
    hired: 1,
    status: "Closed",
  },
  { id: 3, title: "Nursing Assistant", views: "3.2k", applicants: 210, hired: 5, status: "Active" },
  { id: 4, title: "HR Manager", views: "800", applicants: 24, hired: 0, status: "Active" },
];

const chartData = [40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95];

// 1. Months Array Defined Here
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const ReportsPage = () => {
  return (
    <div className="space-y-6 p-1">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-heading text-[24px] font-bold tracking-tight">Reports & Analytics</h1>
          <p className="text-muted text-[14px]">Overview of your recruitment performance.</p>
        </div>

        <div className="flex gap-3">
          <button className="flex h-[42px] items-center gap-2 rounded-lg border border-(--table-border) bg-white px-4 text-[13px] font-medium text-(--secondary) transition-colors hover:bg-(--bg-input)">
            <Calendar size={16} className="text-(--muted)" />
            <span>Last 30 Days</span>
            <ChevronDown size={14} className="ml-1 text-(--muted)" />
          </button>

          <button className="bg-primary hover:bg-primary-hover flex h-[42px] items-center gap-2 rounded-lg px-4 text-[14px] font-semibold text-white shadow-sm transition-colors">
            <Download size={18} />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="shadow-card rounded-[14px] border border-(--table-border) bg-white p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted text-[13px] font-medium">{stat.label}</p>
                <h3 className="text-heading mt-1 text-[26px] font-bold">{stat.value}</h3>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${stat.bg}`}>
                <stat.icon size={20} className={stat.color} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span
                className={`text-[12px] font-medium ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}
              >
                {stat.change}
              </span>
              <span className="text-muted text-[12px]">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left: Bar Chart */}
        <div className="shadow-card col-span-1 flex flex-col rounded-[14px] border border-(--table-border) bg-white p-6 lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-heading text-[16px] font-bold">Applications Overview</h3>
            <button className="text-muted hover:text-primary p-1">
              <MoreHorizontal size={18} />
            </button>
          </div>

          <div className="flex h-[280px] w-full items-end justify-between gap-2 border-b border-gray-100 pb-2">
            {chartData.map((height, i) => (
              <div key={i} className="group relative flex h-full w-full items-end">
                <div
                  className="mx-auto w-[70%] rounded-t-md bg-blue-100 transition-all duration-300 group-hover:bg-blue-600"
                  style={{ height: `${height}%` }}
                ></div>
                <div className="absolute -top-10 left-1/2 hidden -translate-x-1/2 flex-col items-center opacity-0 transition-opacity group-hover:flex group-hover:opacity-100">
                  <span className="rounded bg-gray-800 px-2 py-1 text-[10px] whitespace-nowrap text-white shadow-lg">
                    {height * 2} Applicants
                  </span>
                  <div className="h-0 w-0 border-x-4 border-t-4 border-x-transparent border-t-gray-800"></div>
                </div>
              </div>
            ))}
          </div>

          {/* 2. Updated X-Axis Labels using Map */}
          <div className="text-muted mt-3 flex justify-between text-[11px] font-medium">
            {months.map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>

        {/* Right: Top Jobs */}
        <div className="shadow-card rounded-[14px] border border-(--table-border) bg-white">
          <div className="border-b border-(--table-border) px-6 py-5">
            <h3 className="text-heading text-[16px] font-bold">Job Performance</h3>
          </div>
          <div className="divide-y divide-(--table-border)">
            {jobPerformance.map((job) => (
              <div
                key={job.id}
                className="flex items-center justify-between p-5 transition-colors hover:bg-gray-50"
              >
                <div>
                  <h4 className="text-heading text-[13px] font-semibold">{job.title}</h4>
                  <div className="text-muted mt-1 flex items-center gap-3 text-[12px]">
                    <span>{job.views} Views</span>
                    <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                    <span>{job.applicants} Applicants</span>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      job.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {job.hired} Hired
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-(--table-border) p-4 text-center">
            <button className="text-primary text-[13px] font-medium hover:underline">
              View All Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
