import Link from "next/link";
import type { Recipe } from "../data/recipes";

// A typed, reusable card. Give it a recipe, it renders the tile.
export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="card">
      <div className="card-art" data-cuisine={recipe.cuisine}>
        <span>{recipe.emoji}</span>
      </div>
      <div className="card-body">
        <h3>{recipe.title}</h3>
        <p className="card-blurb">{recipe.blurb}</p>
        <div className="card-meta">
          <span className="chip">⏱ {recipe.minutes} min</span>
          <span className="chip">{recipe.difficulty}</span>
          <span className="chip chip-cuisine">{recipe.cuisine}</span>
        </div>
      </div>
    </Link>
  );
}
