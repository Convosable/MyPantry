import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <div className = "navbar">
            <span><NavLink exact to = "/" activeClassName="active">Home</NavLink></span>
            <span><NavLink exact to = "/myingredients" activeClassName="active">My Ingredients</NavLink></span>
            <span><NavLink exact to = "/myrecipes" activeClassName="active">My Recipes</NavLink></span>
            <span><NavLink exact to = "/createrecipe" activeClassName="active">Create Recipe</NavLink></span>
        </div>
    )
}

export default NavBar;