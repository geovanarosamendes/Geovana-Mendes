"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const categories = ["Todos", ...new Set(projects.map((p) => p.category))];

export default function ProjectsFilter() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedSubcategory, setSelectedSubcategory] = useState("Todas");

  const subcategories = [
    "Todas",
    ...new Set(
      projects
        .filter((project) =>
          selectedCategory === "Todos"
            ? true
            : project.category === selectedCategory
        )
        .map((project) => project.subcategory)
    ),
  ];

  const filteredProjects = projects.filter((project) => {
    const matchCategory =
      selectedCategory === "Todos" || project.category === selectedCategory;

    const matchSubcategory =
      selectedSubcategory === "Todas" ||
      project.subcategory === selectedSubcategory;

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

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </>
  );
}