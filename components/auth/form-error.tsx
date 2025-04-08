import { CheckCircle2 } from "lucide-react";

export const FormError = ({error}:{error: string}) => {
    if(!error) return null;
    return (
        <div className="bg-destructive/25 flex text-xs font-medium items-center my-4 gap-2  text-secondary-foreground p-3 rounded-md">
            <CheckCircle2 className="h-4 w-4" />
            <p>{error}</p>
        </div>
    )
}
 