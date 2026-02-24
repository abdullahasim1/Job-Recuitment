import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Header */}
      <Header />

      <main className="flex w-full grow flex-col items-center justify-center p-4">{children}</main>

      {/* Footer  */}
      <Footer />
    </div>
  );
}
