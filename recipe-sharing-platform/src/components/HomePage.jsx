import React, { useState, useEffect } from "react";
import recipeData from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700">
        Recipe Collections
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {recipe.description.length > 100
                  ? recipe.description.slice(0, 100) + "..."
                  : recipe.description}
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
