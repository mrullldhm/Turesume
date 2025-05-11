import { z } from "zod";

// A string that can be empty, undefined, or a trimmed string
export const optionalString = z.string().trim().optional().or(z.literal(""));

// Schema for general information with optional title and description
export const generalInfoSchema = z.object({
  title: optionalString,
  description: optionalString,
});

// TypeScript type automatically generated from the schema
export type GeneralInfoValues = z.infer<typeof generalInfoSchema>;