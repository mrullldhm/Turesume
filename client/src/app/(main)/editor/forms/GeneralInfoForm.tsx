import { useForm } from "react-hook-form";
import { generalInfoSchema, GeneralInfoValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function GeneralInfoForm() {
  const form = useForm<GeneralInfoValues>({
    resolver: zodResolver(generalInfoSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">General Information</h2>
        <p className="text-sm text-muted-foreground">
          This information will not be included in the final resume.
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-3" action="">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Resume Project Title</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="e.g., Software Engineer Resume"
                    autoFocus
                  />
                </FormControl>
                <FormDescription>
                  A clear name to identify this resume project.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="e.g., Resume for senior developer role at Tech Corp"
                  />
                </FormControl>
                <FormDescription>
                  Provide a brief overview of the resume projects purpose.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
