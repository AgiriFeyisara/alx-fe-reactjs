import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [formData, setFormData] = useState({
    title: recipe.title,
    description: recipe.description,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(recipe.id, formData);
    alert("Recipe updated!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
