"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  FileText,
  HelpCircle,
  Settings,
  LogOut,
  X,
} from "lucide-react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const AdminSidebar = ({ isOpen, onClose }: SidebarProps) => {
  const pathname = usePathname();

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
    { icon: Users, label: "Applicants", path: "/admin/applicants" },
    { icon: Briefcase, label: "Job Postings", path: "/admin/jobs" },
    { icon: FileText, label: "Reports", path: "/admin/reports" },
  ];

  const bottomItems = [
    { icon: HelpCircle, label: "Support", path: "/admin/support" },
    { icon: Settings, label: "Settings", path: "/admin/settings" },
  ];

  const baseLinkStyles = `flex h-[45px] w-full items-center gap-3 rounded-xl px-4 transition-all duration-200`;
  const activeLinkStyles = "bg-primary text-white shadow-md shadow-indigo-200 font-semibold";
  const inactiveLinkStyles =
    "text-heading hover:bg-gray-50 hover:text-primary font-medium opacity-80 hover:opacity-100";

  const buttonBaseStyles = "transition-colors hover:opacity-70";

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        onClick={onClose}
      />

      <aside
        className={`border-light-gray fixed top-0 left-0 z-50 flex h-screen w-[274px] flex-col border-r bg-white transition-transform duration-300 ease-in-out md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between pt-0 pr-5 pb-[25px] pl-6">
          <Link href="/admin/dashboard" onClick={onClose}>
            {/* Same container dimensions and relative positioning */}
            <div className="relative h-10 w-40">
              <Image src="/logo.png" alt="Logo" width={140} height={28} priority />
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className={`${buttonBaseStyles} p-1 text-gray-500 md:hidden`}
          >
            <X size={24} />
          </button>
        </div>

        {/* Divider */}
        <div className="border-light-gray w-full border-t"></div>

        {/* MENU */}
        <nav className="mt-8 flex flex-col gap-2.5 px-4">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.path);
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={onClose}
                className={`${baseLinkStyles} ${isActive ? activeLinkStyles : inactiveLinkStyles}`}
              >
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[15px] leading-none">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col">
          <div className="mb-5 flex flex-col gap-2.5 px-4">
            {bottomItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={onClose}
                  className={`${baseLinkStyles} ${inactiveLinkStyles}`}
                >
                  <Icon size={22} strokeWidth={2} />
                  <span className="text-[15px] leading-none">{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="border-light-gray w-full border-t"></div>

          {/* User Profile */}
          <div className="flex items-center justify-between px-5 py-6">
            <div className="flex items-center gap-3">
              <div className="border-blue-accent relative h-[42px] w-[42px] overflow-hidden rounded-full border-2">
                <Image src="/user-placeholder.png" alt="User" fill className="object-cover" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-heading truncate text-[13px] font-bold">Abdullah Asim</span>
                <span className="text-muted truncate text-[10px]">abdullahasim.com</span>
              </div>
            </div>
            <button className={`${buttonBaseStyles} text-muted hover:text-red-600`}>
              <LogOut size={22} strokeWidth={2} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
