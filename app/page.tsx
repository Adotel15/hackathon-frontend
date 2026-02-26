"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

export default function Home() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirm = async () => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch("/api/order-confirmation", {
        method: "GET",
        cache: "no-store",
      });
    } catch {
    } finally {
      router.push("/confirmado");
    }
  };

  return (
    <div className="min-h-screen flex flex-col max-w-[430px] mx-auto">
      <Header />

      <main className="flex-1 px-5 pt-8">
        <h1 className="text-xl font-medium mb-3 tracking-tight">
          ¿QUIERES SELECCIONAR ESTE ARTÍCULO?
        </h1>
        <p className="text-sm text-gray-700 mb-6 leading-relaxed">
          Este artículo se añadirá a tu pedido original sin ningún coste
          adicional.
        </p>

        <p className="text-sm mb-6">
          <span className="font-bold">Nº DE PEDIDO:</span> CYGYCW
        </p>

        <ProductCard />

        <button
          type="button"
          onClick={handleConfirm}
          disabled={isSubmitting}
          className="block w-full bg-black text-white text-center py-4 mt-8 text-sm font-medium uppercase tracking-wider"
        >
          Confirmar
        </button>
        <button
          type="button"
          className="block w-full border border-black text-black text-center py-4 mt-3 text-sm font-medium uppercase tracking-wider"
        >
          Cancelar
        </button>
      </main>

      <Footer />
    </div>
  );
}
