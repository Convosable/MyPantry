import React, {useState, useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";


function EditRecipe() {

    const [formData, setFormData] = useState({
        name: "",
        image: "",
        type: "",
        preptime: "",
        cooktime: "",
        ingredients: [],
        instructions: []
    })


    const params = useParams();
    const history = useHistory();



    useEffect(() => {
        fetch(`http://localhost:3000/recipes/${params.id}`)
        .then(r => r.json())
        .then(data => setFormData(data))
    }, [params.id])


    const {name, image, type, preptime, cooktime, ingredients, instructions} = formData;


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



    
    function updateRecipe(e) {
        e.preventDefault();
        const update = {
            name: formData.name,
            image: formData.image,
            type: formData.type,
            preptime: formData.preptime,
            cooktime: formData.cooktime,
            ingredients: formData.ingredients,
            instructions: formData.instructions
        }
        fetch(`http://localhost:3000/recipes/${params.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update)
        })
        .then(r => r.json())
        history.push(`/myrecipes/${params.id}`)
    }

    return (
        <div>
        <h1>Edit Recipe</h1>
        <form onSubmit = {updateRecipe}>
            <label>Name: </label><br></br>
            <input onChange = {handleChange} type="text" name = "name" value = {name}/><br></br>

            <label>Image: </label><br></br>
            <input onChange = {handleChange} type="text" name = "image" value = {image}/><br></br>

            <label>Type: </label><br></br>
            <input onChange = {handleChange} type="text" name = "type" value = {type}/><br></br>

            <label>Preptime: </label><br></br>
            <input onChange = {handleChange} type="text" name = "preptime" value = {preptime}/><br></br>

            <label>Cooktime: </label><br></br>
            <input onChange = {handleChange} type="text" name = "cooktime" value = {cooktime}/><br></br>

            <label>Ingredients: separate each ingredient by a comma ( , ) and no spaces.</label><br></br>
            <textarea onChange = {handleChangeArray} className = "textarea" type="text" name = "ingredients" value = {ingredients}/><br></br>

            <label>Instructions: separate each line of instructions by a comma ( , ) and no spaces. </label><br></br>
            <textarea onChange = {handleChangeArray} className = "textarea"  type="text" name = "instructions" value = {instructions}/><br></br>

            <input type="submit" value = "Update Recipe!"/>
        </form>
    </div>
    )
}

export default EditRecipe;