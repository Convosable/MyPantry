import React, {useState} from "react";
import IngredientCard from "./IngredientCard";

function MyIngredients({ingredientsList, handleAddIngredient}) {

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
        const alreadyExists = ingredientsList.some(i => e.target.value === i.name)
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
            <h1>My Ingredients</h1>
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
                            <option value="Nuts/Seeds">Nuts/Seeds</option>
                            <option value="Condiments">Condiments</option>
                        </select>
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <p>Search all ingredients...</p>
                <label>Search by Name:
                    <input onChange = {handleSearch} type="text" placeholder="ingredient name" value = {search}></input>
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
                    <div className = 'each'>
                    {filterBySearch.map((ingredient) => 
                    <IngredientCard ingredient = {ingredient} key = {ingredient.name}/>
                    )}
                    </div>
            </div>
        </div>
    )
}

export default MyIngredients;


//create an Ingredient Card component for styling purposes

// add a 'add to myIngredients' button, when active, places the ingredient into the myIngredients list


// add a search bar input for both ingredients and my ingredients list 
    //add state for search by for ingredients and myingredients
            //  if input value === searchBy => filter ingredient list to show (search to startwith begining of any word) no submit button


// add an input form for new ingredients to be added (fetch: post)

