import React from "react";
import { Link } from "react-router-dom";

function NavBar() {

    return (
        <div>
            <Link exact to = "/">Home</Link>
            <Link exact to = "/myrecipes">MyRecipes</Link>
            <Link exact to = "/myingredients">MyIngredients</Link>
            <Link exact to = "/createrecipe">Create Recipe</Link>
        </div>
    )
}

export default NavBar;