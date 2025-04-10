"use server"

import { cookies } from "next/headers"

export async function loginAction(formData: FormData) {
    const apiKey = formData.get("apiKey")
    const cookieStore = await cookies()
    
    if (!apiKey) {
        return { error: "API Key é obrigatória" }
    }

    cookieStore.set("apiKey", apiKey as string, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
    })

    return { success: true }
} 