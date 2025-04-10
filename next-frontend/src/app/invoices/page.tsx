import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Download, Plus } from "lucide-react"
import Link from "next/link"

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
            <Link href="/invoice/new">
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <Plus className="mr-2 h-4 w-4" />
                Nova Fatura
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-slate-800/50 rounded-md">
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-1.5 block">Status</label>
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
                  <label className="text-sm font-medium text-slate-300 mb-1.5 block">Data Inicial</label>
                  <Input type="text" placeholder="dd/mm/aaaa" className="bg-slate-800 border-slate-700 text-white" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-1.5 block">Data Final</label>
                  <Input type="text" placeholder="dd/mm/aaaa" className="bg-slate-800 border-slate-700 text-white" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-1.5 block">Buscar</label>
                  <Input
                    type="text"
                    placeholder="ID ou descrição"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-800">
                      <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">ID</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">DATA</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">DESCRIÇÃO</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">VALOR</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">STATUS</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">AÇÕES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-sm text-slate-300">#INV-001</td>
                      <td className="py-3 px-4 text-sm text-slate-300">30/03/2025</td>
                      <td className="py-3 px-4 text-sm text-slate-300">Compra Online #123</td>
                      <td className="py-3 px-4 text-sm text-slate-300">R$ 1.500,00</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          Aprovado
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Link href="/invoice/INV-001">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-sm text-slate-300">#INV-002</td>
                      <td className="py-3 px-4 text-sm text-slate-300">29/03/2025</td>
                      <td className="py-3 px-4 text-sm text-slate-300">Serviço Premium</td>
                      <td className="py-3 px-4 text-sm text-slate-300">R$ 15.000,00</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                          Pendente
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-sm text-slate-300">#INV-003</td>
                      <td className="py-3 px-4 text-sm text-slate-300">28/03/2025</td>
                      <td className="py-3 px-4 text-sm text-slate-300">Assinatura Mensal</td>
                      <td className="py-3 px-4 text-sm text-slate-300">R$ 99,90</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                          Rejeitado
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">Mostrando 1 - 3 de 50 resultados</p>
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
                  <Button className="h-8 w-8 bg-indigo-600 hover:bg-indigo-700">1</Button>
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
  )
}
