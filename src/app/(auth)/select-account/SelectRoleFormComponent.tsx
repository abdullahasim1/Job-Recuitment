"use client";

import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/components/ui/Button";
import RoleSelectField from "@/components/ui/RoleSelectField";
import { handleRoleSubmit } from "@/app/(auth)/select-account/selectRoleApiCalls";
import { typography } from "@/theme/typography";

const roleOptions = [
  {
    id: "admin",
    title: "Admin/HR",
    description:
      "Full system access, applicant tracking, staff file management, approvals, billing, reporting",
  },
  {
    id: "supervisor",
    title: "Supervisor",
    description:
      "Supervision/observation forms, training sign-offs, staff oversight, compliance monitoring",
  },
  {
    id: "staff",
    title: "Staff/Practitioner",
    description:
      "Training modules, document uploads, profile management, view own supervision records",
  },
  {
    id: "applicant",
    title: "Applicant",
    description:
      "Job application portal, application tracking, interview scheduling, offer acceptance",
  },
];

const SelectRoleForm = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: { role: "" },
    validationSchema: Yup.object({
      role: Yup.string().required("Please select a role"),
    }),

    onSubmit: async (values) => {
      const result = await handleRoleSubmit(values.role);

      if (result.success) {
        router.push("/sign-in");
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      //  CHANGE: radius, padding aur shadow ko SignInForm jesa same kiya
      className={`shadow-card w-full max-w-[594px] rounded-[19.34px] bg-white px-5 py-8 sm:px-8 sm:py-10 ${typography.fontFamily}`}
    >
      {/*  CHANGE: 'text-gray-900' -> 'text-heading' */}
      <h1 className="text-heading mb-2 text-2xl font-semibold">Choose Your Role</h1>

      {/*  CHANGE: 'text-gray-500' -> 'text-muted' */}
      <p className="text-muted mb-8 text-sm">Select how you&apos;d like to join us</p>

      <RoleSelectField name="role" formik={formik} options={roleOptions} />

      <Button
        type="submit"
        fullWidth
        variant="primary"
        className="mt-8 h-[50px]! rounded-[19px] sm:h-[57px]!"
        loading={formik.isSubmitting}
      >
        Continue
      </Button>
    </form>
  );
};

export default SelectRoleForm;
