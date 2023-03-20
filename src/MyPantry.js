import React from "react";

function MyPantry({ingredientList}) {
    
    console.log(ingredientList);

    return (
        <div>
            <h1>My Pantry</h1>
            <div>
                <h2>Ingrediants</h2>
                {ingredientList.map((ingredient) => 
                <div key = {ingredient.name}>
                    <h2>Name: {ingredient.name}</h2>
                    <h3>Category: {ingredient.category}</h3>
                </div>
                )}
                <p>Search by name:</p>
                
            </div>
            <div>
                <h2>My Ingrediants</h2>
            </div>

        </div>
    )
}

export default MyPantry;


//create an Ingredient Card component for styling purposes