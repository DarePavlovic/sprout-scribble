"use server"

import { createSafeActionClient } from "next-safe-action"
import { RegisterSchema} from "@/types/register-schema"
import { db } from "..";
import { eq } from "drizzle-orm";
import { users } from "../schema"
import bcrypt from "bcrypt"
import { generateEmailVerificationToken } from "./tokens";
import { send } from "process";
import { sendVerificationEmail } from "./email";
const action = createSafeActionClient();

export const emailRegister = action.schema(RegisterSchema).action(
    async({ parsedInput: { email, password, name } }) => {
         const hashedPassword = await bcrypt.hash(password, 10)
        const existingUser = await db.query.users.findFirst({
            where: eq(users.email, email),
        })
        if(existingUser) {
            if(!existingUser.emailVerified) {
                const verificationToken = await generateEmailVerificationToken(email);
                await sendVerificationEmail(verificationToken[0].email, verificationToken[0].token)
                return {success: 'Verification email sent!'};
            }
            return {
                error: "Email already exists",
            }
        }
        //Logic for when the user is not registered
        const newUser = await db.insert(users).values({
            email,
            name,
        })
        const verificationToken = await generateEmailVerificationToken(email);
        await sendVerificationEmail(verificationToken[0].email, verificationToken[0].token)
    }
)
