import React, {useState} from "react";
import IngredientCard from "./IngredientCard";

function MyIngredients({ingredientsList, handleAddIngredient, handleDeleteIngredient}) {

    const [formData, setFormData] = useState({
        name: "",
        category: "Fruit"
    })
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('All')




    const filterByCategory = ingredientsList.filter(i => {
        if(filter === 'All') {
            return i
        } else {
            return i.category === filter}
    })

    const filterBySearch = filterByCategory.filter(i => i.name.toLowerCase().includes(search.toLowerCase()))




    function handleSubmit(e) {
        e.preventDefault();
        const ingredientData = {
            name: formData.name,
            category: formData.category
        }
        const alreadyExists = ingredientsList.some(i => formData.name === i.name)
        if (alreadyExists) {
            alert("Ingredient already exists...")
        } else {
            fetch(`http://localhost:3000/ingredients`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(ingredientData)
            })
            .then(r=>r.json())
            .then(newIngredient => handleAddIngredient(newIngredient))
            setFormData({
                name: "",
                category: formData.category
            });
        }
    }



    
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    function handleFilter(e) {
        setFilter(e.target.value)
    }


    return (
        <div>
            <h1 className = "myingredientstitle" >My Ingredients</h1>
            <div className = "ingredientcontainer">
                <div className = "myingredients">
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
                            <option value="Nuts/Seeds">Nuts/Seeds</option>
                            <option value="Condiments">Condiments</option>
                        </select>
                    </label>
                    <button type="submit">Submit</button>
                </form>
                
                <p>Search all ingredients...</p>
                <label>Search by Name:
                    <input onChange = {handleSearch} type="text" name = 'name' placeholder="ingredient name" value = {search}></input>
                </label>
                <label>Filter by Category:
                        <select onChange = {handleFilter} name="category" value = {filter}>
                            <option value="All">All</option>
                            <option value="Fruit">Fruit</option>
                            <option value="Vegetable">Vegetable</option>
                            <option value="Meat">Meat</option>
                            <option value="Fish">Fish</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Grain">Grain</option>
                            <option value="Legume">Legume</option>
                            <option value="Spice">Spice</option>
                            <option value="Nuts/Seeds">Nuts/Seeds</option>
                            <option value="Condiments">Condiments</option>
                        </select>
                    </label>
                    </div>
                    <div className = 'each'>
                    {filterBySearch.map((ingredient) => 
                    <IngredientCard handleDeleteIngredient = {handleDeleteIngredient} ingredient = {ingredient} key = {ingredient.id}/>
                    )}
                    </div>
            </div>
        </div>
    )
}

export default MyIngredients;