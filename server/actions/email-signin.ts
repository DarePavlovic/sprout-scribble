"use server";
import {db} from "..";
import {eq} from "drizzle-orm";
import { LoginSchema } from "@/types/login-schema";
import {createSafeActionClient} from "next-safe-action";
import { users } from "../schema";

export const p = createSafeActionClient();
export const emailSignIn = p.schema(LoginSchema).action(
    async ({parsedInput: {email, password, code}}) => {
        const existingUser = await db.query.users.findFirst({
            where: eq(users.email, email),
        });
        if(existingUser?.email!== email){
            return {
                error: "User with this email does not exist",
            }
        }
        console.log(email, password, code)
        return {success:email}
    }
);

