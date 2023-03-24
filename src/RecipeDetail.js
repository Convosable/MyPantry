import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {

    const [recipe, setRecipe] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/recipes/${params.id}`)
        .then(r => r.json())
        .then(data => setRecipe(data))
    }, [params.id])

    if (!recipe) return <h2>Loading...</h2>

    const {name, image, type, preptime, cooktime, ingredients, instructions} = recipe;


    
    return (
        <div className = "recipecard">
            <h1>{name}</h1>
            <img src = {image} alt = {name}/>
            <h2>{type}</h2>
            <p>Preptime: {preptime}</p>
            <p>Cooktime: {cooktime}</p>
            <p>Ingredients: {ingredients.map((ingr) => <li>{ingr}</li>)}</p>
            <div className = "instructions">
                <p>Instructions:</p>
                <ol className = "list" type="1">
                    {instructions.map((inst) => <li>{inst}</li>)}
                </ol>
            </div>
            <button>edit recipe</button>
        </div>

    )
}

export default RecipeDetail;