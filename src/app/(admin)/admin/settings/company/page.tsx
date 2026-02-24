"use client";

import { useState } from "react";
import { Building, Users, GitPullRequest, Save } from "lucide-react";

// Mock Team
const teamMembers = [
  { id: 1, name: "Dr. Sarah", role: "Admin", email: "sarah@clinic.com" },
  { id: 2, name: "John Doe", role: "Recruiter", email: "john@clinic.com" },
];
const tabs = [
  { id: "company", label: "Company Info", icon: Building },
  { id: "team", label: "Team Members", icon: Users },
  { id: "pipeline", label: "Hiring Pipeline", icon: GitPullRequest },
];
const AdminCompanyPage = () => {
  const [activeTab, setActiveTab] = useState("company");
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-6 p-1">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-heading text-[24px] font-bold tracking-tight">Company Settings</h1>
          <p className="text-muted text-[14px]">Manage organization details and team access.</p>
        </div>

        <button
          onClick={handleSave}
          disabled={loading}
          className="bg-primary hover:bg-primary-hover flex h-[42px] items-center gap-2 rounded-lg px-6 text-[14px] font-semibold text-white shadow-sm transition-colors disabled:opacity-70"
        >
          {loading ? (
            "Saving..."
          ) : (
            <>
              <Save size={16} /> Save Configuration
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {/* Sidebar */}
        <div className="col-span-1">
          <div className="shadow-card overflow-hidden rounded-[14px] border border-(--table-border) bg-white p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-[13px] font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary/10 text-primary"
                    : "text-(--secondary) hover:bg-gray-50"
                }`}
              >
                <tab.icon size={18} /> {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="col-span-1 md:col-span-3">
          <div className="shadow-card min-h-[500px] rounded-[14px] border border-(--table-border) bg-white p-8">
            {/* 1. Company Info Tab */}
            {activeTab === "company" && (
              <div className="animate-in fade-in slide-in-from-bottom-2 space-y-6">
                <h2 className="text-heading text-[18px] font-semibold">Organization Details</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="text-heading mb-2 block text-[12px] font-semibold">
                      Company Name
                    </label>
                    <input
                      type="text"
                      defaultValue="HealthCare Plus"
                      className="text-heading focus:border-primary h-[45px] w-full rounded-[14px] border border-(--table-border) px-4 text-[13px] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-heading mb-2 block text-[12px] font-semibold">
                      Website
                    </label>
                    <input
                      type="text"
                      defaultValue="https://healthcare.com"
                      className="text-heading focus:border-primary h-[45px] w-full rounded-[14px] border border-(--table-border) px-4 text-[13px] outline-none"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-heading mb-2 block text-[12px] font-semibold">
                      Address
                    </label>
                    <textarea
                      className="text-heading focus:border-primary min-h-[100px] w-full resize-none rounded-[14px] border border-(--table-border) p-4 text-[13px] outline-none"
                      defaultValue="123 Medical Drive, Suite 100"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Team Tab */}
            {activeTab === "team" && (
              <div className="animate-in fade-in slide-in-from-bottom-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-heading text-[18px] font-semibold">Team Management</h2>
                  <button className="text-primary text-[12px] font-bold hover:underline">
                    + Add Member
                  </button>
                </div>
                <div className="overflow-hidden rounded-xl border border-(--table-border)">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 text-[11px] text-gray-500 uppercase">
                      <tr>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Role</th>
                        <th className="px-4 py-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-(--table-border)">
                      {teamMembers.map((m) => (
                        <tr key={m.id}>
                          <td className="text-heading px-4 py-3 text-[13px] font-medium">
                            {m.name} <br />{" "}
                            <span className="text-muted text-[11px] font-normal">{m.email}</span>
                          </td>
                          <td className="px-4 py-3">
                            <span className="rounded bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-700">
                              {m.role}
                            </span>
                          </td>
                          <td className="cursor-pointer px-4 py-3 text-right text-[12px] font-medium text-red-500 hover:underline">
                            Remove
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 3. Pipeline Tab */}
            {activeTab === "pipeline" && (
              <div className="animate-in fade-in slide-in-from-bottom-2 space-y-6">
                <h2 className="text-heading text-[18px] font-semibold">Hiring Stages</h2>
                <div className="space-y-3">
                  {["Applied", "Screening", "Interview", "Offer", "Hired"].map((stage, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-lg border border-(--table-border) bg-gray-50 p-3"
                    >
                      <span className="text-heading text-[13px] font-medium">
                        {i + 1}. {stage}
                      </span>
                    </div>
                  ))}
                  <button className="border-primary/40 text-primary hover:bg-primary/5 w-full rounded-lg border border-dashed p-3 text-[13px] font-medium">
                    + Add Custom Stage
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCompanyPage;
