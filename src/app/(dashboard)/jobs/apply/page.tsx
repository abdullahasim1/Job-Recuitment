"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

// Components
import PersonalInfo, { ApplyJobFormValues } from "@/components/forms/apply-job/PersonalInfo";
import ResumeUpload from "@/components/forms/apply-job/ResumeUpload";
import ScreeningQuestions from "@/components/forms/apply-job/ScreeningQuestions";
import ReviewSubmit from "@/components/forms/apply-job/ReviewSubmit";
import Button from "@/components/ui/Button";

const ApplyJobPage = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const steps = [
    "Personal Information",
    "Resume & Cover Letter",
    "Screening Questions",
    "Review & Submit",
  ];

  // --- Validation Schemas ---
  const schemas = [
    Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().required("Phone is required"),
      location: Yup.string().required("Location is required"),
    }),
    Yup.object({ resume: Yup.mixed().required("Resume is required") }),
    Yup.object({
      certified: Yup.string().required("Required"),
      experience: Yup.string().required("Required"),
      understanding: Yup.string().required("Required"),
    }),
    Yup.object({ agreed: Yup.boolean().oneOf([true], "Required") }),
  ];

  // --- Formik Setup (WITH EXPLICIT TYPE) ---
  const formik = useFormik<ApplyJobFormValues>({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      resume: null,
      coverLetter: null,
      coverText: "",
      certified: "",
      experience: "",
      understanding: "",
      agreed: false,
    },
    validationSchema: schemas[step - 1],
    onSubmit: (values) => {
      if (step < 4) {
        setStep(step + 1);
        window.scrollTo(0, 0);
      } else {
        console.log("Submitted:", values);
        router.push("/jobs");
      }
    },
  });

  return (
    <div className="min-h-screen flex-1">
      <div className="max-w space-y-6">
        {/* Header */}
        <h1 className="text-[20px] font-bold text-[#0F0F1B]">Apply for Job</h1>

        {/* Stepper Tabs */}
        <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white px-6 pt-5 shadow-sm">
          <div className="flex min-w-max gap-10">
            {steps.map((label, index) => {
              const stepNum = index + 1;
              const isActive = step === stepNum;
              return (
                <div
                  key={index}
                  className={`relative cursor-pointer pb-4 text-[13px] font-medium transition-all ${isActive ? "text-[#434CE6]" : "text-gray-400"}`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-t-full bg-[#434CE6]"></span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Area */}
        <div className="min-h-[500px] rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-[16px] font-bold text-[#0F0F1B]">{steps[step - 1]}</h2>

          <form onSubmit={formik.handleSubmit} className="flex h-full flex-col gap-8">
            {/* Steps */}
            <div>
              {step === 1 && <PersonalInfo formik={formik} />}
              {step === 2 && <ResumeUpload formik={formik} />}
              {step === 3 && <ScreeningQuestions formik={formik} />}
              {step === 4 && <ReviewSubmit formik={formik} />}
            </div>

            {/* Buttons */}
            <div className="mt-4 flex gap-4">
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="h-[45px] w-[120px] rounded-xl shadow-md"
              >
                {step === 4 ? "Submit" : "Continue"}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="md"
                className="h-[45px] w-[120px] rounded-xl border-[#434CE6] text-[#434CE6] hover:bg-indigo-50"
                onClick={() => (step === 1 ? router.push("/jobs") : setStep(step - 1))}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyJobPage;
