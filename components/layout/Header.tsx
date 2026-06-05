"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export default function Header() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const menuItems = [
    { label: t.common.menu.home, href: "/" },
    { label: t.common.menu.projects, href: "/projetos" },
    { label: t.common.menu.blog, href: "/blog" },
    { label: t.common.menu.training, href: "/capacitacoes" },
    { label: t.common.menu.about, href: "/sobre" },
    { label: t.common.menu.contact, href: "/contato" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const initialTheme = savedTheme || "dark";

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
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

  function changeLanguage(value: Language) {
    setLanguage(value);
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
            onChange={(event) => changeLanguage(event.target.value as Language)}
          >
            <option value="en-US">🇺🇸 EN</option>
            <option value="pt-BR">🇧🇷 PT-BR</option>
          </select>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={t.common.actions.changeTheme}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={t.common.actions.openMenu}
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