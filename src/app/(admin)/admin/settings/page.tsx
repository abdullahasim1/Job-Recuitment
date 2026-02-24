"use client";

import { useState } from "react";
import { Building, Users, GitPullRequest, Save } from "lucide-react";

const AdminSettingsPage = () => {
  const [activeTab, setActiveTab] = useState("company");
  const [loading, setLoading] = useState(false);

  // Admin Tabs
  const tabs = [
    { id: "company", label: "Company Info", icon: Building },
    { id: "team", label: "Team Management", icon: Users },
    { id: "pipeline", label: "Hiring Pipeline", icon: GitPullRequest },
  ];

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
          <p className="text-muted text-[14px]">
            Manage organization details, team members, and hiring process.
          </p>
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
        {/* Left Sidebar (Tabs) */}
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

        {/* Right Content Area */}
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
                      className="text-heading focus:border-primary h-[45px] w-full rounded-[14px] border border-(--table-border) px-4 text-[13px] transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-heading mb-2 block text-[12px] font-semibold">
                      Website
                    </label>
                    <input
                      type="text"
                      defaultValue="https://healthcare.com"
                      className="text-heading focus:border-primary h-[45px] w-full rounded-[14px] border border-(--table-border) px-4 text-[13px] transition-all outline-none"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-heading mb-2 block text-[12px] font-semibold">
                      Address
                    </label>
                    <textarea
                      className="text-heading focus:border-primary min-h-[100px] w-full resize-none rounded-[14px] border border-(--table-border) p-4 text-[13px] transition-all outline-none"
                      defaultValue="123 Medical Drive, Suite 100, New York, NY"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Team Tab */}
            {activeTab === "team" && (
              <div className="animate-in fade-in slide-in-from-bottom-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-heading text-[18px] font-semibold">Team Members</h2>
                  <button className="text-primary text-[13px] font-semibold hover:underline">
                    + Add New Member
                  </button>
                </div>

                {/* Mock List */}
                <div className="rounded-xl border border-(--table-border) bg-gray-50 p-8 text-center">
                  <p className="text-muted text-[13px]">Team management table will appear here.</p>
                </div>
              </div>
            )}

            {/* 3. Pipeline Tab */}
            {activeTab === "pipeline" && (
              <div className="animate-in fade-in slide-in-from-bottom-2 space-y-6">
                <h2 className="text-heading text-[18px] font-semibold">Hiring Stages</h2>
                <p className="text-muted text-[13px]">
                  Define the steps for your recruitment process.
                </p>

                <div className="space-y-3">
                  {["Applied", "Screening", "Interview", "Offer", "Hired"].map((stage, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-lg border border-(--table-border) bg-white p-3 shadow-sm"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-[11px] font-bold text-gray-600">
                        {i + 1}
                      </span>
                      <span className="text-heading text-[13px] font-medium">{stage}</span>
                    </div>
                  ))}
                  <button className="border-primary/40 text-primary hover:bg-primary/5 w-full rounded-lg border border-dashed p-3 text-[13px] font-medium transition-colors">
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

export default AdminSettingsPage;
