import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) =>
      state.recipes.find((recipe) => recipe.id === id)
    )
  );

  return (
    <div>
      <h2>❤️ My Favorite Recipes</h2>
      {favorites.length > 0 ? (
        favorites.map((recipe) =>
          recipe ? (
            <div key={recipe.id} style={{ marginBottom: "1rem" }}>
              <h3>
                <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>{recipe.description}</p>
            </div>
          ) : null
        )
      ) : (
        <p>You haven't added any favorites yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
