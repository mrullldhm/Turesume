"use  client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResumeEditor() {
  return (
    <div className="flex grow flex-col">
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Get Started on Your Resume</h1>
        <p className="text-sm text-muted-foreground">
          Create your resume step by step. Your progress is saved automatically.
        </p>
      </header>

      <main className="relative grow">
        <div className="absolute bottom-0 top-0 flex w-full">
          {/* EDITING SIDE */}
          <div className="w-full md:w-1/2">Left</div>
          {/* DIVIDER */}
          <div className="grow md:border-r"></div>
          {/* PREVIEW SIDE */}
          <div className="hidden md:flex w-1/2">Right</div>
        </div>
      </main>

      <footer className="w-full border-t px-3 py-5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-3">
          {/* STEP BUTTON */}
          <div className="flex items-center gap-3">
            <Button variant="secondary">Previous step</Button>
            <Button>Next step</Button>
          </div>
          {/* CLOSE BUTTON */}
          <div className="flex items-center gap-3">
            <Button variant="secondary" asChild>
              <Link href="/resumes">Close</Link>
            </Button>

            <p className="text-muted-foreground opacity-0">Saving...</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
