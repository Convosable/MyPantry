import React from 'react';

function IngredientCard({ingredient}) {
    return (
        <div>
            <h2>Name: {ingredient.name}</h2>
            <h3>Category: {ingredient.category}</h3>
        </div>
    )
}

export default IngredientCard;