"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projetos" },
  { label: "Blog", href: "/blog" },
  { label: "Training", href: "/capacitacoes" },
  { label: "About", href: "/sobre" },
  { label: "Contact", href: "/contato" },
];

export default function Header() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [language, setLanguage] = useState<"en-US" | "pt-BR">("en-US");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const savedLanguage = localStorage.getItem("language") as
      | "en-US"
      | "pt-BR"
      | null;

    const initialTheme = savedTheme || "dark";
    const initialLanguage = savedLanguage || "en-US";

    setTheme(initialTheme);
    setLanguage(initialLanguage);

    document.documentElement.setAttribute("data-theme", initialTheme);
    document.documentElement.lang = initialLanguage;
  }, []);

  function isActiveLink(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }

  function changeLanguage(value: "en-US" | "pt-BR") {
    setLanguage(value);
    localStorage.setItem("language", value);
    document.documentElement.lang = value;
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

        <div className="header-actions">
          <select
            className="language-select"
            value={language}
            onChange={(event) =>
              changeLanguage(event.target.value as "en-US" | "pt-BR")
            }
          >
            <option value="en-US">🇺🇸 EN</option>
            <option value="pt-BR">🇧🇷 PT-BR</option>
          </select>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Alterar tema"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>

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

            <div className="mobile-header-actions">
              <select
                className="language-select"
                value={language}
                onChange={(event) =>
                  changeLanguage(event.target.value as "en-US" | "pt-BR")
                }
              >
                <option value="en-US">🇺🇸 EN</option>
                <option value="pt-BR">🇧🇷 PT-BR</option>
              </select>

              <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}