import React, {useState} from "react";
import IngredientCard from "./IngredientCard";

function MyPantry({ingredientsList, myIngredientsList, handleIngredientChange, ingredientIsActive, handleAddIngredient}) {

    const [formData, setFormData] = useState({
        name: "",
        category: "Fruit"
    })

    function handleSubmit(e) {
        e.preventDefault();
        const ingredientData = {
            name: formData.name,
            category: formData.category
        }
        fetch(`http://localhost:3000/ingredients`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ingredientData)
        })
        .then(r=>r.json())
        .then(newIngredient => handleAddIngredient(newIngredient))
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1>My Pantry</h1>
            <div className = "ingredientcontainer">
                <h2>All Ingredients</h2>
                <p>Don't see the ingredient your looking for? Add your own here...</p>
                <form onSubmit={handleSubmit}>
                    <label>Name:
                        <input onChange = {handleChange} type="text" placeholder="ingredient name" name = "name" value = {formData.name}></input>
                    </label>
                    <label>Category:
                        <select onChange = {handleChange} name="category" value = {formData.category}>
                            <option value="Fruit">Fruit</option>
                            <option value="Vegetable">Vegetable</option>
                            <option value="Meat">Meat</option>
                            <option value="Fish">Fish</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Grain">Grain</option>
                            <option value="Legume">Legume</option>
                            <option value="Spice">Spice</option>
                        </select>
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <p>Search all ingredients...</p>
                <label>Search by Name:
                    <input type="text" placeholder="ingredient name"></input>
                </label>
                <label>Filter by Category:
                        <select name="category">
                            <option value="Fruit">Fruit</option>
                            <option value="Vegetable">Vegetable</option>
                            <option value="Meat">Meat</option>
                            <option value="Fish">Fish</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Grain">Grain</option>
                            <option value="Legume">Legume</option>
                            <option value="Spice">Spice</option>
                        </select>
                    </label>
                    {ingredientsList.map((ingredient) => 
                    <IngredientCard ingredient = {ingredient} key = {ingredient.name} handleIngredientChange = {handleIngredientChange} ingredientIsActive = {ingredientIsActive}/>
                    )}
            </div>
            <div className = "myingredientcontainer">
                <h2>My Ingredients</h2>
                <input type="text" placeholder="search for ingredient"></input>
                <div>
                    {myIngredientsList.map((ingredient) => 
                    <IngredientCard ingredient = {ingredient} key = {ingredient.name} handleIngredientChange = {handleIngredientChange} ingredientIsActive = {ingredientIsActive}/>
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


// add an input form for new ingredients to be added (fetch: post)

