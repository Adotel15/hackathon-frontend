import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-4">
          <button className="p-1" aria-label="Menú">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="1" x2="22" y2="1" stroke="black" strokeWidth="1.5"/>
              <line y1="8" x2="22" y2="8" stroke="black" strokeWidth="1.5"/>
              <line y1="15" x2="22" y2="15" stroke="black" strokeWidth="1.5"/>
            </svg>
          </button>
          <Image
            src="/logo.png"
            alt="MANGO"
            width={140}
            height={28}
            className="h-5 w-auto"
            priority
          />
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button className="p-1" aria-label="Buscar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7"/>
              <line x1="16.5" y1="16.5" x2="22" y2="22"/>
            </svg>
          </button>

          {/* User */}
          <button className="p-1" aria-label="Mi cuenta">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
            </svg>
          </button>

          {/* Heart */}
          <button className="p-1" aria-label="Favoritos">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"/>
            </svg>
          </button>

          {/* Cart */}
          <button className="p-1" aria-label="Cesta">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="7" width="18" height="14" rx="1"/>
              <path d="M8 7V5a4 4 0 0 1 8 0v2"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
