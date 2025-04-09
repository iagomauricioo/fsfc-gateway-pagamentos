import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function InvoiceDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Header />
      <main className="flex-1 p-6">
        <Card className="w-full bg-slate-900 border-slate-800">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Link href="/dashboard">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-indigo-400">
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  </Link>
                  <h1 className="text-xl font-semibold text-white">Fatura #{params.id}</h1>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    Aprovado
                  </span>
                </div>
                <Button className="bg-slate-800 hover:bg-slate-700 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </div>

              <p className="text-sm text-slate-400">Criada em 30/03/2025 às 14:30</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-slate-800/50 rounded-md p-6">
                  <h2 className="text-lg font-medium text-white mb-4">Informações da Fatura</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-400">ID da Fatura</span>
                      <span className="text-white">#INV-001</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Valor</span>
                      <span className="text-white">R$ 1.500,00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Data de Criação</span>
                      <span className="text-white">30/03/2025 14:30</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Última Atualização</span>
                      <span className="text-white">30/03/2025 14:35</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Descrição</span>
                      <span className="text-white">Compra Online #123</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-md p-6">
                  <h2 className="text-lg font-medium text-white mb-4">Status da Transação</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Fatura Criada</p>
                        <p className="text-sm text-slate-400">30/03/2025 14:30</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Pagamento Processado</p>
                        <p className="text-sm text-slate-400">30/03/2025 14:32</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Transação Aprovada</p>
                        <p className="text-sm text-slate-400">30/03/2025 14:35</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-md p-6">
                  <h2 className="text-lg font-medium text-white mb-4">Método de Pagamento</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Tipo</span>
                      <span className="text-white">Cartão de Crédito</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Últimos Dígitos</span>
                      <span className="text-white">**** **** **** 1234</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Titular</span>
                      <span className="text-white">João da Silva</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-md p-6">
                  <h2 className="text-lg font-medium text-white mb-4">Dados Adicionais</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-400">ID da Conta</span>
                      <span className="text-white">ACC-12345</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">IP do Cliente</span>
                      <span className="text-white">192.168.1.1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Dispositivo</span>
                      <span className="text-white">Desktop - Chrome</span>
                    </div>
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
