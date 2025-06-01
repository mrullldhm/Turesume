import { EditorFormProps } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm, UseFormReturn } from "react-hook-form";
import { certificateSchema, CertificateValues } from "@/lib/validation";
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

export default function CertificateForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<CertificateValues>({
    resolver: zodResolver(certificateSchema),
    defaultValues: {
      certificates: resumeData.certificates || [],
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
        certificates:
          values.certificates?.filter((cert) => cert !== undefined) || [],
      });
    });
    // Cleanup function
    return () => subscription.unsubscribe();
  }, [form, resumeData, setResumeData]);

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "certificates",
  });

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">Certificate</h2>
        <p className="text-sm text-muted-foreground">
          Add as many certificate as you have
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-3">
          {fields.map((field, index) => (
            <CertificateItem
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
                  issueDate: "",
                  credentialId: "",
                  credentialUrl: "",
                  description: "",
                })
              }
            >
              Add Certificate
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

interface CertificateItemProps {
  form: UseFormReturn<CertificateValues>;
  index: number;
  remove: (index: number) => void;
}

function CertificateItem({ form, index, remove }: CertificateItemProps) {
  return (
    <div className="space-y-6 border rounded-md bg-background p-3">
      <div className="flex justify-between gap-2">
        <span className="font-semibold">Certificate {index + 1}</span>
        <GripHorizontal className="size-5 cursor-grab text-muted-foreground" />
      </div>
      <FormField
        control={form.control}
        name={`certificates.${index}.title`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input {...field} placeholder="e.g., Certificate Title" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`certificates.${index}.issuer`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Issuer</FormLabel>
            <FormControl>
              <Input {...field} placeholder="e.g., ABC University" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`certificates.${index}.issueDate`}
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
        name={`certificates.${index}.credentialId`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Credential ID</FormLabel>
            <FormControl>
              <Input {...field} placeholder="e.g., 1234567890" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`certificates.${index}.credentialUrl`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Credential URL</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="url"
                placeholder="e.g., https://example.com/credential"
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`certificates.${index}.description`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="e.g., Describe your certificate"
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
