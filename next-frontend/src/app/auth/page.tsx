import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Info } from "lucide-react"
import Link from "next/link"

export default function AuthPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Header />
      <main className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md bg-slate-900 border-slate-800">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Autenticação Gateway</CardTitle>
            <CardDescription className="text-slate-400">Insira sua API Key para acessar o sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="apiKey" className="text-sm font-medium text-slate-300">
                  API Key
                </label>
                <div className="flex gap-2">
                  <Input
                    id="apiKey"
                    placeholder="Digite sua API Key"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                  <Link href="/dashboard">
                    <Button className="bg-indigo-600 hover:bg-indigo-700">
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
                  </Link>
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
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
