// RecipeList.jsx
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: "1.5rem" }}>
            <h3>
              <Link
                to={`/recipes/${recipe.id}`}
                style={{ textDecoration: "none", color: "#2c3e50" }}
              >
                {recipe.title}
              </Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
