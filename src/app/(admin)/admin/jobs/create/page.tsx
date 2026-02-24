"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import InputField from "@/components/ui/InputField";
import TextAreaField from "@/components/ui/TextAreaField";
import SelectField from "@/components/ui/SelectField";

const departmentOptions = [
  { label: "Clinical", value: "Clinical" },
  { label: "Nursing", value: "Nursing" },
  { label: "IT Support", value: "IT" },
  { label: "Administration", value: "Admin" },
];

const typeOptions = [
  { label: "Full-time", value: "Full-time" },
  { label: "Part-time", value: "Part-time" },
  { label: "Contract", value: "Contract" },
  { label: "Internship", value: "Internship" },
];

// --- Validation ---
const validationSchema = Yup.object({
  title: Yup.string().required("Job Title is required"),
  department: Yup.string().required("Department is required"),
  location: Yup.string().required("Location is required"),
  type: Yup.string().required("Job Type is required"),
  minSalary: Yup.number().required("Required").typeError("Number only"),
  maxSalary: Yup.number().required("Required").typeError("Number only"),
  description: Yup.string().required("Description is required"),
  requirements: Yup.string().required("Requirements are required"),
});

const CreateJobPage = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      title: "",
      department: "",
      location: "",
      type: "",
      minSalary: "",
      maxSalary: "",
      description: "",
      requirements: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Publishing Job:", values);
      // API Logic Here
      setTimeout(() => router.push("/admin/jobs"), 1000);
    },
  });

  return (
    <div className="max-w-5xl space-y-6 p-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-(--muted)">
            <Link href="/admin/jobs" className="hover:text-primary transition-colors">
              <ChevronLeft size={20} />
            </Link>
            <span className="text-[14px] font-medium">Back to Jobs</span>
          </div>
          <h1 className="text-heading mt-1 text-[24px] font-bold tracking-tight">Post a New Job</h1>
          <p className="text-muted text-[14px]">Create a new job opening for your company.</p>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            className="h-[42px] rounded-lg border border-(--table-border) bg-white px-6 text-[14px] font-medium text-(--secondary) transition-colors hover:bg-(--bg-input)"
          >
            Save Draft
          </button>

          <button
            onClick={() => formik.handleSubmit()}
            disabled={formik.isSubmitting}
            className="bg-primary hover:bg-primary-hover h-[42px] rounded-lg px-6 text-[14px] font-semibold text-white shadow-sm transition-colors disabled:opacity-70"
          >
            {formik.isSubmitting ? "Publishing..." : "Publish Job"}
          </button>
        </div>
      </div>

      {/* --- Form Section --- */}
      <div className="shadow-card rounded-[14px] border border-(--table-border) bg-white p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="col-span-2">
            <InputField
              label="Job Title"
              name="title"
              formik={formik}
              placeholder="e.g. Senior Mental Health Practitioner"
            />
          </div>

          <SelectField
            label="Department"
            name="department"
            options={departmentOptions}
            formik={formik}
            placeholder="Select Department"
          />

          <SelectField
            label="Employment Type"
            name="type"
            options={typeOptions}
            formik={formik}
            placeholder="Select Type"
          />

          <InputField
            label="Location"
            name="location"
            formik={formik}
            placeholder="e.g. New York, NY (Remote)"
          />

          <div className="flex gap-4">
            <InputField
              label="Min Salary (Annual)"
              name="minSalary"
              type="number"
              formik={formik}
              placeholder="Min"
            />
            <InputField
              label="Max Salary (Annual)"
              name="maxSalary"
              type="number"
              formik={formik}
              placeholder="Max"
            />
          </div>

          <div className="col-span-2 my-2 h-px bg-(--table-border)"></div>

          <div className="col-span-2">
            <TextAreaField
              label="Job Description"
              name="description"
              formik={formik}
              placeholder="Describe the role responsibilities..."
            />
          </div>

          <div className="col-span-2">
            <TextAreaField
              label="Requirements & Skills"
              name="requirements"
              formik={formik}
              placeholder="- Bachelor's degree in..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJobPage;
