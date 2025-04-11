import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";
import { cookies } from "next/dist/server/request/cookies";
import Link from "next/link";

export async function getInvoices() {
  const cookiesStore = await cookies();
  const apiKey = cookiesStore.get("apiKey")?.value;
  const response = await fetch("http://localhost:8080/invoice", {
    headers: {
      "X-API-Key": apiKey as string,
    },
    method: "GET",
  });
  const data = await response.json();
  return data;
}

type Invoice = {
  id: string;
  created_at: string;
  description: string;
  amount: number;
  status: string;
  payment_type: string;
  card_number: string;
  cvv: string;
  expiry_month: number;
  expiry_year: number;
  cardholder_name: string;
};

export async function InvoicesList() {
  const invoices = await getInvoices();
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-800">
            <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">
              ID
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">
              DATA
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">
              DESCRIÇÃO
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">
              VALOR
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">
              STATUS
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-slate-400">
              AÇÕES
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice: Invoice) => (
            <tr key={invoice.id} className="border-b border-slate-800">
              <td className="py-3 px-4 text-sm text-slate-300">{invoice.id}</td>
              <td className="py-3 px-4 text-sm text-slate-300">
                {new Date(invoice.created_at).toLocaleDateString("pt-BR")}
              </td>
              <td className="py-3 px-4 text-sm text-slate-300">
                {invoice.description}
              </td>
              <td className="py-3 px-4 text-sm text-slate-300">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(invoice.amount)}
              </td>
              <td className="py-3 px-4">
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
              </td>
              <td className="py-3 px-4">
                <div className="flex gap-2">
                  <Link href={`/invoices/${invoice.id}`}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-slate-400"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-slate-400"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
