'use client'
import { useFormStatus } from "react-dom"


export default function PostButton() {
    const {pending} = useFormStatus();

    return (
        <button disabled={pending} 
        className="bg-blue-600 py-2 px-4 disable:opacity" type="submit">Post</button>
    )
};
