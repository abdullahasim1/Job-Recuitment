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
      ? `border border-primary bg-white text-primary hover:bg-primary-light hover:shadow-primary-sm`
      : variant === "secondary"
        ? `bg-[#f3f4f6] text-heading hover:bg-[#e5e7eb]`
        : `bg-primary-gradient text-white hover:bg-primary-gradient-hover shadow-primary-sm hover:shadow-primary-md`; // primary

  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={` ${typography.fontFamily} flex items-center justify-center rounded-[19px] font-semibold transition-all duration-200 active:scale-[0.98] ${sizeClasses} ${variantClasses} ${fullWidth ? "w-full" : "w-auto"} ${loading ? "cursor-not-allowed opacity-60" : ""} ${className} `}
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
