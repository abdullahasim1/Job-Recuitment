"use client";

import { Search, Bell, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

const DashboardHeader = ({ onMenuClick }: DashboardHeaderProps) => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1];
  const prevSegment = segments[segments.length - 2];

  const isAdmin = pathname.startsWith("/admin");

  // --- TITLE LOGIC ---
  let displayTitle = lastSegment?.replace(/-/g, " ");

  // 1. Dashboard Fix
  if (lastSegment === "dashboard" || !lastSegment) {
    displayTitle = isAdmin ? "Dashboard" : "Home";
  }

  const isNumericId = !isNaN(Number(lastSegment));

  if (prevSegment === "applicants" && isNumericId) {
    displayTitle = "View Applicant";
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-(--table-border) bg-white px-5 shadow-sm md:px-8">
      {/* LEFT SIDE: Menu Button (Mobile) + Title */}
      <div className="flex items-center gap-4">
        {/* HAMBURGER MENU */}
        <button
          onClick={onMenuClick}
          className="rounded-md p-1 text-(--secondary) hover:bg-(--bg-input) md:hidden"
        >
          <Menu size={24} />
        </button>

        {/* Updated Title */}
        <h2 className="text-heading text-[20px] font-semibold capitalize">{displayTitle}</h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-[15px]">
        {/* Search Bar */}
        <div className="relative hidden h-[30px] w-[243px] md:block">
          <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-(--muted)" size={14} />
          <input
            type="text"
            placeholder="Search"
            className="bg-input focus:border-primary h-full w-full rounded-[9px] border border-(--table-border) pr-4 pl-9 text-xs text-(--secondary) outline-none placeholder:text-(--muted)"
          />
        </div>

        {/* Mobile Search Icon */}
        <button className="text-(--secondary) md:hidden">
          <Search size={20} />
        </button>

        {/* Notification Icon */}
        <button className="hover:text-primary relative flex h-5 w-5 items-center justify-center text-(--secondary) transition-colors">
          <Bell size={20} />
          <span className="absolute top-0 right-0 h-1.5 w-1.5 rounded-full bg-(--status-rejected-text)"></span>
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
