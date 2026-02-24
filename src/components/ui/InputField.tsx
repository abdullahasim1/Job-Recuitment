"use client";

import { FormikProps } from "formik";

interface InputFieldProps<T extends Record<string, unknown>> {
  label?: string;
  name: keyof T;
  type?: string;
  placeholder?: string;
  formik: FormikProps<T>;
  className?: string;
  disabled?: boolean;
}

const InputField = <T extends Record<string, unknown>>({
  label,
  name,
  type = "text",
  placeholder,
  formik,
  className = "",
  disabled = false,
}: InputFieldProps<T>) => {
  const fieldName = String(name);
  const { values, errors, touched, handleChange, handleBlur } = formik;

  const value = values[fieldName];
  const error = errors[fieldName];
  const isTouched = touched[fieldName];
  const isCheckbox = type === "checkbox";

  return (
    <div className={!isCheckbox ? "w-full" : "flex items-center gap-2"}>
      {label && !isCheckbox && (
        <label
          htmlFor={fieldName}
          className="text-heading mb-[7px] block text-[11px] leading-[29px] font-medium tracking-[0.54px]"
        >
          {label}
        </label>
      )}

      <input
        id={fieldName}
        name={fieldName}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={isCheckbox ? undefined : (value as string)}
        checked={isCheckbox ? Boolean(value) : undefined}
        onChange={handleChange}
        onBlur={handleBlur}
        className={` ${
          !isCheckbox
            ? `text-heading placeholder:text-secondary-light block h-[45px] w-full rounded-[14px] border bg-white px-3.5 text-[11px] shadow-sm transition-all outline-none`
            : "text-primary focus:ring-primary border-light-gray accent-primary h-4 w-4 rounded"
        } ${
          !isCheckbox && isTouched && error
            ? "border-red-500 bg-red-50 focus:border-red-500"
            : "border-light-gray hover:border-primary focus:border-primary"
        } ${disabled ? "cursor-not-allowed bg-gray-100 opacity-50" : ""} ${className} `}
      />

      {isCheckbox && label && (
        <label
          htmlFor={fieldName}
          className="text-secondary cursor-pointer text-[12px] select-none"
        >
          {label}
        </label>
      )}

      {!isCheckbox && isTouched && error && (
        <p className="mt-1 text-[10px] font-medium text-red-500">{String(error)}</p>
      )}
    </div>
  );
};

export default InputField;
