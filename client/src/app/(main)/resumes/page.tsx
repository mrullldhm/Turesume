import { Metadata } from "next"; // Type for setting page-level metadata in Next.js
import { Button } from "@/components/ui/button"; // Reusable Button component from shadcn/ui
import { PlusSquare } from "lucide-react"; // Icon for visual indication (plus inside square)
import Link from "next/link"; // Client-side navigation for improved performance

// Define SEO metadata for this page
export const metadata: Metadata = {
  title: "Resumes",                         // Appears in the browser tab
  description: "Manage your resumes",       // Helps with search engine indexing
};

// Resumes Page – allows users to view or create resumes
export default function Page() {
  return (
    // Responsive, centered container with consistent spacing
    <main className="mx-auto w-full max-w-7xl space-y-6 px-3 py-6">
      
      {/* "Create Resume" button – navigates to the editor page */}
      <Button 
        asChild                               // Render as child element (Link)
        className="mx-auto flex w-fit gap-2" // Center horizontally, allow icon/text spacing
      >
        <Link href="/editor">
          <PlusSquare className="size-5" />  {/* Icon indicating 'add new' */}
          Create Resume                      {/* Button label */}
        </Link>
      </Button>
    </main>
  );
}
