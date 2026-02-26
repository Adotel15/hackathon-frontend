import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="flex gap-4">
      <div className="w-[90px] h-[130px] relative flex-shrink-0">
        <Image
          src="https://shop.mango.com/assets/rcs/pics/static/T2/fotos/outfit/S/27025826_43-99999999_01.jpg?imwidth=2048&imdensity=1"
          alt="Vestido satinado hombreras"
          fill
          className="object-cover"
          sizes="90px"
        />
      </div>
      <div className="flex flex-col justify-center text-sm">
        <p className="text-xs text-gray-500 mb-1">REF. 17071186</p>
        <p className="font-normal mb-1">Vestido punto fino evasé...</p>
        <p className="mb-1">39,99 €</p>
        <div className="flex gap-4 text-sm">
          <p>Talla: M</p>
          <p>Color: Rojo</p>
        </div>
      </div>
    </div>
  );
}
