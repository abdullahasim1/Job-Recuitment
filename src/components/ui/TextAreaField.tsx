"use client";

import { FormikProps } from "formik";

interface TextAreaFieldProps<T extends Record<string, unknown>> {
  label: string;
  name: keyof T;
  formik: FormikProps<T>;
  placeholder?: string;
  className?: string;
}

const TextAreaField = <T extends Record<string, unknown>>({
  label,
  name,
  formik,
  placeholder,
  className = "",
}: TextAreaFieldProps<T>) => {
  const fieldName = String(name);
  const error = formik.errors[fieldName];
  const touched = formik.touched[fieldName];
  const hasError = touched && error;

  return (
    <div className={className}>
      <label className="text-heading mb-2 block text-[11px] font-medium tracking-[0.54px]">
        {label}
      </label>

      <div className="relative">
        <textarea
          name={fieldName}
          value={formik.values[fieldName] as string}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={placeholder}
          className={`text-heading placeholder:text-secondary-light h-[75px] w-full resize-none rounded-[14px] border bg-white px-4 py-3 text-[11px] transition-colors focus:outline-none ${
            hasError ? "border-red-500 bg-red-50" : "border-light-gray focus:border-primary/50"
          }`}
        />
      </div>

      {hasError && <p className="mt-1 text-[10px] text-red-500">{String(error)}</p>}
    </div>
  );
};

export default TextAreaField;
