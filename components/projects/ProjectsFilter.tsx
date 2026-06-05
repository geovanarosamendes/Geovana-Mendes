"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export default function ProjectsFilter() {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = t.projects.items;
  const allCategory = t.common.filters.all;
  const allSubcategory = t.common.filters.allFemale;

  const categories = [
    allCategory,
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  const [selectedCategory, setSelectedCategory] = useState(allCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState(allSubcategory);

  const subcategories = [
    allSubcategory,
    ...Array.from(
      new Set(
        projects
          .filter((project) =>
            selectedCategory === allCategory
              ? true
              : project.category === selectedCategory
          )
          .map((project) => project.subcategory)
      )
    ),
  ];

  const filteredProjects = projects.filter((project) => {
    const matchCategory =
      selectedCategory === allCategory || project.category === selectedCategory;

    const matchSubcategory =
      selectedSubcategory === allSubcategory ||
      project.subcategory === selectedSubcategory;

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

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
