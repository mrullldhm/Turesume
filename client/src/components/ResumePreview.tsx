import { ResumeValues } from "@/lib/validation";

interface ResumePreviewProps {
    resumeData: ResumeValues
    className?: string
}

export default function ResumePreview({resumeData, className}: ResumePreviewProps) {
    return (
        <div>
            <h1>Resume Preview</h1>
        </div>
    );
}