import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AcademyPro - Master Web Development | Online Course",
  description: "Transform your career with our comprehensive web development course. Learn from industry experts, build real projects, and land your dream job. 10,000+ successful graduates.",
  keywords: "web development, online course, programming, react, next.js, full-stack, career change, tech education",
  authors: [{ name: "AcademyPro" }],
  openGraph: {
    title: "AcademyPro - Master Web Development",
    description: "Transform your career with our comprehensive web development course",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
