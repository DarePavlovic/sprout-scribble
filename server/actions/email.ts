'use server'
import getBaseUrl from "@/lib/base-url"
import { get } from "http"
import { Resend } from "resend"
const resend = new Resend(process.env.RESEND_API_KEY)
const domain = getBaseUrl()
export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`
    const {data,error} = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Sproud and Scribble - Confirmation Email",
        html: `<p>Click to <a htef='${confirmLink}'>  confirm your email address:</p>`,
    })
    if(error) return console.log(error)
    if(data) return data
}