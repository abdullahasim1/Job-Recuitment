"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/components/ui/Button";
import OTPInput from "@/components/ui/OTPInput";
import { handleOtpVerify } from "@/app/(auth)/otp-verification/otpApiCalls";
import { useRouter } from "next/navigation";

const otpSchema = Yup.object({
  otp: Yup.string().required("OTP is required").length(4, "Enter all 4 digits"),
});

const OtpVerification = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: { otp: "" },
    validationSchema: otpSchema,
    onSubmit: async (values) => {
      const result = await handleOtpVerify(values.otp);

      if (result.success) {
        alert(result.message);
        router.push("/select-account");
      }
    },
  });

  return (
    //  Container styling matched with Sign In & Role Select
    <div className="shadow-card w-full max-w-[594px] rounded-[19.34px] bg-white px-5 py-8 sm:px-8 sm:py-10">
      {/* Heading */}
      <h1 className="text-heading text-xl font-semibold sm:text-2xl">
        Check your email for a code
      </h1>

      {/* Subtext */}
      <p className="text-muted mt-1 text-xs sm:text-sm">
        Enter the 4-digit code we’ve sent to your email.
      </p>

      <form onSubmit={formik.handleSubmit} className="mt-8">
        {/* OTP Component */}
        <OTPInput name="otp" formik={formik} />

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          variant="primary"
          loading={formik.isSubmitting}
          disabled={formik.isSubmitting}
          //  Height & Radius matched with other forms
          className="mt-10 h-[50px]! rounded-[19px] sm:h-[57px]!"
        >
          {formik.isSubmitting ? "Verifying..." : "Submit"}
        </Button>
      </form>

      {/* Resend Link */}
      <button className="text-primary mx-auto mt-6 block text-xs font-medium hover:underline sm:text-sm">
        Resend Code
      </button>
    </div>
  );
};

export default OtpVerification;
