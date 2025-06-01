import { EditorFormProps } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm, UseFormReturn } from "react-hook-form";
import { awardSchema, AwardValues } from "@/lib/validation";
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

export default function AwardForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<AwardValues>({
    resolver: zodResolver(awardSchema),
    defaultValues: {
      awards: resumeData.awards || [],
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
        awards: values.awards?.filter((award) => award !== undefined) || [],
      });
    });
    // Cleanup function
    return () => subscription.unsubscribe();
  }, [form, resumeData, setResumeData]);

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "awards",
  });

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">Award</h2>
        <p className="text-sm text-muted-foreground">
          Add as many award as you have
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-3">
          {fields.map((field, index) => (
            <AwardItem
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
                  issuer: "",
                  dateReceived: "",
                  description: "",
                })
              }
            >
              Add Award
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

interface AwardItemProps {
  form: UseFormReturn<AwardValues>;
  index: number;
  remove: (index: number) => void;
}

function AwardItem({ form, index, remove }: AwardItemProps) {
  return (
    <div className="space-y-6 border rounded-md bg-background p-3">
      <div className="flex justify-between gap-2">
        <span className="font-semibold">Award {index + 1}</span>
        <GripHorizontal className="size-5 cursor-grab text-muted-foreground" />
      </div>
      <FormField
        control={form.control}
        name={`awards.${index}.title`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input {...field} placeholder="e.g., Best Employee of the Year" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`awards.${index}.issuer`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Issuer</FormLabel>
            <FormControl>
              <Input {...field} placeholder="e.g., ABC Company" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`awards.${index}.dateReceived`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Issued Date</FormLabel>
            <FormControl>
              <Input {...field} type="date" value={field.value?.slice(0, 10)} />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`awards.${index}.description`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="e.g., I received this award for my exceptional performance in 2022."
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
