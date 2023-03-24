import React, {useState} from "react";

function CreateRecipe() {

    const [formData, setFormData] = useState({
        name: "",
        image: "",
        type: "",
        preptime: "",
        cooktime: "",
        ingredients: [],
        instructions: []
    })

    return (

    <div>
            <h1>Create a Recipe</h1>
            <form>
                <label>Name: </label><br></br>
                <input type="text" value = {formData.name}/><br></br>
                <label>Image: </label><br></br>
                <input type="text" value = {formData.image}/><br></br>
                <label>Type: </label><br></br>
                <input type="text" value = {formData.type}/><br></br>
                <label>Preptime: </label><br></br>
                <input type="text" value = {formData.preptime}/><br></br>
                <label>Cooktime: </label><br></br>
                <input type="text" value = {formData.cooktime}/><br></br>
                <label>Ingredients: </label><br></br>
                <input type="text" value = {formData.ingredients}/><br></br>
                <label>Instructions: </label><br></br>
                <input type="text" value = {formData.instructions}/><br></br>
                <input type="submit" value = "Submit"/>
            </form>
        </div>
    )
}

export default CreateRecipe;