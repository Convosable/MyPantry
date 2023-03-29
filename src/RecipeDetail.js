import React, {useState, useEffect} from "react";
import { useParams, useHistory, Link } from "react-router-dom";

function RecipeDetail({deleteRecipe, ingredientsList}) {

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


    
    function handleDelete() {
        fetch(`http://localhost:3000/recipes/${recipe.id}`, {
            method: "DELETE",
        })
        .then(r => r.json())
        .then(() => deleteRecipe(recipe))
        history.push('/myrecipes')
    }



    const ingredientNames = ingredientsList.map(ingr => ingr.name.toLowerCase())

    const allIngredients = ingredients.map((ingr) => { 
        for (let i = 0; i < ingredients.length; i++) {
            if (ingredientNames.includes(ingr.toLowerCase())) {
                return <li key = {ingr} className = 'green'>{ingr}</li>
            } else {
                return <li key = {ingr} className = 'red'>{ingr}</li>
            }
        }
    })

    return (
        <div className = "recipecard">
            <h1>{name}</h1>
            <img src = {image} alt = {name} height="300"/>
            <h2>{type}</h2>
            <p>Preptime: {preptime}</p>
            <p>Cooktime: {cooktime}</p>
            <p>Ingredients: {allIngredients}</p>
            <div className = "instructions">
                <p>Instructions:</p>
                <ol className = "list" type="1">
                    {instructions.map((inst) => <li key = {inst} >{inst}</li>)}
                </ol>
            </div>
            <Link to={`/myrecipes/${id}/edit`}>Edit Recipe</Link>
            <button onClick = {handleDelete}>Delete Recipe</button>
        </div>

    )
}

export default RecipeDetail;