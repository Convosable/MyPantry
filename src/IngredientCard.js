import React from 'react';

function IngredientCard({ingredient, handleDeleteIngredient}) {

    function handleDelete() {
        fetch(`http://localhost:3000/ingredients/${ingredient.id}`, {
            method: "DELETE",
        })
        .then(r => r.json())
        .then(() => handleDeleteIngredient(ingredient))
    }

    return (
        <div className='ingredientcard'>
            <h2>Name: {ingredient.name}</h2>
            <h3>Category: {ingredient.category}</h3>
            <button onClick = {handleDelete}>Delete</button>
        </div>
    )
}

export default IngredientCard;