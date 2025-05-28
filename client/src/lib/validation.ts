import { z } from "zod";

// A string that can be empty, undefined, or a trimmed string
export const optionalString = z.string().trim().optional().or(z.literal(""));

// General Information Schema
export const generalInfoSchema = z.object({
  title: optionalString,
  description: optionalString,
});
// TypeScript type automatically generated from the schema
export type GeneralInfoValues = z.infer<typeof generalInfoSchema>;

// Personal Information Schema
export const personalInfoSchema = z.object({
  firstName: optionalString,
  lastName: optionalString,
  jobTitle: optionalString,
  city: optionalString,
  country: optionalString,
  phone: optionalString,
  email: optionalString,
  photo: z
    .custom<File | undefined>()
    .refine(
      (file) =>
        !file || (file instanceof File && file.type.startsWith("image/")),
      "Must be a valid image file",
    )
    .refine(
      (file) => !file || (file && file.size <= 1024 * 1024 * 4),
      "File size must be less than 4MB",
    ),
});
// TypeScript type automatically generated from the schema
export type PersonalInfoValues = z.infer<typeof personalInfoSchema>;

// Work Experience Schema
export const workExperienceSchema = z.object({
  workExperiences: z
    .array(
      z.object({
        position: optionalString,
        company: optionalString,
        startDate: optionalString,
        endDate: optionalString,
        description: optionalString,
      }),
    )
    .optional(),
});
// TypeScript type automatically generated from the schema
export type WorkExperienceValues = z.infer<typeof workExperienceSchema>;

// Education Schema
export const educationSchema = z.object({
  educations: z
    .array(
      z.object({
        institution: optionalString,
        fieldOfStudy: optionalString,
        startDate: optionalString,
        endDate: optionalString,
        description: optionalString,
      }),
    )
    .optional(),
});
// TypeScript type automatically generated from the schema
export type EducationValues = z.infer<typeof educationSchema>;

export const resumeSchema = z.object({
  ...generalInfoSchema.shape,
  ...personalInfoSchema.shape,
  ...workExperienceSchema.shape,
  ...educationSchema.shape,
});

export type ResumeValues = Omit<z.infer<typeof resumeSchema>, "photo"> & {
  id?: string;
  photo?: File | string | null;
};
