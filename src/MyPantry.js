import React from "react";
import IngredientCard from "./IngredientCard";

function MyPantry({ingredientsList, myIngredientsList, handleIngredientChange}) {

    return (
        <div>
            <h1>My Pantry</h1>
            <div className = "ingredientcontainer">
                <h2>All Ingredients</h2>
                <input type="text" placeholder="search for ingredient"></input>
                    {ingredientsList.map((ingredient) => 
                    <IngredientCard ingredient = {ingredient} key = {ingredient.name} handleIngredientChange = {handleIngredientChange}/>
                    )}
            </div>
            <div className = "myingredientcontainer">
                <h2>My Ingredients</h2>
                <input type="text" placeholder="search for ingredient"></input>
                <div>
                    {myIngredientsList.map((ingredient) => 
                    <IngredientCard ingredient = {ingredient} key = {ingredient.name} handleIngredientChange = {handleIngredientChange}/>
                    )}
                </div>
            </div>

        </div>
    )
}

export default MyPantry;


//create an Ingredient Card component for styling purposes

// add a 'add to myIngredients' button, when active, places the ingredient into the myIngredients list
// add a search bar input for both ingredients and my ingredients list 
    //add state for search by for ingredients and myingredients
            //  if input value === searchBy => filter ingredient list to show (search to startwith begining of any word) no submit button