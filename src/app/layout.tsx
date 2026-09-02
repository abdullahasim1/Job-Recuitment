import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "UpMatch",
  description: "Recruitment Management System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-(family-name:--font-poppins)`}>
        {children}
        <Script
          src="http://localhost:3001/widget.js"
          data-business-id="upmatch_recruitment"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
