"use client";

import { Search, Filter, MoreHorizontal, CheckCircle, Clock, AlertCircle } from "lucide-react";

// Mock Tickets Data
const tickets = [
  {
    id: "#T-1024",
    user: "Abdullah Asim",
    subject: "Cannot upload resume",
    status: "Open",
    date: "Today, 10:30 AM",
    priority: "High",
  },
  {
    id: "#T-1023",
    user: "John Doe",
    subject: "Reset password link not working",
    status: "Resolved",
    date: "Yesterday",
    priority: "Medium",
  },
  {
    id: "#T-1022",
    user: "Sarah Smith",
    subject: "Application status query",
    status: "Pending",
    date: "Jan 12, 2024",
    priority: "Low",
  },
  {
    id: "#T-1021",
    user: "Mike Ross",
    subject: "Error 404 on job page",
    status: "Open",
    date: "Jan 10, 2024",
    priority: "High",
  },
];

const AdminSupportPage = () => {
  return (
    <div className="space-y-6 p-1">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-heading text-[24px] font-bold tracking-tight">Support Tickets</h1>
          <p className="text-muted text-[14px]">Manage and resolve user inquiries.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex h-10 items-center gap-2 rounded-lg border border-(--table-border) bg-white px-4 text-[13px] font-medium text-(--secondary) hover:bg-gray-50">
            <Filter size={16} /> Filter
          </button>
          <button className="bg-primary hover:bg-primary-hover h-10 rounded-lg px-4 text-[13px] font-semibold text-white shadow-sm">
            Export CSV
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="text-muted absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search tickets by user or subject..."
          className="focus:border-primary h-[45px] w-full rounded-[14px] border border-(--table-border) pr-4 pl-10 text-[13px] outline-none"
        />
      </div>

      {/* Tickets Table */}
      <div className="shadow-card overflow-hidden rounded-[14px] border border-(--table-border) bg-white">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-[11px] font-semibold text-gray-500 uppercase">
            <tr>
              <th className="px-6 py-4">Ticket ID</th>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Subject</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-(--table-border)">
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="transition-colors hover:bg-gray-50">
                <td className="text-primary px-6 py-4 text-[13px] font-medium">{ticket.id}</td>
                <td className="text-heading px-6 py-4 text-[13px] font-medium">{ticket.user}</td>
                <td className="px-6 py-4 text-[13px] text-gray-600">{ticket.subject}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                      ticket.status === "Open"
                        ? "bg-red-50 text-red-600"
                        : ticket.status === "Resolved"
                          ? "bg-green-50 text-green-600"
                          : "bg-yellow-50 text-yellow-600"
                    }`}
                  >
                    {ticket.status === "Open" && <AlertCircle size={12} />}
                    {ticket.status === "Resolved" && <CheckCircle size={12} />}
                    {ticket.status === "Pending" && <Clock size={12} />}
                    {ticket.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-[12px] text-gray-500">{ticket.date}</td>
                <td className="px-6 py-4 text-right">
                  <button className="hover:text-heading text-gray-400 transition-colors">
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
};

export default AdminSupportPage;
