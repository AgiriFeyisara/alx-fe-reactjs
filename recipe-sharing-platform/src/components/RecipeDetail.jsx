import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id, 10));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="container mx-auto p-6 text-center">
        <p className="text-red-500 text-lg font-semibold">Recipe not found.</p>
        <Link to="/" className="text-blue-500 underline hover:text-blue-700">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-block mb-6 text-blue-500 hover:text-blue-700 font-medium"
      >
        ← Back to Recipes
      </Link>

      {/* Image */}
      <div className="rounded-lg overflow-hidden shadow-lg mb-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Title & Summary */}
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        {recipe.summary}
      </p>

      {/* Ingredients & Instructions in Responsive Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Ingredients Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {recipe.ingredients.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            Instructions
          </h2>
          <p className="text-gray-700 leading-relaxed">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
