import { Header } from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { NewInvoiceForm } from "./NewInvoiceForm";

export default function NewInvoicePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Header />
      <main className="flex-1 p-6">
        <Card className="w-full bg-slate-900 border-slate-800">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-semibold text-white">
                  Criar Nova Fatura
                </h1>
                <p className="text-slate-400 mt-1">
                  Preencha os dados abaixo para processar um novo pagamento
                </p>
              </div>
              <NewInvoiceForm />
            </div>
          </CardContent>
        </Card>
      </main>
      <footer className="py-4 text-center text-sm text-slate-500">
        © 2025 Full Cycle Gateway. Todos os direitos reservados.
      </footer>
    </div>
  );
}
