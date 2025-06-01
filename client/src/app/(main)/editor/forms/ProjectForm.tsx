import { EditorFormProps } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm, UseFormReturn } from "react-hook-form";
import { projectSchema, ProjectValues } from "@/lib/validation";
import { useEffect } from "react";
import { GripHorizontal } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ProjectForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<ProjectValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projects: resumeData.projects || [],
    },
  });

  useEffect(() => {
    // Get the current unsubscribe function
    const subscription = form.watch((values) => {
      // Update your resume preview state here
      // Example: updateResumePreview(values);
      console.log("Updating preview with:", values);
      setResumeData({
        ...resumeData,
        projects:
          values.projects?.filter((project) => project !== undefined) || [],
      });
    });
    // Cleanup function
    return () => subscription.unsubscribe();
  }, [form, resumeData, setResumeData]);

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "projects",
  });

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">Project</h2>
        <p className="text-sm text-muted-foreground">
          Add as many project as you have
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-3">
          {fields.map((field, index) => (
            <ProjectItem
              key={field.id}
              index={index}
              form={form}
              remove={remove}
            />
          ))}
          <div className="flex justify-center">
            <Button
              type="button"
              onClick={() =>
                append({
                  title: "",
                  publicationDate: "",
                  publicationUrl: "",
                  description: "",
                })
              }
            >
              Add Project
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

interface ProjectItemProps {
  form: UseFormReturn<ProjectValues>;
  index: number;
  remove: (index: number) => void;
}

function ProjectItem({ form, index, remove }: ProjectItemProps) {
  return (
    <div className="space-y-6 border rounded-md bg-background p-3">
      <div className="flex justify-between gap-2">
        <span className="font-semibold">Project {index + 1}</span>
        <GripHorizontal className="size-5 cursor-grab text-muted-foreground" />
      </div>
      <FormField
        control={form.control}
        name={`projects.${index}.title`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input {...field} placeholder="e.g., Project Title" />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`projects.${index}.publicationDate`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Publication Date</FormLabel>
            <FormControl>
              <Input {...field} type="date" value={field.value?.slice(0, 10)} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`projects.${index}.publicationUrl`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Publication URL</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="url"
                placeholder="e.g., https://www.example.com"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`projects.${index}.description`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="e.g., Describe your projects"
                className="h-32"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <Button variant="destructive" onClick={() => remove(index)}>
        Remove
      </Button>
    </div>
  );
}
