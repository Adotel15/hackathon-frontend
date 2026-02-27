import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="flex gap-4">
      <div className="w-[90px] h-[130px] relative flex-shrink-0">
        <Image
          src="https://shop.mango.com/assets/rcs/pics/static/T8/fotos/outfit/S/87017198_70-99999999_01.jpg?imwidth=2048&imdensity=1"
          alt="Vestido Lyocell cuello drapeado"
          fill
          className="object-cover"
          sizes="90px"
        />
      </div>
      <div className="flex flex-col justify-center text-sm">
        <p className="text-xs text-gray-500 mb-1">REF. 87017198-70</p>
        <p className="font-normal mb-1">Vestido Lyocell cuello drapeado</p>
        <p className="mb-1">49,99 €</p>
        <div className="flex gap-4 text-sm">
          <p>Talla: M</p>
          <p>Color: Rojo</p>
        </div>
      </div>
    </div>
  );
}
