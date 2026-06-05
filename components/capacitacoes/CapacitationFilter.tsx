"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export default function CapacitationFilter() {
  const { language } = useLanguage();
  const t = translations[language];

  const items = t.training.items;
  const allCategory = t.common.filters.all;
  const allSubcategory = t.common.filters.allFemale;

  const categories = [
    allCategory,
    ...Array.from(new Set(items.map((item) => item.category))),
  ];

  const [selectedCategory, setSelectedCategory] = useState(allCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState(allSubcategory);

  const subcategories = [
    allSubcategory,
    ...Array.from(
      new Set(
        items
          .filter((item) =>
            selectedCategory === allCategory
              ? true
              : item.category === selectedCategory
          )
          .map((item) => item.subcategory)
      )
    ),
  ];

  const filteredItems = items.filter((item) => {
    const matchCategory =
      selectedCategory === allCategory || item.category === selectedCategory;

    const matchSubcategory =
      selectedSubcategory === allSubcategory ||
      item.subcategory === selectedSubcategory;

    return matchCategory && matchSubcategory;
  });

  function handleCategoryChange(category: string) {
    setSelectedCategory(category);
    setSelectedSubcategory(allSubcategory);
  }

  return (
    <>
      <div className="select-filters-card">
        <div className="select-filter-group">
          <label>{t.common.filters.category}</label>

          <select
            value={selectedCategory}
            onChange={(event) => handleCategoryChange(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {selectedCategory !== allCategory && (
          <div className="select-filter-group">
            <label>{t.common.filters.subcategory}</label>

            <select
              value={selectedSubcategory}
              onChange={(event) => setSelectedSubcategory(event.target.value)}
            >
              {subcategories.map((subcategory) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="capacitacoes-grid">
        {filteredItems.map((item) => (
          <article key={item.slug} className="card card-hover capacitacao-card">
            <div className="blog-card-header">
              <span className="project-category">{item.category}</span>
              <span className="project-subcategory">{item.subcategory}</span>
            </div>

            <h3>{item.title}</h3>

            <span className="capacitacao-institution">{item.institution}</span>

            <p>{item.description}</p>

            <span className="badge">{item.status}</span>

            <div className="project-actions">
              <Link href={`/capacitacoes/${item.slug}`}>
                {t.common.actions.viewDetails} →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
