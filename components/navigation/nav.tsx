import { auth } from "@/server/auth";
import { UserButton } from "./user-button";
import { Button } from "../ui/button";
import Link from "next/link";

import { LogIn } from "lucide-react";

export default async function Nav(){
    const session = await auth();
    

    return(
        <header className="bg-slate-500 py-4 ">
            <nav>
                <ul className="flex justify-between">
                    <li>Logo</li>
                    {!session ?(
                        <li>
                            <Button>
                                <Link href="auth/login"><LogIn size={16}/><span>Login</span></Link>
                            </Button>
                        </li>
                    ):null}
                    <li><UserButton expires={session?.expires ?? ""}
                    user={session?.user}/></li>
                </ul>
            </nav>
        </header>
    )
}