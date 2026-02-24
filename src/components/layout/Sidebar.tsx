"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Briefcase,
  FileText,
  MessageSquare,
  HelpCircle,
  Settings,
  LogOut,
  X,
  Star,
} from "lucide-react";
import { typography } from "@/theme/typography";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: "Home", path: "/dashboard" },
    { icon: Briefcase, label: "Jobs", path: "/jobs" },
    { icon: FileText, label: "Applied Jobs", path: "/applied-jobs" },
    { icon: MessageSquare, label: "Interviews", path: "/interviews" },
    { path: "/feedback", label: "Feedback", icon: Star },
  ];

  const bottomItems = [
    { icon: HelpCircle, label: "Support", path: "/support" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  const baseLinkStyles = `flex h-[45px] w-full items-center gap-[12px] rounded-[12px] px-[16px] transition-all duration-200 ${typography.fontFamily}`;
  const activeLinkStyles = "bg-primary text-white shadow-md shadow-indigo-200 font-semibold";
  const inactiveLinkStyles =
    "text-heading hover:bg-gray-50 hover:text-primary font-medium opacity-80 hover:opacity-100";

  const buttonBaseStyles = "transition-colors hover:opacity-70";

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`border-light-gray fixed top-0 left-0 z-50 flex h-screen w-[274px] flex-col border-r bg-white transition-transform duration-300 ease-in-out ${typography.fontFamily} /* Desktop: Hamesha dikhao */ /* Mobile: State k hisaab se slide kro */ md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} `}
      >
        {/* 1. LOGO SECTION  */}
        <div className="flex items-center justify-between pt-0 pr-5 pb-[25px] pl-6">
          <Link href="/dashboard" onClick={onClose}>
            <div className="relative h-10 w-40">
              <Image src="/logo.png" alt="Logo" width={140} height={28} />
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

        {/* DIVIDER */}
        <div className="border-light-gray w-full border-t"></div>

        {/* 2. NAVIGATION ITEMS */}
        <nav className="mt-[30px] flex flex-col gap-2.5 px-4">
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

        {/* 3. BOTTOM NAVIGATION */}
        <div className="flex flex-col">
          <div className="mb-5 flex flex-col gap-2.5 px-4">
            {bottomItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.path);

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={onClose}
                  className={`${baseLinkStyles} ${isActive ? activeLinkStyles : inactiveLinkStyles}`}
                >
                  <Icon size={22} strokeWidth={2} />
                  <span className="text-[15px] leading-none">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* DIVIDER */}
          <div className="border-gray-opacity w-full border border-t"></div>

          {/* 4. USER PROFILE */}
          <div className="flex items-center justify-between px-5 py-6">
            <div className="flex items-center gap-3">
              {/* User Image */}
              <div className="border-blue-accent relative h-[42px] w-[42px] overflow-hidden rounded-full border-2">
                <Image src="/user-placeholder.png" alt="User" fill className="object-cover" />
              </div>

              {/* User Details */}
              <div className="flex flex-col overflow-hidden">
                <span className="text-heading truncate text-[13px] font-bold">Abdullah Asim</span>
                <span className="truncate text-[8px] text-gray-500">abdullahasim213@gmail.com</span>
              </div>
            </div>

            {/* Logout Button */}
            <button
              type="button"
              aria-label="Logout"
              className={`${buttonBaseStyles} text-black-400`}
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
