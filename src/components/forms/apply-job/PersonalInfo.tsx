"use client";

import { FormikProps } from "formik";
import InputField from "@/components/ui/InputField";

export interface ApplyJobFormValues {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  resume: File | null;
  coverLetter: File | null;
  coverText: string;
  certified: string;
  experience: string;
  understanding: string;
  agreed: boolean;

  [key: string]: unknown;
}

interface PersonalInfoProps {
  formik: FormikProps<ApplyJobFormValues>;
}

const PersonalInfo = ({ formik }: PersonalInfoProps) => {
  return (
    <div className="grid grid-cols-1 gap-x-[18px] gap-y-5 lg:grid-cols-2 lg:gap-y-[22px]">
      <InputField label="Full Name*" name="fullName" placeholder="Full name" formik={formik} />

      <InputField
        label="Email Address*"
        name="email"
        type="email"
        placeholder="Email address"
        formik={formik}
      />

      <InputField
        label="Phone Number*"
        name="phone"
        type="tel"
        placeholder="Phone number"
        formik={formik}
      />

      <InputField
        label="Current Location (City, State)*"
        name="location"
        placeholder="Enter location"
        formik={formik}
      />
    </div>
  );
};

export default PersonalInfo;
