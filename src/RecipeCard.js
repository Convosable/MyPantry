import React from "react";
import { Link } from "react-router-dom"


function RecipeCard({recipe}) {

    const {name, image, type, id} = recipe;

    return (
        <div className = "recipecard">
            <h1>{name}</h1>
            <img src = {image} alt = {name} height="300"/>
            <h2>{type}</h2>
            <Link to={`/myrecipes/${id}`}>See details</Link>
        </div>
    )
}

export default RecipeCard;