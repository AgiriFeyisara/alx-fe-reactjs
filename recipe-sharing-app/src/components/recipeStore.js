import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  // State
  recipes: [],
  filteredRecipes: [],
  searchTerm: "",
  favorites: [],
  recommendations: [],

  // Add a recipe
  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    return set({
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter((r) =>
        r.title.toLowerCase().includes(get().searchTerm.toLowerCase())
      ),
    });
  },

  // Set all recipes
  setRecipes: (recipes) =>
    set({
      recipes,
      filteredRecipes: recipes,
    }),

  // Update recipe
  updateRecipe: (id, updatedData) => {
    const updated = get().recipes.map((r) =>
      r.id === id ? { ...r, ...updatedData } : r
    );
    return set({
      recipes: updated,
      filteredRecipes: updated.filter((r) =>
        r.title.toLowerCase().includes(get().searchTerm.toLowerCase())
      ),
    });
  },

  // Delete recipe
  deleteRecipe: (id) => {
    const updated = get().recipes.filter((r) => r.id !== id);
    return set({
      recipes: updated,
      filteredRecipes: updated.filter((r) =>
        r.title.toLowerCase().includes(get().searchTerm.toLowerCase())
      ),
      favorites: get().favorites.filter((favId) => favId !== id),
    });
  },

  // Search
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),

  // Favorites
  addFavorite: (recipeId) => {
    const { favorites } = get();
    if (!favorites.includes(recipeId)) {
      set({ favorites: [...favorites, recipeId] });
    }
  },

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations (mock)
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) => favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));
export default useRecipeStore;
