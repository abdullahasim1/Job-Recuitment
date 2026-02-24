"use client";

import { FormikProps } from "formik";

interface OTPInputProps<T extends Record<string, unknown>> {
  name: keyof T;
  formik: FormikProps<T>;
}

const OTPInput = <T extends Record<string, unknown>>({ name, formik }: OTPInputProps<T>) => {
  const fieldName = String(name);
  const otp: string = (formik.values[fieldName] as string) || "";
  const error = formik.errors[fieldName];
  const touched = formik.touched[fieldName];

  const handleInput = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(0, 1);
    const arr = otp.split("");
    arr[index] = digit;
    formik.setFieldValue(fieldName, arr.join("").slice(0, 4));
  };

  return (
    <div className="mt-6">
      <div className="flex justify-center gap-3 sm:gap-5">
        {[0, 1, 2, 3].map((i) => (
          <input
            key={i}
            maxLength={1}
            inputMode="numeric"
            placeholder="-"
            value={otp[i] || ""}
            onChange={(e) => handleInput(i, e.target.value)}
            onBlur={() => formik.setFieldTouched(fieldName, true)}
            className={`h-12 w-12 rounded-xl border text-center text-xl font-semibold text-gray-700 focus:ring-2 focus:ring-indigo-600 focus:outline-none sm:h-16 sm:w-16 sm:text-2xl ${touched && error ? "border-red-500" : "border-gray-300"} `}
          />
        ))}
      </div>

      {touched && error && <p className="mt-2 text-center text-sm text-red-500">{String(error)}</p>}
    </div>
  );
};

export default OTPInput;
