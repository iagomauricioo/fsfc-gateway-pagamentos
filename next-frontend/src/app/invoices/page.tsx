import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import Link from "next/link";
import { InvoicesList } from "./invoices-list";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Header />
      <main className="flex-1 p-6">
        <Card className="w-full bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-2xl text-white">Faturas</CardTitle>
              <CardDescription className="text-slate-400">
                Gerencie suas faturas e acompanhe os pagamentos
              </CardDescription>
            </div>
            <Link href="/invoices/new">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-zinc-100">
                <Plus className="mr-2 h-4 w-4" />
                Nova Fatura
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-slate-800/50 rounded-md">
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-1.5 block">
                    Status
                  </label>
                  <Select defaultValue="all">
                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                      <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="approved">Aprovado</SelectItem>
                      <SelectItem value="pending">Pendente</SelectItem>
                      <SelectItem value="rejected">Rejeitado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-1.5 block">
                    Data Inicial
                  </label>
                  <Input
                    type="text"
                    placeholder="dd/mm/aaaa"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-1.5 block">
                    Data Final
                  </label>
                  <Input
                    type="text"
                    placeholder="dd/mm/aaaa"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-1.5 block">
                    Buscar
                  </label>
                  <Input
                    type="text"
                    placeholder="ID ou descrição"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
              </div>

              <InvoicesList />

              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">
                  Mostrando 1 - 3 de 50 resultados
                </p>
                <div className="flex gap-1">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 bg-slate-800 border-slate-700 text-slate-400"
                  >
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
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </Button>
                  <Button className="h-8 w-8 bg-indigo-600 hover:bg-indigo-700">
                    1
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 bg-slate-800 border-slate-700 text-slate-400"
                  >
                    2
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 bg-slate-800 border-slate-700 text-slate-400"
                  >
                    3
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 bg-slate-800 border-slate-700 text-slate-400"
                  >
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
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
