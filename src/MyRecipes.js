import React from "react";
import RecipeCard from "./RecipeCard";

function MyRecipes({recipesList}) {

    // add a fliter by category and search by name
    
    return (
        <div>
            <h1>Recipes</h1>
            {recipesList.map((recipe) =>
            <RecipeCard key = {recipe.name} recipe = {recipe} />
            )}
        </div>
    )
}

export default MyRecipes;