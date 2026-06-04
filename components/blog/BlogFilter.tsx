"use client";

import { useState } from "react";
import { posts } from "@/data/posts";
import BlogCard from "./BlogCard";

const categories = ["Todos", ...new Set(posts.map((post) => post.category))];

export default function BlogFilter() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedSubcategory, setSelectedSubcategory] = useState("Todas");

  const subcategories = [
    "Todas",
    ...new Set(
      posts
        .filter((post) =>
          selectedCategory === "Todos" ? true : post.category === selectedCategory
        )
        .map((post) => post.subcategory)
    ),
  ];

  const filteredPosts = posts.filter((post) => {
    const matchCategory =
      selectedCategory === "Todos" || post.category === selectedCategory;

    const matchSubcategory =
      selectedSubcategory === "Todas" ||
      post.subcategory === selectedSubcategory;

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

      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </>
  );
}