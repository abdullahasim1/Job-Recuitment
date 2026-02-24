"use client";

import { FormikProps } from "formik";
import { ChevronDown } from "lucide-react";

interface Option {
  label: string;
  value: string | number;
}

interface SelectFieldProps<T extends Record<string, unknown>> {
  label: string;
  name: keyof T;
  formik: FormikProps<T>;
  options: Option[];
  placeholder?: string;
  className?: string;
}

const SelectField = <T extends Record<string, unknown>>({
  label,
  name,
  formik,
  options,
  placeholder = "Select option",
  className = "",
}: SelectFieldProps<T>) => {
  const fieldName = String(name);
  const error = formik.errors[fieldName];
  const touched = formik.touched[fieldName];
  const hasError = touched && error;

  return (
    <div className={`w-full ${className}`}>
      <label className="text-heading mb-[7px] block text-[11px] font-medium tracking-[0.54px]">
        {label}
      </label>

      <div className="relative">
        <select
          name={fieldName}
          value={formik.values[fieldName] as string}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`text-heading placeholder:text-secondary-light focus:border-primary block h-[45px] w-full appearance-none rounded-[14px] border bg-white px-3.5 text-[11px] shadow-sm transition-all outline-none ${
            hasError ? "border-red-500 bg-red-50" : "border-light-gray"
          }`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Custom Arrow Icon */}
        <ChevronDown className="text-secondary pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 opacity-50" />
      </div>

      {hasError && <p className="mt-1 text-[10px] font-medium text-red-500">{String(error)}</p>}
    </div>
  );
};

export default SelectField;
