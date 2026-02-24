"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { typography } from "@/theme/typography";
import * as Yup from "yup";
import { useFormik } from "formik";
import { handleSignUp } from "@/app/(auth)/signup/signupApiCalls";
import InputField from "@/components/ui/InputField";
import { useRouter } from "next/navigation";

// Interface

// Validation Schema
const signUpSchema = Yup.object({
  firstName: Yup.string().trim().min(2).required("First Name is required"),
  lastName: Yup.string().trim().min(2).required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  subscribe: Yup.boolean(),
});

const SignUpForm = () => {
  const router = useRouter();
  const formik = useFormik<SignUpFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      subscribe: false,
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      const result = await handleSignUp(values);

      if (result.success) {
        alert(result.message);
        router.push("/otp-verification");
      }
    },
  });

  return (
    //  CHANGE: 'shadow-[...]' -> 'shadow-card'
    <div
      className={`shadow-card w-full max-w-[594px] rounded-[19.34px] bg-white px-5 py-8 sm:px-8 sm:py-10 ${typography.fontFamily}`}
    >
      {/* Header Row */}
      <div className="mb-8 flex items-center justify-between">
        {/*  CHANGE: 'text-[#0f0f1b]' -> 'text-heading' */}
        <h1 className="text-heading text-[20px] font-semibold sm:text-[21px]">Sign Up</h1>
        <Link href="/sign-in">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
        </Link>
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* First + Last Name */}
        <div className="flex flex-col gap-3 md:flex-row md:gap-5">
          <InputField
            label="First Name"
            name="firstName"
            placeholder="First Name"
            formik={formik}
            className="flex-1"
          />

          <InputField
            label="Last Name"
            name="lastName"
            placeholder="Last Name"
            formik={formik}
            className="flex-1"
          />
        </div>

        {/* Email */}
        <InputField
          label="Email Address"
          type="email"
          name="email"
          placeholder="Email"
          formik={formik}
        />

        {/* Password */}
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          formik={formik}
        />

        {/* Subscribe Checkbox */}
        <div className="flex items-center gap-2">
          <InputField name="subscribe" type="checkbox" formik={formik} className="h-3 w-3" />

          {/*  CHANGE: 'text-gray-600' -> 'text-muted' */}
          <span className="text-muted text-[11px] opacity-80 select-none">
            I would like to subscribe and receive updates via email.
          </span>
        </div>

        {/* Submit */}
        <Button type="submit" fullWidth variant="primary" loading={formik.isSubmitting}>
          {formik.isSubmitting ? "Signing Up..." : "Sign Up"}
        </Button>
      </form>

      {/* Bottom */}
      {/*  CHANGE: 'text-gray-500' -> 'text-muted' */}
      <p className="text-muted mt-4 text-center text-[10px]">
        By clicking sign up, you agree to the {/*  CHANGE: 'text-indigo-600' -> 'text-primary' */}
        <a href="#terms" className="text-primary hover:underline">
          terms of services and privacy policy
        </a>
      </p>
    </div>
  );
};

export default SignUpForm;

export interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  subscribe: boolean;
  [key: string]: unknown;
}
