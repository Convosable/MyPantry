import React, {useState, useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";

function RecipeDetail({deleteRecipe, ingredientIsActive}) {

    const [recipe, setRecipe] = useState(null);
    const params = useParams();

    let history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:3000/recipes/${params.id}`)
        .then(r => r.json())
        .then(data => setRecipe(data))
    }, [params.id])

    if (!recipe) return <h2>Loading...</h2>

    const {id, name, image, type, preptime, cooktime, ingredients, instructions} = recipe;

    function editRecipe(e) {
        history.push()
        // bring up the form with all the values filled in for the specific reicpe.
        console.log(e.target.value);
        // fetch(`http://localhost:3001/myrecipes/${recipe.id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify()
        // })
        // .then(r => r.json())
    }

    function handleDelete() {
        fetch(`http://localhost:3000/recipes/${recipe.id}`, {
            method: "DELETE",
        })
        .then(r => r.json())
        .then(() => deleteRecipe(recipe))
        history.push('/myrecipes')
    }


    
    return (
        <div className = "recipecard">
            <h1>{name}</h1>
            <img src = {image} alt = {name} height="300"/>
            <h2>{type}</h2>
            <p>Preptime: {preptime}</p>
            <p>Cooktime: {cooktime}</p>
            <p>Ingredients: {ingredients.map((ingr) => <li className = {ingredientIsActive ? "in-my-ingredients" : "not-in-my-ingredients"}>{ingr}</li>)}</p>
            <div className = "instructions">
                <p>Instructions:</p>
                <ol className = "list" type="1">
                    {instructions.map((inst) => <li>{inst}</li>)}
                </ol>
            </div>
            <button onClick = {editRecipe}>edit recipe</button>
            <button onClick = {handleDelete}>delete recipe</button>
        </div>

    )
}

export default RecipeDetail;