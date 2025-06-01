"use client"; // Marks this as a Client Component in Next.js

import { useSearchParams } from "next/navigation";
import { steps } from "./step";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import { useState } from "react";
import { ResumeValues } from "@/lib/validation";
import ResumePreviewSection from "./ResumePreviewSection";

export default function ResumeEditor() {
  const searchParams = useSearchParams(); // Get current search parameters from the URL

  const [resumeData, setResumeData] = useState<ResumeValues>({}); // State to hold resume data

  const currentStep = searchParams.get("step") || steps[0].key;

  function setStep(key: string) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("step", key);
    window.history.pushState(null, "", `?${newSearchParams.toString()}`);
  }

  const FormComponent = steps.find(
    (step) => step.key === currentStep,
  )?.component;

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
          <div className="w-full md:w-1/2 p-3 overflow-y-auto space-y-6">
            {/* <GeneralInfoForm />
            <PersonalInfoForm /> */}
            <Breadcrumbs currentStep={currentStep} setCurrentStep={setStep} />
            {FormComponent && (
              <FormComponent
                resumeData={resumeData}
                setResumeData={setResumeData}
              />
            )}
          </div>

          {/* Vertical Divider (Visible only on desktop) */}
          <div className="grow md:border-r" />

          {/* Right Panel - Preview (Hidden on mobile, half width on desktop) */}
        <ResumePreviewSection 
          resumeData={resumeData}
          setResumeData={setResumeData}
        />
        </div>
      </main>
      <Footer currentStep={currentStep} setCurrentStep={setStep} />
    </div>
  );
}
