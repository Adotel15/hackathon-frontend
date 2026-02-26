export default function Footer() {
  return (
    <footer className="mt-16">
      {/* Newsletter */}
      <div className="px-5 pb-8">
        <p className="text-sm font-medium mb-4">
          Recibe promociones exclusivas, ventas privadas y novedades
        </p>
        <div className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="E-mail"
            className="border border-black px-4 py-3 text-sm w-full outline-none"
          />
          <button className="border border-black px-4 py-3 text-sm font-medium uppercase tracking-wide hover:bg-black hover:text-white transition-colors">
            Suscribirme
          </button>
        </div>
        <p className="text-xs text-gray-600 mt-3">
          Al suscribirse, confirmas que has leído la{" "}
          <a href="#" className="underline font-medium text-black">
            Política de privacidad
          </a>
        </p>
      </div>

      {/* Country selector */}
      <div className="border-t border-gray-200 px-5 py-5 flex items-center justify-between">
        <span className="text-xs tracking-wide">
          ESPAÑA (PENÍNSULA Y BALEARES) · CASTELLANO
        </span>
        <span className="text-lg">→</span>
      </div>

      {/* Social links */}
      <div className="border-t border-gray-200 px-5 py-5">
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs tracking-wide">
          <span>INSTAGRAM</span>
          <span>FACEBOOK</span>
          <span>YOUTUBE</span>
          <span>TIKTOK</span>
          <span>SPOTIFY</span>
          <span>PINTEREST</span>
          <span>X</span>
          <span>LINKEDIN</span>
        </div>
      </div>

      {/* Navigation links */}
      <div className="border-t border-gray-200">
        {[
          "AYUDA",
          "MIS COMPRAS",
          "DEVOLUCIONES",
          "TIENDAS",
          "MANGO OUTLET",
          "CLUB MANGO LIKES YOU",
          "TARJETA REGALO",
          "DÍAS ESPECIALES",
          "EMPRESA",
          "TRABAJA CON NOSOTROS",
          "SOSTENIBILIDAD",
          "PRENSA",
          "SITE MAP",
        ].map((link) => (
          <a
            key={link}
            href="#"
            className="block px-5 py-4 text-sm tracking-wide border-b border-gray-100"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Legal links */}
      <div className="px-5 pt-8 pb-4">
        {["POLÍTICA DE PRIVACIDAD Y COOKIES", "CONDICIONES DE VENTA", "CANAL ÉTICO"].map(
          (link) => (
            <a
              key={link}
              href="#"
              className="block py-2 text-sm font-medium tracking-wide"
            >
              {link}
            </a>
          )
        )}
      </div>

      {/* Copyright */}
      <div className="px-5 pb-6 text-xs text-gray-500">
        <p className="mb-2">© 2025 MANGO Todos los derechos reservados</p>
        <p>
          Contact email: contact.sa@mango.com · Phone number: 800 3040 222 · CR: 1010149420 /VAT: 300045159800003
        </p>
      </div>
    </footer>
  );
}
