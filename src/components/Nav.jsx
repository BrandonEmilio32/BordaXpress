"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const Nav = () => {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchNavData = async () => {
      const [{ data: techniques }, { data: cats }] = await Promise.all([
        supabase
          .from("personalization_techniques")
          .select("name, slug")
          .order("name"),
        supabase.from("categories").select("name, slug").order("name"),
      ]);

      setServices(techniques || []);
      setCategories(cats || []);
    };

    fetchNavData();
  }, []);

  return (
    <nav className="bx-nav">
      <div className="bx-nav-logo">
        <Link href="/">BordaXpress</Link>
      </div>
      <div className="bx-nav-links">
        <div className="bx-nav-item bx-nav-dropdown">
          <span>Servicios</span>
          <div className="bx-nav-dropdown-menu">
            {services.map((s) => (
              <Link key={s.slug} href={`/servicios/${s.slug}`}>
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="bx-nav-item bx-nav-dropdown">
          <span>Catálogo</span>
          <div className="bx-nav-dropdown-menu">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/catalogo/categoria/${c.slug}`}
              >
                {c.name}
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
