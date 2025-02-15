"use server"

import {db} from "@/server"
import { posts } from "../schema";
import { revalidatePath } from "next/cache";

export default async function createPost(formData:FormData) {
    const title = formData.get('title')?.toString();
    if(!title) {
        return
    }   
    revalidatePath("/")
    const post = await db.insert(posts).values({
        title: title
    });
    return
}
