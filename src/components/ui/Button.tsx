"use client";

import React from "react";
import { typography } from "@/theme/typography";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  children,
  className = "",
  ...props
}) => {
  // ---- SIZE CLASSES ----
  const sizeClasses =
    size === "sm"
      ? "px-4 py-2 text-[12px]"
      : size === "lg"
        ? "px-8 py-4 text-[15px]"
        : "px-6 py-3 text-[14px]";

  // ---- VARIANT CLASSES ----
  const variantClasses =
    variant === "outline"
      ? `border border-primary text-primary bg-transparent hover:bg-primary hover:text-white`
      : variant === "secondary"
        ? `bg-[#f5f7f9] text-heading hover:bg-[#e5e7eb]`
        : `bg-primary text-white hover:bg-[#2e35c9]`; // primary

  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={` ${typography.fontFamily} flex items-center justify-center rounded-[19px] font-semibold transition duration-200 ${sizeClasses} ${variantClasses} ${fullWidth ? "w-full" : "w-auto"} ${loading ? "cursor-not-allowed opacity-60" : ""} ${className} `}
    >
      {loading ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
