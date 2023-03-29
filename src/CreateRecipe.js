import React, {useState} from "react";

function CreateRecipe({handleRecipeSubmit}) {

    const [formData, setFormData] = useState({
        name: "",
        image: "",
        type: "",
        preptime: "",
        cooktime: "",
        ingredients: [],
        instructions: []
    })

    function createNewRecipe(e) {
        e.preventDefault()
        const newRecipe = {
            name: formData.name,
            image: formData.image,
            type: formData.type,
            preptime: formData.preptime,
            cooktime: formData.cooktime,
            ingredients: formData.ingredients,
            instructions: formData.instructions
        }
        fetch(`http://localhost:3000/recipes`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newRecipe)
            })
            .then(r => r.json())
            .then(recipe => handleRecipeSubmit(recipe))
            setFormData({
                name: "",
                image: "",
                type: "",
                preptime: "",
                cooktime: "",
                ingredients: [],
                instructions: []
            })
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    function handleChangeArray(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value.split(",")
        })
    }
    
    return (
        <div>
            <h1>Create a Recipe</h1>
            <form onSubmit = {createNewRecipe}>
                <label>Name: </label><br></br>
                <input onChange = {handleChange} type="text" name = "name" value = {formData.name}/><br></br>
                <label>Image: </label><br></br>
                <input onChange = {handleChange} type="text" name = "image" value = {formData.image}/><br></br>
                <label>Type: </label><br></br>
                <input onChange = {handleChange} type="text" name = "type" value = {formData.type}/><br></br>
                <label>Preptime: </label><br></br>
                <input onChange = {handleChange} type="text" name = "preptime" value = {formData.preptime}/><br></br>
                <label>Cooktime: </label><br></br>
                <input onChange = {handleChange} type="text" name = "cooktime" value = {formData.cooktime}/><br></br>
                <label>Ingredients: separate each ingredient by a comma ( , ) and no spaces.</label><br></br>
                <textarea className = "textarea"onChange = {handleChangeArray} type="text" name = "ingredients" value = {formData.ingredients}/><br></br>
                <label>Instructions: separate each line of instructions by a comma ( , ) and no spaces. </label><br></br>
                <textarea className = "textarea" onChange = {handleChangeArray} type="text" name = "instructions" value = {formData.instructions}/><br></br>
                <input type="submit" value = "Add Recipe!"/>
            </form>
        </div>
    )
}

export default CreateRecipe;