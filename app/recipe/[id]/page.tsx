import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes, getRecipe } from "../../data/recipes";

// Pre-build one page per recipe id (needed for static export).
export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe = getRecipe(params.id);
  if (!recipe) notFound();

  return (
    <main className="detail">
      <Link href="/" className="back">
        ← All recipes
      </Link>

      <div className="detail-head">
        <div className="detail-art">
          <span>{recipe.emoji}</span>
        </div>
        <div>
          <h1>{recipe.title}</h1>
          <p className="detail-blurb">{recipe.blurb}</p>
          <div className="card-meta">
            <span className="chip">⏱ {recipe.minutes} min</span>
            <span className="chip">{recipe.difficulty}</span>
            <span className="chip chip-cuisine">{recipe.cuisine}</span>
          </div>
        </div>
      </div>

      <div className="detail-cols">
        <section>
          <h2>Ingredients</h2>
          <ul className="ing">
            {recipe.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Method</h2>
          <ol className="steps">
            {recipe.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
