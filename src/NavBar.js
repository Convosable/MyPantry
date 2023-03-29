import React from "react";
import { Link } from "react-router-dom";

function NavBar() {

    return (
        <div className = "navbar">
            <span><Link exact to = "/">Home</Link></span>
            <span><Link exact to = "/myrecipes">MyRecipes</Link></span>
            <span><Link exact to = "/myingredients">MyIngredients</Link></span>
            <span><Link exact to = "/createrecipe">Create Recipe</Link></span>
        </div>
    )
}

export default NavBar;