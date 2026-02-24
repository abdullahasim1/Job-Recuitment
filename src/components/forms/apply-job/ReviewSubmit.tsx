"use client";

import { FormikProps } from "formik";
import { AlertCircle } from "lucide-react";
import { ApplyJobFormValues } from "@/components/forms/apply-job/PersonalInfo";

interface ReviewSubmitProps {
  formik: FormikProps<ApplyJobFormValues>;
}

const ReviewSubmit = ({ formik }: ReviewSubmitProps) => {
  const { values, setFieldValue, errors, touched } = formik;
  const isAgreed = values.agreed;

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <p className="text-heading/70 text-[11px] font-medium tracking-[0.54px]">
        Please review your application carefully before submitting. All information can be edited by
        navigating back to the relevant section.
      </p>

      <div className="flex items-start gap-2.5 rounded-sm border-l-[6px] border-[#F9D100] bg-[#FFFBEA] p-5">
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#F9D100]" strokeWidth={1.5} />
        <p className="text-[12px] leading-[17px] tracking-[0.46px] text-[#092649]/72">
          A summary of your entered information will be displayed here for final review before
          submission
        </p>
      </div>

      {/* Terms Checkbox (Custom Circle Design) */}
      <div className="flex items-start gap-1.5">
        <div onClick={() => setFieldValue("agreed", !isAgreed)} className="mt-0.5 cursor-pointer">
          {/* Custom Circle Checkbox */}
          <div
            className={`h-4 w-4 shrink-0 rounded-full border transition-all ${
              isAgreed ? "border-primary border-[5px]" : "border-light-gray border-[1.33px]"
            }`}
          />
        </div>

        <label
          className="cursor-pointer text-[11px] leading-[17px] select-none"
          onClick={() => setFieldValue("agreed", !isAgreed)}
        >
          <span className="text-secondary">
            I certify that all information provided is true and accurate to the best of my
            knowledge, and I agree to the company&apos;s{" "}
          </span>
          <span className="text-primary cursor-pointer hover:underline">
            Terms of Service and Privacy Policy.
          </span>
        </label>
      </div>

      {/* Validation Error Message */}
      {touched.agreed && errors.agreed && (
        <p className="text-[10px] font-medium text-red-500">{String(errors.agreed)}</p>
      )}
    </div>
  );
};

export default ReviewSubmit;
