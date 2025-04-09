import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="flex items-center justify-between bg-slate-900 px-6 py-4 border-b border-slate-800">
      <Link href="/dashboard" className="text-xl font-bold text-white">
        Full Cycle Gateway
      </Link>
      <div className="flex items-center gap-4">
        <span className="text-slate-300">Olá, usuário</span>
        <Button variant="destructive" size="sm" className="gap-1">
          <LogOut size={16} />
          Logout
        </Button>
      </div>
    </header>
  )
}
