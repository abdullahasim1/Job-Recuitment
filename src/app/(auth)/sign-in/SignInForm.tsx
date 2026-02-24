"use client";

import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { handleSignIn } from "@/app/(auth)/sign-in/signinApiCalls";

const signInSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(8, "Password is too short").required("Password is required"),
});

const SignInForm = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      const result = await handleSignIn(values);
      if (result.success) {
        router.push("/dashboard");
      } else {
        alert(result.message);
      }
    },
  });

  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center px-4 py-12 sm:px-6">
      <div className="shadow-card w-full max-w-[594px] rounded-[19.34px] bg-white px-5 py-8 sm:px-8 sm:py-10">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-heading text-[20px] font-semibold tracking-[0.82px] sm:text-[21px]">
            Sign In
          </h1>

          <Link
            href="/signup"
            className="border-primary text-primary hover:bg-primary rounded-full border px-4 py-1.5 text-[12px] font-semibold transition hover:text-white sm:text-[13px]"
          >
            Register
          </Link>
        </div>

        {/* FORM */}
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <InputField
              label="Email Address"
              name="email"
              type="email"
              placeholder="Email Address"
              formik={formik}
              className="mt-2!"
            />
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-heading block text-[12px] font-semibold sm:text-[13px]">
                Password
              </label>

              <Link
                href="/forgot-password"
                className="text-primary text-[10px] font-medium hover:underline sm:text-[11px]"
              >
                Forgot Password?
              </Link>
            </div>

            <InputField
              name="password"
              type="password"
              placeholder="Password"
              formik={formik}
              label=""
            />

            <p className="text-muted mt-2 text-[10px] opacity-80 sm:text-[11px]">
              We will text you a code to confirm your email.
            </p>
          </div>

          <Button type="submit" fullWidth variant="primary" loading={formik.isSubmitting}>
            {formik.isSubmitting ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        {/* Bottom Text */}
        <p className="text-muted-light mt-4 px-2 text-center text-[9.5px] sm:text-[10px]">
          By clicking sign in, you agree to the{" "}
          <a href="#terms" className="text-primary hover:underline">
            terms of services and privacy policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
