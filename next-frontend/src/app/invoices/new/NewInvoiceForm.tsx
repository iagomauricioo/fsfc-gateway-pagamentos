"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CreditCard } from "lucide-react";
import { createInvoiceAction } from "./create-invoice-action";
import { Button } from "@/components/ui/button";

export function NewInvoiceForm() {
  return (
    <form
      action={createInvoiceAction}
      className="space-y-6 w-full"
      id="new-invoice-form"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="value"
              className="text-sm font-medium text-slate-300"
            >
              Valor
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                R$
              </span>
              <Input
                id="value"
                name="value"
                type="number"
                step={0.01}
                min={0}
                placeholder="0,00"
                className="pl-10 bg-slate-800 border-slate-700 text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="description"
              className="text-sm font-medium text-slate-300"
            >
              Descrição
            </label>
            <Textarea
              id="description"
              name="description"
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
              <label
                htmlFor="cardNumber"
                className="text-sm font-medium text-slate-300"
              >
                Número do Cartão
              </label>
              <div className="relative">
                <Input
                  id="cardNumber"
                  name="cardNumber"
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
                <label
                  htmlFor="expiry"
                  className="text-sm font-medium text-slate-300"
                >
                  Data de Expiração
                </label>
                <Input
                  id="expiry"
                  name="expiry"
                  type="text"
                  placeholder="MM/AA"
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="cvv"
                  className="text-sm font-medium text-slate-300"
                >
                  CVV
                </label>
                <Input
                  id="cvv"
                  name="cvv"
                  type="text"
                  placeholder="123"
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="cardName"
                className="text-sm font-medium text-slate-300"
              >
                Nome no Cartão
              </label>
              <Input
                id="cardName"
                name="cardName"
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
        <Button
          variant="outline"
          className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          form="new-invoice-form"
          className="bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-zinc-100"
        >
          <CreditCard className="mr-2 h-4 w-4" />
          Processar Pagamento
        </Button>
      </div>
    </form>
  );
}
