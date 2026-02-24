import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const typography = {
  fontFamily: poppins.variable,
  heading: "text-[21px] font-semibold tracking-[0.82px]",
  subheading: "text-[18px] font-medium tracking-[0.5px]",
  label: "text-[12px] font-medium",
  input: "text-[12px] text-[#4f4f4f75]",
  body: "text-[12px] text-[#686a6f]",
  small: "text-[10px] text-[#686a6fa8]",
};
