"use client"; // Marks this as a Client Component in Next.js

import { Button } from "@/components/ui/button";
import Link from "next/link";
import GeneralInfoForm from "./forms/GeneralInfoForm";

export default function ResumeEditor() {
  return (
    <div className="flex grow flex-col">
      {/* Header Section */}
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Get Started on Your Resume</h1>
        <p className="text-sm text-muted-foreground">
          Create your resume step by step. Your progress is saved automatically.
        </p>
      </header>

      {/* Main Content Area */}
      <main className="relative grow">
        {/* Full-height container */}
        <div className="absolute bottom-0 top-0 flex w-full">
          {/* Left Panel - Editing Interface (Full width on mobile, half on desktop) */}
          <div className="w-full md:w-1/2 p-3">
            <GeneralInfoForm />
          </div>

          {/* Vertical Divider (Visible only on desktop) */}
          <div className="grow md:border-r"></div>

          {/* Right Panel - Preview (Hidden on mobile, half width on desktop) */}
          <div className="hidden md:flex w-1/2">Right</div>
        </div>
      </main>

      {/* Footer with Navigation */}
      <footer className="w-full border-t px-3 py-5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-3">
          {/* Step Navigation Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="secondary">Previous step</Button>
            <Button>Next step</Button>
          </div>

          {/* Close Button Section */}
          <div className="flex items-center gap-3">
            <Button variant="secondary" asChild>
              <Link href="/resumes">Close</Link>
            </Button>
            {/* Saving Indicator (Hidden by default) */}
            <p className="text-muted-foreground opacity-0">Saving...</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
