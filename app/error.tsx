"use client"
import { useEffect } from "react"

//error
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        console.error(error)
    }, [error]);
    return (
        <div className="w-full min-h-56 text-large flex items-center flex-col">
            <h2>Something went wrong! {error.message}</h2>
            <button onClick={()=>reset()}>Try again</button>
        </div>
    );
}
