"use client";

import { useFormik, FormikProps } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

// --- Form Values Interface ---
interface FeedbackFormValues {
  empathy: string;
  communication: string;
  crisisIntervention: string;
  documentation: string;
  notes: string;
  recommendation: string;
}

// --- SKILL RATING COMPONENT ---
const SkillRating = ({
  title,
  description,
  name,
  formik,
}: {
  title: string;
  description: string;
  name: keyof FeedbackFormValues;
  formik: FormikProps<FeedbackFormValues>;
}) => {
  const options = ["Need Improvement", "Meet Expectations", "Exceeds Expectations"];
  const value = formik.values[name];
  const error = formik.errors[name];
  const touched = formik.touched[name];

  return (
    <div className="flex flex-col gap-3">
      <div>
        <h4 className="text-heading text-[13px] font-bold">{title}</h4>
        <p className="text-muted text-[12px]">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => formik.setFieldValue(name, opt)}
            className={`rounded-lg border px-4 py-2 text-[11px] font-medium transition-all ${
              value === opt
                ? "bg-primary border-primary text-white"
                : "text-secondary border-light-gray hover:border-primary bg-white"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      {touched && error && <p className="text-[10px] text-red-500">{error}</p>}
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const InterviewerFeedbackPage = () => {
  const router = useRouter();

  const validationSchema = Yup.object({
    empathy: Yup.string().required("Rating required"),
    communication: Yup.string().required("Rating required"),
    crisisIntervention: Yup.string().required("Rating required"),
    documentation: Yup.string().required("Rating required"),
    notes: Yup.string().required("Notes are required"),
    recommendation: Yup.string().required("Recommendation required"),
  });

  const formik = useFormik<FeedbackFormValues>({
    initialValues: {
      empathy: "",
      communication: "",
      crisisIntervention: "",
      documentation: "",
      notes: "",
      recommendation: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Interviewer Feedback Saved:", values);
      // API Call here
      router.push("/interviews"); // Redirect back to interviews list
    },
  });

  return (
    <div className="space-y-6 pb-10">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/interviews"
          className="text-muted hover:text-primary rounded-full bg-white p-2 shadow-sm transition-colors"
        >
          <ChevronLeft size={20} />
        </Link>
        <div>
          <h1 className="text-heading text-[18px] font-bold">Olivia Rhye - ARMHS Practitioner</h1>
          <p className="text-muted text-[12px]">Interviewer Assessment Form</p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={formik.handleSubmit}
        className="border-light-gray rounded-[20px] border bg-white p-8 shadow-sm"
      >
        <h2 className="text-heading mb-8 text-[16px] font-bold">Skill Assessment</h2>

        <div className="border-light-gray grid grid-cols-1 gap-x-12 gap-y-10 border-b pb-10 md:grid-cols-2">
          <SkillRating
            title="Empathy and Compassion"
            description="Ability to understand and share feelings."
            name="empathy"
            formik={formik}
          />
          <SkillRating
            title="Communication Skills"
            description="Clarity in verbal and written communication."
            name="communication"
            formik={formik}
          />
          <SkillRating
            title="Crisis Intervention"
            description="Ability to remain calm in high-pressure situations."
            name="crisisIntervention"
            formik={formik}
          />
          <SkillRating
            title="Documentation"
            description="Attention to detail in records."
            name="documentation"
            formik={formik}
          />
        </div>

        <div className="mt-8 space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-heading text-[13px] font-semibold">Interview Notes</label>
            <textarea
              name="notes"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.notes}
              placeholder="Enter notes..."
              className="border-light-gray bg-page text-heading focus:border-primary placeholder:text-muted-light h-[120px] w-full resize-none rounded-xl border p-4 text-[13px] transition-colors outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-heading text-[13px] font-semibold">Final Recommendation</label>
            <div className="relative">
              <select
                name="recommendation"
                onChange={formik.handleChange}
                value={formik.values.recommendation}
                className="border-light-gray bg-page text-muted focus:border-primary h-[50px] w-full appearance-none rounded-xl border px-4 text-[13px] transition-colors outline-none"
              >
                <option value="" disabled>
                  Select Recommendation
                </option>
                <option value="Strongly Hire">Strongly Hire</option>
                <option value="Hire">Hire</option>
                <option value="No Hire">No Hire</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <button
            type="submit"
            className="bg-primary hover:bg-primary-hover h-12 w-[120px] rounded-xl text-[14px] font-semibold text-white shadow-lg transition-all active:scale-95"
          >
            Save
          </button>
          <Link href="/interviews">
            <button
              type="button"
              className="border-primary text-primary hover:bg-primary-light h-12 w-[120px] rounded-xl border text-[14px] font-semibold transition-all active:scale-95"
            >
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default InterviewerFeedbackPage;
