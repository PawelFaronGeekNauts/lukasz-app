import type { Metadata } from "next";
import { Angkor, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

const angkor = Angkor({
  variable: "--font-angkor",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Cholewicka EquiPro",
  description: "Treningi jeździeckie, szkolenia i webinary",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${poppins.variable} ${angkor.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
