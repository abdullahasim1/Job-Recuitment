"use client";

import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { handleNewPassword } from "./newPasswordApiCalls";
import { typography } from "@/theme/typography";

const newPasswordSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("New Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const NewPassword = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: { password: "", confirmPassword: "" },
    validationSchema: newPasswordSchema,
    onSubmit: async (values) => {
      const result = await handleNewPassword(values);
      if (result.success) {
        alert(result.message);
        router.push("/sign-in");
      } else {
        alert(result.message);
      }
    },
  });

  return (
    <div
      className={`shadow-card w-full max-w-[594px] rounded-[19.34px] bg-white px-[26px] pt-[35px] pb-10 sm:px-8 sm:py-10 ${typography.fontFamily}`}
    >
      {/* HEADER SECTION */}
      <div className="text-left">
        <h1 className="text-heading text-[21.01px] leading-[44.21px] font-semibold tracking-[0.82px]">
          New Password
        </h1>

        <p className="text-muted text-[12px] leading-[33.43px] font-normal tracking-[0.62px]">
          Please enter your new password
        </p>
      </div>

      {/* FORM SECTION */}
      <form onSubmit={formik.handleSubmit} className="mt-10">
        {/* NEW PASSWORD INPUT */}
        <div className="mb-[25px]">
          <label className="text-heading mb-2 block text-[13px] font-medium">New Password</label>
          <InputField
            name="password"
            type="password"
            placeholder="New Password"
            formik={formik}
            label=""
          />
        </div>

        {/* CONFIRM PASSWORD INPUT */}
        <div className="mb-[45px]">
          <label className="text-heading mb-2 block text-[13px] font-medium">
            Confirm Password
          </label>
          <InputField
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            formik={formik}
            label=""
          />
        </div>

        {/* SUBMIT BUTTON UPDATED */}
        <Button type="submit" fullWidth variant="primary" size="lg" loading={formik.isSubmitting}>
          {formik.isSubmitting ? "Resetting..." : "Reset Password"}
        </Button>
      </form>

      {/* BACK LINK */}
      <div className="mt-5 text-center">
        <Link
          href="/sign-in"
          className="text-primary inline-block text-[12px] leading-[33.43px] font-medium tracking-[0.62px] hover:underline"
        >
          &lt; Back to Sign In
        </Link>
      </div>
    </div>
  );
};

export default NewPassword;
