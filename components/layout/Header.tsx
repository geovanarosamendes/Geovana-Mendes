"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { label: "Início", href: "/" },
  { label: "Projetos", href: "/projetos" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
  { label: "Capacitações", href: "/capacitacoes",},
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function isActiveLink(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          <span className="gradient-text">Geovana</span>
          <span>Mendes</span>
        </Link>

        <nav className="nav-menu">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${isActiveLink(item.href) ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contato" className="btn btn-primary header-cta">
          Vamos Conversar
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="container mobile-menu-container">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`mobile-menu-link ${
                  isActiveLink(item.href) ? "active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}