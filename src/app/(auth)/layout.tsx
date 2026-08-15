import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Track applications in one place",
  "Schedule interviews effortlessly",
  "Get feedback & smart hiring insights",
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      {/* LEFT: Branding Panel (desktop only) */}
      <aside className="relative hidden w-[45%] shrink-0 flex-col justify-between overflow-hidden bg-gradient-to-br from-violet-700 via-purple-600 to-fuchsia-600 p-12 text-white lg:flex">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full border-[40px] border-white/10" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute top-1/2 left-1/3 h-56 w-56 rounded-full bg-fuchsia-300/20 blur-3xl" />

        {/* Logo */}
        <div className="relative z-10">
          <Image src="/logo-white.svg" alt="UpMatch" width={160} height={34} />
        </div>

        {/* Tagline */}
        <div className="relative z-10">
          <h2 className="text-[32px] leading-snug font-bold tracking-tight">
            Hire smarter,
            <br />
            not harder.
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/80">
            The complete recruitment platform for HR teams, supervisors, and candidates — from
            application to offer.
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[14px] font-medium">
                <CheckCircle2 size={20} className="shrink-0 text-fuchsia-200" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom note */}
        <p className="relative z-10 text-[12px] text-white/60">
          © {new Date().getFullYear()} UpMatch — Recruitment Management System
        </p>
      </aside>

      {/* RIGHT: Form Area */}
      <div className="relative flex min-h-screen w-full flex-col overflow-hidden lg:w-[55%]">
        {/* Decorative blobs (mobile + right side) */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-violet-400/30 to-fuchsia-300/20 blur-3xl lg:hidden" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[480px] w-[480px] rounded-full bg-gradient-to-tr from-purple-400/25 to-indigo-300/15 blur-3xl" />

        <div className="relative z-10">
          <Header />
        </div>

        <main className="relative z-10 flex w-full grow flex-col items-center justify-center p-4">
          {children}
        </main>

        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}