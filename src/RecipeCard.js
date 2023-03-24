import React from "react";

function RecipeCard({recipe}) {

    const {name, image, type, preptime, cooktime, ingredients, instructions} = recipe;
    return (
        <div className = "recipecard">
            <h1>{name}</h1>
            <img src = {image} alt = {name}/>
            <h2>{type}</h2>
            <p>Preptime: {preptime}</p>
            <p>Cooktime: {cooktime}</p>
            <p>Ingredients: {ingredients.map((ingr) => <li>{ingr}</li>)}</p>
            <div className = "instructions">
                <p>Instructions:</p>
                <ol className = "list" type="1">
                    {instructions.map((inst) => <li>{inst}</li>)}
                </ol>
            </div>
        </div>
    )
}

export default RecipeCard;