import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Info } from "lucide-react";
import { cookies } from "next/dist/server/request/cookies";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
    "use server";
    const apiKey = formData.get("apiKey");

    const response = await fetch("http://localhost:8080/accounts", {
        headers: {
            "X-API-Key": apiKey as string,
        },
    })

    if (!response.ok) {
        throw new Error("API Key inválida");
    }

    const cookieStore = await cookies();
    cookieStore.set("apiKey", apiKey as string)
    redirect("/invoices")
}

export default function AuthForm() {
    return (
        <form className="space-y-4" action={loginAction}>
            <div className="space-y-2">
                <label htmlFor="apiKey" className="text-sm font-medium text-slate-300">
                    API Key
                </label>
                <div className="flex gap-2">
                    <Input
                        id="apiKey"
                        placeholder="Digite sua API Key"
                        className="bg-slate-800 border-slate-700 text-white"
                        name="apiKey"
                        required
                        autoComplete="off"
                    />
                    <Button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700"
                    >
                        <span className="sr-only">Entrar</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </Button>
                </div>
            </div>

            <div className="rounded-md bg-slate-800/50 p-4 text-sm">
                <div className="flex gap-3">
                    <Info className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-medium text-blue-400 mb-1">Como obter uma API Key?</h4>
                        <p className="text-slate-400">
                            Para obter sua API Key, você precisa criar uma conta de comerciante. Entre em contato com nosso
                            suporte para mais informações.
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
}
