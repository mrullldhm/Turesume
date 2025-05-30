import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({ 
  weight: ['400', '700'], // Specify weights
  subsets: ['latin'], 
});

export const metadata: Metadata = {
  title: {
    template: "Turesume - %s",
    default: "Turesume"
  },
  description: "Turesume – AI Resume Builder. Create a professional, ATS-friendly resume in minutes with our free AI-powered tool. Get personalized suggestions, beat applicant tracking systems, and land more interviews with a resume tailored to your dream job.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider 
        attribute="class" 
        defaultTheme="system" 
        enableSystem
        disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
