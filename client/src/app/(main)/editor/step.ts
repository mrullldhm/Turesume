// Importing form components for each step
import { EditorFormProps } from "@/lib/types";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";
import EducationForm from "./forms/EducationForm";
import SkillForm from "./forms/SkillForm";
import SummaryForm from "./forms/SummaryForm";
import AwardForm from "./forms/AwardForm";

// Define the steps configuration for a multi-step form process
export const steps: {
  title: string; // Display title for the step
  component: React.ComponentType<EditorFormProps>; // React component to render for this step
  key: string; // Unique identifier for the step
}[] = [
  {
    title: "General Information", // First step - General Information
    component: GeneralInfoForm, // Uses GeneralInfoForm component
    key: "general-info", // Unique key for this step
  },
  {
    title: "Personal Information", // Second step - Personal Information
    component: PersonalInfoForm, // Uses PersonalInfoForm component
    key: "personal-info", // Unique key for this step
  },
  {
    title: "Work Experience", // Third step - Work Experience
    component: WorkExperienceForm, // Uses WorkExperienceForm component
    key: "work-experience", // Unique key for this step
  },
  {
    title: "Education", // Fourth step - Education
    component: EducationForm, // Placeholder component
    key: "education", // Unique key for this step
  },
  {
    title: "Award", // Fifth step - Skills
    component: AwardForm, // Placeholder component
    key: "awards", // Unique key for this step
  },
  {
    title: "Skills", // Fifth step - Skills
    component: SkillForm, // Placeholder component
    key: "skills", // Unique key for this step
  },
  {
    title: "Summary", // Sixth step - Summary
    component: SummaryForm, // Placeholder component
    key: "summary", // Unique key for this step
  }
];
