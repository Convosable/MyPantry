import React from 'react';

function IngredientCard({ingredient, ingredientIsActive, handleIngredientChange}) {


    return (
        <div className='ingredientcard'>
            <h2>Name: {ingredient.name}</h2>
            <h3>Category: {ingredient.category}</h3>
            <button onClick={() => handleIngredientChange(ingredient)}>{ingredientIsActive ? "Remove from My Ingredients" : "Add to My Ingredients"}</button>
        </div>
    )
}

export default IngredientCard;