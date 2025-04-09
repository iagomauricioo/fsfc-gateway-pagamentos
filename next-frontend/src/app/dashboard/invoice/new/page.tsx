import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CreditCard, Lock } from "lucide-react"
import Link from "next/link"

export default function NewInvoicePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Header />
      <main className="flex-1 p-6">
        <Card className="w-full bg-slate-900 border-slate-800">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-semibold text-white">Criar Nova Fatura</h1>
                <p className="text-slate-400 mt-1">Preencha os dados abaixo para processar um novo pagamento</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="value" className="text-sm font-medium text-slate-300">
                      Valor
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">R$</span>
                      <Input
                        id="value"
                        type="text"
                        placeholder="0,00"
                        className="pl-10 bg-slate-800 border-slate-700 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium text-slate-300">
                      Descrição
                    </label>
                    <Textarea
                      id="description"
                      placeholder="Descreva o motivo do pagamento"
                      className="min-h-[120px] bg-slate-800 border-slate-700 text-white"
                    />
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-md p-6">
                  <h2 className="text-lg font-medium text-white mb-4 flex items-center">
                    <CreditCard className="mr-2 h-5 w-5 text-slate-400" />
                    Dados do Cartão
                  </h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="cardNumber" className="text-sm font-medium text-slate-300">
                        Número do Cartão
                      </label>
                      <div className="relative">
                        <Input
                          id="cardNumber"
                          type="text"
                          placeholder="0000 0000 0000 0000"
                          className="pr-10 bg-slate-800 border-slate-700 text-white"
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400">
                          <CreditCard className="h-4 w-4" />
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="expiry" className="text-sm font-medium text-slate-300">
                          Data de Expiração
                        </label>
                        <Input
                          id="expiry"
                          type="text"
                          placeholder="MM/AA"
                          className="bg-slate-800 border-slate-700 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="cvv" className="text-sm font-medium text-slate-300">
                          CVV
                        </label>
                        <Input
                          id="cvv"
                          type="text"
                          placeholder="123"
                          className="bg-slate-800 border-slate-700 text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="cardName" className="text-sm font-medium text-slate-300">
                        Nome no Cartão
                      </label>
                      <Input
                        id="cardName"
                        type="text"
                        placeholder="Como aparece no cartão"
                        className="bg-slate-800 border-slate-700 text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-md p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Subtotal</span>
                  <span className="text-white">R$ 0,00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Taxa de Processamento (2%)</span>
                  <span className="text-white">R$ 0,00</span>
                </div>
                <div className="border-t border-slate-700 pt-4 flex justify-between">
                  <span className="text-lg font-medium text-white">Total</span>
                  <span className="text-lg font-medium text-white">R$ 0,00</span>
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <Link href="/dashboard">
                  <Button variant="outline" className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
                    Cancelar
                  </Button>
                </Link>
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  <Lock className="mr-2 h-4 w-4" />
                  Processar Pagamento
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <footer className="py-4 text-center text-sm text-slate-500">
        © 2025 Full Cycle Gateway. Todos os direitos reservados.
      </footer>
    </div>
  )
}
