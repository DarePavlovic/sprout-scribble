'use server'
import { db } from "..";
import {eq} from "drizzle-orm";
import { emailTokens } from "../schema"
export const getVerificationTokenByEmail = async (email: string) => {
    try{
        const token = await db.query.emailTokens.findFirst({
            where: eq(emailTokens.token, email),
        })
        return token
    }catch (error) {
        return null
    }
}


export const generateEmailVerificationToken = async (email: string) => {
    const token = crypto.randomUUID()
    const expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour from now

    const existingToken = await getVerificationTokenByEmail(email)
    if(existingToken) {
        await db.delete(emailTokens).where(eq(emailTokens.id, existingToken.id))
    }
    const verificationToken = await db.insert(emailTokens).values({
        email,
        token,
        expires: expiryDate,
    }).returning()
    return verificationToken;
}
