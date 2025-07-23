import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: "1",
      title: "Jollof Rice",
      description: "Delicious West African rice.",
    },
    { id: "2", title: "Egusi Soup", description: "Nigerian melon seed soup." },
  ],
  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));
export default useRecipeStore;
