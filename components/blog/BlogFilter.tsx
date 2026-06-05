"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export default function BlogFilter() {
  const { language } = useLanguage();
  const t = translations[language];

  const posts = t.blog.posts;
  const allCategory = t.common.filters.all;
  const allSubcategory = t.common.filters.allFemale;

  const categories = [
    allCategory,
    ...Array.from(new Set(posts.map((post) => post.category))),
  ];

  const [selectedCategory, setSelectedCategory] = useState(allCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState(allSubcategory);

  const subcategories = [
    allSubcategory,
    ...Array.from(
      new Set(
        posts
          .filter((post) =>
            selectedCategory === allCategory
              ? true
              : post.category === selectedCategory
          )
          .map((post) => post.subcategory)
      )
    ),
  ];

  const filteredPosts = posts.filter((post) => {
    const matchCategory =
      selectedCategory === allCategory || post.category === selectedCategory;

    const matchSubcategory =
      selectedSubcategory === allSubcategory ||
      post.subcategory === selectedSubcategory;

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

      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
