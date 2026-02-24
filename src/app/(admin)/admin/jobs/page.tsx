"use client";

import Link from "next/link";
import { Plus, Search, Filter, MoreHorizontal } from "lucide-react";

// Mock Data for Jobs List
const jobsList = [
  {
    id: 1,
    title: "Senior Mental Health Practitioner",
    department: "Clinical",
    type: "Full-time",
    status: "Active",
    applicants: 12,
  },
  {
    id: 2,
    title: "IT Support Specialist",
    department: "IT Support",
    type: "Contract",
    status: "Closed",
    applicants: 45,
  },
  {
    id: 3,
    title: "Nursing Assistant",
    department: "Nursing",
    type: "Part-time",
    status: "Active",
    applicants: 8,
  },
];

export default function JobsListPage() {
  return (
    <div className="space-y-6 p-1">
      {/* Header Section */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-heading text-[24px] font-bold tracking-tight">Jobs & Openings</h1>
          <p className="text-muted text-[14px]">
            Manage your job postings and view applicant stats.
          </p>
        </div>

        <Link
          href="/admin/jobs/create"
          className="bg-primary hover:bg-primary-hover flex h-[42px] items-center gap-2 rounded-lg px-4 text-[14px] font-semibold text-white shadow-sm transition-colors"
        >
          <Plus size={18} />
          <span>Post New Job</span>
        </Link>
      </div>

      {/* Filters & Search Bar */}
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="relative flex-1">
          <Search className="text-muted absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="focus:border-primary h-[42px] w-full rounded-lg border border-(--table-border) pr-4 pl-10 text-[14px] focus:outline-none"
          />
        </div>
        <button className="flex h-[42px] items-center gap-2 rounded-lg border border-(--table-border) bg-white px-4 text-[14px] font-medium text-(--secondary) hover:bg-(--bg-input)">
          <Filter size={16} />
          <span>Filter</span>
        </button>
      </div>

      {/* Jobs Table */}
      <div className="shadow-card overflow-hidden rounded-[10px] border border-(--table-border) bg-white">
        <table className="w-full text-left">
          <thead className="bg-(--bg-input) text-[12px] font-semibold tracking-wider text-(--muted) uppercase">
            <tr>
              <th className="px-6 py-4">Job Title</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Applicants</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-(--table-border)">
            {jobsList.map((job) => (
              <tr key={job.id} className="transition-colors hover:bg-gray-50">
                <td className="px-6 py-4">
                  <span className="text-heading block text-[14px] font-medium">{job.title}</span>
                  <span className="text-muted text-[12px]">ID: #{job.id}</span>
                </td>
                <td className="px-6 py-4 text-[14px] text-(--secondary)">{job.department}</td>
                <td className="px-6 py-4 text-[14px] text-(--secondary)">{job.type}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[12px] font-medium ${
                      job.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center text-[14px] font-medium text-(--primary)">
                  {job.applicants}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-muted hover:text-heading p-2">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
