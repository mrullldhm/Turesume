import { useForm } from "react-hook-form"
import { generalInfoSchema, GeneralInfoValues } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function GeneralInfoForm() {
const form = useForm<GeneralInfoValues>({
    resolver: zodResolver(generalInfoSchema),
    defaultValues: {
        title: "",
        description: "",
    }
})

    return (
        <div className="max-w-xl mx-auto space-y-6">
            <div className="space-y-1.5 text-center">
                <h2 className="text-2xl font-semibold">General Info</h2>
                <p className="text-sm text-muted-foreground">This will not be appear in the resume</p>
            </div>
            <Form {...form}>
                <form className="space-y-3" action="">
                    <FormField 
                        control={form.control}
                        name="title"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Project Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Company A" autoFocus />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="description"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="A resume for the next job" />
                                </FormControl>
                                <FormDescription>
                                    A short description of the project.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </div>
    )
}