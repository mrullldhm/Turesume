import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema, PersonalInfoValues } from "@/lib/validation";

export default function PersonalInfoForm() {
    const form = useForm<PersonalInfoValues>({
        resolver: zodResolver(personalInfoSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            jobTittle: "",
            city: "",
            country: "",
            phone: "",
            email: "",
            photo: undefined,
        }
    })


    return (
        <>Personal information</>
    )
}