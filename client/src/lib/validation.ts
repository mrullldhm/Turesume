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
  photo: z.custom<File | undefined>()
  .refine(
    (file) => !file || (file instanceof File && file.type.startsWith("image/")),
    "Must be a valid image file"
  )
  .refine(
    (file) => !file || (file && file.size <= 1024 * 1024 * 4),
    "File size must be less than 4MB"
  )
});
// TypeScript type automatically generated from the schema
export type PersonalInfoValues = z.infer<typeof personalInfoSchema>;