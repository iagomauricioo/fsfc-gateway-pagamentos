"use server";
import { cookies } from "next/headers";

export async function createInvoiceAction(formData: FormData) {
  const cookiesStore = await cookies();
  const apiKey = cookiesStore.get("apiKey")?.value;

  const amount = formData.get("value")?.toString()?.replace(",", ".") ?? "";
  const amountFloat = parseFloat(amount);
  const description = formData.get("description")?.toString() ?? "";
  const card_number = formData.get("cardNumber")?.toString() ?? "";
  const [expiry_month, expiry_year] = 
    formData.get("expiry")?.toString()?.split("/") ?? [];
  const expiry_month_int = parseInt(expiry_month);
  const expiry_year_int = parseInt(expiry_year);
  const cvv = formData.get("cvv");
  const cardholder_name = formData.get("cardName");

  const response = await fetch("http://localhost:8080/invoice", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiKey as string,
    },
    body: JSON.stringify({
      amount: amountFloat,
      description,
      payment_type: "credit_card",
      card_number,
      cvv,
      expiry_month: expiry_month_int,
      expiry_year: expiry_year_int,
      cardholder_name,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create invoice");
  }

  const data = await response.json();
  
  const { redirect } = await import("next/navigation");
  redirect(`/invoices/${data.id}`);

  return data;
}
  