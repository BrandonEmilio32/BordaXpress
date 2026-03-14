"use client";

import Link from "next/link";

const Nav = () => {
  // Modo "vista": navegación estática por ahora, luego se conectará a Supabase
  const servicios = [
    { label: "Bordado", href: "/servicios/bordado" },
    { label: "Serigrafía", href: "/servicios/serigrafia" },
    { label: "DTF", href: "/servicios/dtf" },
    { label: "Sublimado", href: "/servicios/sublimado" },
    { label: "Láser", href: "/servicios/laser" },
  ];

  const categorias = [
    { label: "Playeras", href: "/catalogo" },
    { label: "Sudaderas", href: "/catalogo" },
    { label: "Gorras", href: "/catalogo" },
    { label: "Termos", href: "/catalogo" },
  ];

  return (
    <nav className="bx-nav">
      <div className="bx-nav-logo">
        <Link href="/">BordaXpress</Link>
      </div>
      <div className="bx-nav-links">
        <div className="bx-nav-item bx-nav-dropdown">
          <span>Servicios</span>
          <div className="bx-nav-dropdown-menu">
            {servicios.map((s) => (
              <Link key={s.href} href={s.href}>
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="bx-nav-item bx-nav-dropdown">
          <span>Catálogo</span>
          <div className="bx-nav-dropdown-menu">
            {categorias.map((c) => (
              <Link key={c.label} href={c.href}>
                {c.label}
              </Link>
            ))}
          </div>
        </div>

        <Link className="bx-nav-item" href="/cotizador">
          Cotizador
        </Link>
        <Link className="bx-nav-item" href="/contacto">
          Contacto
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
