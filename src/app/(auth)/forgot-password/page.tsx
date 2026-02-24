"use client";

import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { handleForgotPassword } from "./forgotPasswordApiCalls";
import { typography } from "@/theme/typography";

const forgotPasswordSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
});

const ForgotPassword = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values) => {
      const result = await handleForgotPassword(values.email);
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
          Reset Password
        </h1>

        <p className="text-muted text-[12px] leading-[33.43px] font-normal tracking-[0.62px]">
          Enter your email we&apos;ll send you email
        </p>
      </div>

      {/* FORM SECTION */}
      <form onSubmit={formik.handleSubmit} className="mt-[25px]">
        {/* EMAIL INPUT */}
        <div className="mb-[35px]">
          <label className="text-heading mb-2 block text-[13px] font-medium">Email Address</label>
          <InputField
            name="email"
            type="email"
            placeholder="Email Address"
            formik={formik}
            className="h-[45px] text-[12px]"
            label=""
          />
        </div>

        {/* SUBMIT BUTTON UPDATED */}
        <Button type="submit" fullWidth variant="primary" size="lg" loading={formik.isSubmitting}>
          {formik.isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
      </form>

      {/* BACK LINK */}
      <div className="mt-5 text-center">
        <Link
          href="/sign-in"
          className="text-primary inline-block text-[12px] leading-[33.43px] font-medium tracking-[0.62px] hover:underline"
        >
          &lt; Back
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
