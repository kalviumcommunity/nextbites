"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../data/recipes";

// Client component: a search box that filters the recipe grid live.
export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");

  const visible = recipes.filter((recipe) =>
    (recipe.title + " " + recipe.cuisine)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <>
      <div className="search">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes or cuisines…"
          aria-label="Search recipes"
        />
      </div>

      {visible.length === 0 ? (
        <p className="empty">
          No recipes match “{query}”. Try another search.
        </p>
      ) : (
        <div className="grid">
          {visible.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </>
  );
}
