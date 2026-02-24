"use client";

import { FormikProps } from "formik";
import { typography } from "@/theme/typography";

interface RoleItem {
  id: string;
  title: string;
  description: string;
}

interface RoleSelectFieldProps<T extends Record<string, unknown>> {
  name: keyof T;
  formik: FormikProps<T>;
  options: RoleItem[] | null | undefined;
}

const RoleSelectField = <T extends Record<string, unknown>>({
  name,
  formik,
  options,
}: RoleSelectFieldProps<T>) => {
  const fieldName = String(name);

  return (
    <>
      {/* Roles Grid */}
      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {options?.map((role) => (
          <label
            key={role.id}
            htmlFor={role.id}
            className={`${typography.fontFamily} cursor-pointer rounded-lg border p-4 transition ${
              formik.values[fieldName] === role.id
                ? "border-indigo-600 bg-indigo-50"
                : "border-gray-300 hover:bg-gray-50"
            } ${
              formik.touched[fieldName] && formik.errors[fieldName] && !formik.values[fieldName]
                ? "border-red-500"
                : ""
            } `}
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id={role.id}
                name={fieldName}
                value={role.id}
                checked={formik.values[fieldName] === role.id}
                onChange={formik.handleChange}
                className="h-4 w-4 text-indigo-600"
              />

              <h3 className={`${typography.label} text-gray-900`}>{role.title}</h3>
            </div>

            <p className={`mt-1 ${typography.body} line-clamp-2`}>{role.description}</p>
          </label>
        ))}
      </div>

      {/* Error Message */}
      {formik.touched[fieldName] && formik.errors[fieldName] && (
        <p className={`${typography.fontFamily} ${typography.small} mt-1 text-red-500`}>
          {String(formik.errors[fieldName])}
        </p>
      )}
    </>
  );
};

export default RoleSelectField;
