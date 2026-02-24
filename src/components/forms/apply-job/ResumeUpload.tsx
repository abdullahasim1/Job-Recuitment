"use client";

import React from "react";
import { FormikProps } from "formik";
import { ApplyJobFormValues } from "@/components/forms/apply-job/PersonalInfo";

// --- HELPER 1: File Input ---
const FileField = ({
  label,
  name,
  formik,
}: {
  label: string;
  name: keyof ApplyJobFormValues;
  formik: FormikProps<ApplyJobFormValues>;
}) => {
  const value = formik.values[name] as File | null;
  const error = formik.errors[name] as string;
  const touched = formik.touched[name];
  const hasError = touched && error;

  return (
    <div>
      <label className="text-heading mb-2 block text-[11px] font-medium tracking-[0.54px]">
        {label}
      </label>

      <div
        className={`flex h-[45px] items-center gap-2 rounded-[14px] border bg-white px-3 transition-colors ${
          hasError ? "border-red-500 bg-red-50" : "border-light-gray hover:border-primary/50"
        }`}
      >
        <label className="border-light-gray flex h-full cursor-pointer items-center border-r pr-4 select-none">
          <span className="text-secondary-medium hover:text-primary text-[11px] font-medium whitespace-nowrap transition-colors">
            Choose File
          </span>
          <input
            type="file"
            className="hidden"
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={(e) => {
              if (e.currentTarget.files && e.currentTarget.files[0]) {
                formik.setFieldValue(name as string, e.currentTarget.files[0]);
              }
            }}
          />
        </label>

        <span
          className={`flex-1 truncate text-[11px] ${
            value ? "text-heading font-medium" : "text-secondary-light"
          }`}
        >
          {value ? value.name : "Supported image files: PDF, PNG, JPEG"}
        </span>
      </div>

      {hasError && <p className="mt-1 text-[10px] text-red-500">{error}</p>}
    </div>
  );
};

// --- HELPER 2: Text Area ---
const TextAreaField = ({
  label,
  name,
  placeholder,
  formik,
}: {
  label: string;
  name: keyof ApplyJobFormValues;
  placeholder: string;
  formik: FormikProps<ApplyJobFormValues>;
}) => {
  return (
    <div>
      <label className="text-heading mb-2 block text-[11px] font-medium tracking-[0.54px]">
        {label}
      </label>
      <div className="relative">
        <textarea
          {...formik.getFieldProps(name as string)}
          placeholder={placeholder}
          className="border-light-gray text-heading placeholder:text-secondary-light focus:border-primary/50 h-[75px] w-full resize-none rounded-[14px] border bg-white px-4 py-3 text-[11px] transition-colors focus:outline-none"
        />
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const ResumeUpload = ({ formik }: { formik: FormikProps<ApplyJobFormValues> }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <FileField label="Upload Resume*" name="resume" formik={formik} />

        <FileField label="Upload Cover Letter (Optional)" name="coverLetter" formik={formik} />
      </div>

      <TextAreaField
        label="Or paste your cover letter here (Optional)"
        name="coverText"
        placeholder="Paste your cover letter..."
        formik={formik}
      />
    </div>
  );
};

export default ResumeUpload;
