import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

export default function Confirmado() {
  return (
    <div className="min-h-screen flex flex-col max-w-[430px] mx-auto">
      <Header />

      <main className="flex-1 px-5 pt-8">
        <h1 className="text-xl font-medium mb-3 tracking-tight">
          ¡CAMBIO CONFIRMADO!
        </h1>
        <p className="text-sm text-gray-700 mb-6 leading-relaxed">
          En breves recibirás un e-mail de confirmación con el cambio de
          artículo.
        </p>

        <p className="text-sm mb-6">
          <span className="font-bold">Nº DE PEDIDO:</span> CYGYCW
        </p>

        <ProductCard />
      </main>

      <Footer />
    </div>
  );
}
