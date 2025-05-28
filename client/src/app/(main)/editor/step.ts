// Importing form components for each step
import { EditorFormProps } from "@/lib/types";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";

// Define the steps configuration for a multi-step form process
export const steps: {
    title: string;        // Display title for the step
    component: React.ComponentType<EditorFormProps>;  // React component to render for this step
    key: string;          // Unique identifier for the step
}[] = [
    {
        title: "General Information",  // First step - General Information
        component: GeneralInfoForm,     // Uses GeneralInfoForm component
        key: "general-info",            // Unique key for this step
    },
    {
        title: "Personal Information",  // Second step - Personal Information
        component: PersonalInfoForm,    // Uses PersonalInfoForm component
        key: "personal-info",           // Unique key for this step
    },
    {
        title: "Work Experience",       // Third step - Work Experience
        component: WorkExperienceForm,  // Uses WorkExperienceForm component
        key: "work-experience",         // Unique key for this step
    }
];