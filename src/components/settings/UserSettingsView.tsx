"use client";

import { useState } from "react";
import { User, Lock, Bell, Camera, Save } from "lucide-react";

export const UserSettingsView = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [loading, setLoading] = useState(false);

  const tabs = [
    { id: "profile", label: "My Profile", icon: User },
    { id: "security", label: "Security", icon: Lock },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-heading text-[24px] font-bold tracking-tight">My Profile</h1>
          <p className="text-muted text-[14px]">Manage your personal details.</p>
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
              <Save size={16} /> Save Changes
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
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="animate-in fade-in slide-in-from-bottom-2 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="relative flex h-[100px] w-[100px] items-center justify-center rounded-full border border-(--table-border) bg-gray-50">
                    <User size={40} className="text-gray-300" />
                    <button className="hover:text-primary absolute right-0 bottom-0 rounded-full border border-gray-200 bg-white p-2 shadow-sm">
                      <Camera size={14} />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-heading text-[16px] font-bold">Profile Photo</h3>
                    <p className="text-muted text-[12px]">Max file size 2MB.</p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="text-heading mb-2 block text-[12px] font-semibold">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Abdullah"
                      className="text-heading focus:border-primary h-[45px] w-full rounded-[14px] border border-(--table-border) px-4 text-[13px] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-heading mb-2 block text-[12px] font-semibold">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Asim"
                      className="text-heading focus:border-primary h-[45px] w-full rounded-[14px] border border-(--table-border) px-4 text-[13px] outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="animate-in fade-in slide-in-from-bottom-2 max-w-md space-y-4">
                <h2 className="text-heading text-[18px] font-semibold">Change Password</h2>
                <input
                  type="password"
                  placeholder="Current Password"
                  className="text-heading focus:border-primary h-[45px] w-full rounded-[14px] border border-(--table-border) px-4 text-[13px] outline-none"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="text-heading focus:border-primary h-[45px] w-full rounded-[14px] border border-(--table-border) px-4 text-[13px] outline-none"
                />
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <div className="animate-in fade-in slide-in-from-bottom-2">
                <h2 className="text-heading text-[18px] font-semibold">Notifications</h2>
                <p className="text-muted text-[13px]">Manage your email alerts.</p>
                {/* Toggles yahan ayen gy */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
