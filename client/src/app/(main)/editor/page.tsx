import { Metadata } from "next"
import ResumeEditor from "./ResumeEditor"

export const metadata : Metadata = {
    title: "Editor",
    description: "Editor page"
}

export default function Page() {
    return <ResumeEditor />
}