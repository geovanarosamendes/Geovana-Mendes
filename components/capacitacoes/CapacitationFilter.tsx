"use client";

import { useState } from "react";
import { capacitacoes } from "@/data/capacitacoes";

const categories = [
  "Todos",
  ...new Set(capacitacoes.map((item) => item.category)),
];

export default function CapacitationFilter() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedSubcategory, setSelectedSubcategory] = useState("Todas");

  const subcategories = [
    "Todas",
    ...new Set(
      capacitacoes
        .filter((item) =>
          selectedCategory === "Todos"
            ? true
            : item.category === selectedCategory
        )
        .map((item) => item.subcategory)
    ),
  ];

  const filteredItems = capacitacoes.filter((item) => {
    const matchCategory =
      selectedCategory === "Todos" || item.category === selectedCategory;

    const matchSubcategory =
      selectedSubcategory === "Todas" ||
      item.subcategory === selectedSubcategory;

    return matchCategory && matchSubcategory;
  });

  function handleCategoryChange(category: string) {
    setSelectedCategory(category);
    setSelectedSubcategory("Todas");
  }

  return (
    <>
      <div className="select-filters-card">
        <div className="select-filter-group">
          <label>Categoria</label>

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

        {selectedCategory !== "Todos" && (
          <div className="select-filter-group">
            <label>Subcategoria</label>

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
          <article key={item.title} className="card card-hover capacitacao-card">
            <div className="blog-card-header">
              <span className="project-category">{item.category}</span>
              <span className="project-subcategory">{item.subcategory}</span>
            </div>

            <h3>{item.title}</h3>

            <span className="capacitacao-institution">{item.institution}</span>

            <p>{item.description}</p>

            <span className="badge">{item.status}</span>
          </article>
        ))}
      </div>
    </>
  );
}