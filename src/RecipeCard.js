import React from "react";

function RecipeCard({recipe}) {

    const {name, type} = recipe;
    return (
        <div>
            <h1>{name}</h1>
            <h2>{type}</h2>
        </div>
    )
}

export default RecipeCard;