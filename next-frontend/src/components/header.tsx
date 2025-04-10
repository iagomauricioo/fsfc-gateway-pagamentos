import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cookies } from "next/dist/server/request/cookies";
import { redirect } from "next/navigation";

export async function logoutAction() {
  "use server";
  const cookieStore = await cookies();
  cookieStore.delete("apiKey");
  redirect("/login");
}

export async function Header() {

  const cookieStore = await cookies();
  const isAuthPage = cookieStore.get("apiKey")?.value !== undefined;

  return (
    <header className="flex items-center justify-between bg-slate-900 px-6 py-4 border-b border-slate-800">
      <Link href="/" className="text-xl font-bold text-white">
        Full Cycle Gateway
      </Link>

      {isAuthPage && (
        <div className="flex items-center gap-4">
          <span className="text-slate-300">Olá, usuário</span>
          <Button variant="destructive" size="sm" className="gap-1" onClick={logoutAction}>
            <LogOut size={16} />
            Logout
          </Button>
        </div>
      )}
    </header>
  )
}
