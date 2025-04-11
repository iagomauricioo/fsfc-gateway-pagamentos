import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, CheckCircle, Clock, XCircle } from "lucide-react";
import { cookies } from "next/dist/server/request/cookies";
import Link from "next/link";

async function getInvoice(id: string) {
  const cookiesStore = await cookies();
  const apiKey = cookiesStore.get("apiKey")?.value;
  const response = await fetch(`http://localhost:8080/invoice/${id}`, {
    headers: {
      "X-API-Key": apiKey || "",
    },
    method: "GET",
  });
  const data = await response.json();
  return data;
}

export default async function InvoiceDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const invoice = await getInvoice(params.id);
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Header />
      <main className="flex-1 p-6">
        <Card className="w-full bg-slate-900 border-slate-800">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Link href="/invoices">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-indigo-400"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  </Link>
                  <h1 className="text-xl font-semibold text-white">
                    Fatura #{invoice.id}
                  </h1>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      invoice.status === "approved"
                        ? "bg-green-100 text-green-800"
                        : invoice.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {invoice.status === "approved"
                      ? "Aprovado"
                      : invoice.status === "pending"
                      ? "Pendente"
                      : "Rejeitado"}
                  </span>
                </div>
                <Button className="bg-slate-800 hover:bg-slate-700 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </div>
              <p className="text-sm text-slate-400">
                Criada em{" "}
                {new Date(invoice.created_at).toLocaleDateString("pt-BR")} às{" "}
                {new Date(invoice.created_at).toLocaleTimeString("pt-BR")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-slate-800/50 rounded-md p-6">
                  <h2 className="text-lg font-medium text-white mb-4">
                    Informações da Fatura
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-400">ID da Fatura</span>
                      <span className="text-white text-sm">{invoice.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Valor</span>
                      <span className="text-white">
                        R${" "}
                        {new Intl.NumberFormat("pt-BR", {
                          minimumFractionDigits: 2,
                        }).format(invoice.amount)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Data de Criação</span>
                      <span className="text-white">
                        {new Date(invoice.created_at).toLocaleDateString(
                          "pt-BR"
                        )}{" "}
                        {new Date(invoice.created_at).toLocaleTimeString(
                          "pt-BR"
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Última Atualização</span>
                      <span className="text-white">
                        {new Date(invoice.updated_at).toLocaleDateString(
                          "pt-BR"
                        )}{" "}
                        {new Date(invoice.updated_at).toLocaleTimeString(
                          "pt-BR"
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Descrição</span>
                      <span className="text-white">{invoice.description}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-md p-6">
                  <h2 className="text-lg font-medium text-white mb-4">
                    Status da Transação
                  </h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Fatura Criada</p>
                        <p className="text-sm text-slate-400">
                          {new Date(invoice.created_at).toLocaleDateString(
                            "pt-BR"
                          )}{" "}
                          {new Date(invoice.created_at).toLocaleTimeString(
                            "pt-BR"
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        {invoice.status === "approved" ? (
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        ) : invoice.status === "pending" ? (
                          <Clock className="h-6 w-6 text-yellow-500" />
                        ) : (
                          <XCircle className="h-6 w-6 text-red-500" />
                        )}
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          Pagamento{" "}
                          {invoice.status === "approved"
                            ? "Processado"
                            : invoice.status === "pending"
                            ? "Pendente"
                            : "Rejeitado"}
                        </p>
                        <p className="text-sm text-slate-400">
                          {new Date(invoice.updated_at).toLocaleDateString(
                            "pt-BR"
                          )}{" "}
                          {new Date(invoice.updated_at).toLocaleTimeString(
                            "pt-BR"
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        {invoice.status === "approved" ? (
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        ) : invoice.status === "pending" ? (
                          <Clock className="h-6 w-6 text-yellow-500" />
                        ) : (
                          <XCircle className="h-6 w-6 text-red-500" />
                        )}
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          Transação{" "}
                          {invoice.status === "approved"
                            ? "Aprovada"
                            : invoice.status === "pending"
                            ? "Pendente"
                            : "Rejeitada"}
                        </p>
                        <p className="text-sm text-slate-400">
                          {new Date(invoice.updated_at).toLocaleDateString(
                            "pt-BR"
                          )}{" "}
                          {new Date(invoice.updated_at).toLocaleTimeString(
                            "pt-BR"
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-md p-6">
                  <h2 className="text-lg font-medium text-white mb-4">
                    Método de Pagamento
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Tipo</span>
                      <span className="text-white">
                        {invoice.payment_type === "credit_card"
                          ? "Cartão de Crédito"
                          : "Pix"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Últimos Dígitos</span>
                      <span className="text-white">
                        {invoice.payment_type === "credit_card"
                          ? "**** **** **** " + invoice.card_last_digits
                          : "Pix"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
