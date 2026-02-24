"use client";

import React from "react";
import { FormikProps } from "formik";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioFieldProps<T extends Record<string, unknown>> {
  label: string;
  name: keyof T;
  options: RadioOption[];
  formik: FormikProps<T>;
}

const RadioField = <T extends Record<string, unknown>>({
  label,
  name,
  options,
  formik,
}: RadioFieldProps<T>) => {
  const fieldName = String(name);
  const currentValue = formik.values[fieldName];
  const error = formik.errors[fieldName];
  const touched = formik.touched[fieldName];
  const hasError = touched && error;

  return (
    <div>
      <label className="text-heading mb-3 block text-[11px] font-medium tracking-[0.54px]">
        {label}
      </label>

      <div className="flex items-center gap-12">
        {options.map((option) => {
          const isSelected = currentValue === option.value;

          return (
            <label
              key={option.value}
              className="group flex cursor-pointer items-center gap-1.5 select-none"
              onClick={() => formik.setFieldValue(fieldName, option.value)}
            >
              <div
                className={`h-4 w-4 rounded-full border transition-all ${
                  isSelected
                    ? "border-primary border-[5px]"
                    : "border-light-gray group-hover:border-primary border-[1.33px]"
                }`}
              />
              <span
                className={`text-[11px] ${
                  isSelected ? "text-heading font-medium" : "text-secondary-light"
                }`}
              >
                {option.label}
              </span>
            </label>
          );
        })}
      </div>

      {hasError && <p className="mt-1 text-[10px] text-red-500">{String(error)}</p>}
    </div>
  );
};

export default RadioField;
