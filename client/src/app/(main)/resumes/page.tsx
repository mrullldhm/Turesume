import { Metadata } from "next"; // Import Next.js Metadata type for page SEO
import { Button } from "@/components/ui/button"; // Import UI components
import { PlusSquare } from "lucide-react"; // Import icon from Lucide React
import Link from "next/link"; // Import Next.js link for client-side navigation

// Page metadata - appears in browser tab and search results
export const metadata: Metadata = {
    title: "Resumes",                 // Page title
    description: "Manage your resumes", // SEO description
}

// Main page component
export default function Page() {
    return (
        // Centered container with max width and spacing
        <main className="mx-auto w-full max-w-7xl space-y-6 px-3 py-6">
            {/* Create Resume Button */}
            <Button 
                asChild // Allows Button to render as a Link
                className="mx-auto flex w-fit gap-2" // Centered with icon spacing
            >
                <Link href="/editor">
                    <PlusSquare className="size-5" /> {/* Plus icon */}
                    Create Resume {/* Button text */}
                </Link>
            </Button>
        </main>
    )
}