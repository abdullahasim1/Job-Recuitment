"use client";

import React from "react";
import { FormikProps } from "formik";
import { ApplyJobFormValues } from "@/components/forms/apply-job/PersonalInfo";
import RadioField from "@/components/ui/RadioField";
import TextAreaField from "@/components/ui/TextAreaField";

interface ScreeningQuestionsProps {
  formik: FormikProps<ApplyJobFormValues>;
}

const ScreeningQuestions = ({ formik }: ScreeningQuestionsProps) => {
  return (
    <div className="space-y-6">
      <RadioField
        label="Are you a certified ARMHS practitioner in the state of Minnesota?*"
        name="certified"
        formik={formik}
        options={[
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" },
        ]}
      />

      <TextAreaField
        label="Please describe your experience working with adults with Serious and Persistent Mental Illness (SPMI).*"
        name="experience"
        placeholder="Describe your experience..."
        formik={formik}
      />

      <TextAreaField
        label="What is your understanding of the principles of Adult Rehabilitative Mental Health Services (ARMHS)?*"
        name="understanding"
        placeholder="Describe your understanding..."
        formik={formik}
      />
    </div>
  );
};

export default ScreeningQuestions;
