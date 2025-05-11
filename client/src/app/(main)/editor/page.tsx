import { Metadata } from "next"; // Import Next.js Metadata type for page metadata
import ResumeEditor from "./ResumeEditor"; // Import the ResumeEditor component


// Define page metadata (appears in browser tab and SEO)
export const metadata: Metadata = {
  title: "Resume Editor",          // Page title (shown in browser tab)
  description: "Create and edit your professional resume" // Brief page description (for SEO)
};

// Default page component that renders the ResumeEditor
export default function EditorPage() {
  return <ResumeEditor />;  // Simply renders the ResumeEditor component
}