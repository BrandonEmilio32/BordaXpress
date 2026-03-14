"use client";

import Link from "next/link";

const Nav = () => {
  const mainLinks = [
    { label: "Comprar catálogo", href: "/catalogo" },
    { label: "Servicios", href: "/servicios" },
    { label: "Acerca", href: "/about" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <nav className="bx-nav">
      <div className="bx-nav-left">
        {mainLinks.map((link) => (
          <Link key={link.label} href={link.href} className="bx-nav-link">
            {link.label}
          </Link>
        ))}
      </div>

      <div className="bx-nav-logo-block">
        <span className="bx-nav-logo-main">BORDAXPRESS</span>
        <span className="bx-nav-logo-sub">catálogo textil</span>
      </div>

      <div className="bx-nav-right">
        <Link href="/cotizador" className="bx-nav-link bx-nav-link-muted">
          Cotizador B2B
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
