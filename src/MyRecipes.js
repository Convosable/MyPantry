import React, {useState} from "react";
import RecipeCard from "./RecipeCard";

function MyRecipes({recipesList}) {

    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("All")

    function handleChange(e) {
        setSearch(e.target.value)
    }

    function handleFilterChange(e) {
        setFilter(e.target.value)
    }

    const filterByType = recipesList.filter(r => {
        if(filter === 'All') {
            return r
        } else {
            return r.type === filter}
    })

    const filterBySearch = filterByType.filter(r => r.name.toLowerCase().startsWith(search.toLowerCase()))

    return (
        <div>
            <h1 className = 'recipetitle'> Recipes</h1>
            <div className = "recipesSearch">
                <label>Search Recipe's by Name</label>
                <input onChange = {handleChange} type = "text" placeholder = "search for recipe" name = "name" value = {search}/>
                <label>Filter Recipe's by Type</label>
                <select onChange = {handleFilterChange} name = "category" value = {filter}>
                    <option value = "All">All</option>
                    <option value = "Breakfast">Breakfast</option>
                    <option value = "Sandwich">Sandwich</option>
                    <option value = "Mexican">Mexican</option>
                </select>
            </div>
                {filterBySearch.map((recipe) =>
                <RecipeCard key = {recipe.name} recipe = {recipe} />
                )}
        </div>
    )
}

export default MyRecipes;