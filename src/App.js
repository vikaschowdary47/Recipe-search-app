import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
require('dotenv').config();

function App() {
  const API_ID = "4647a8ac";
  const API_KEY = "30a7915c1b4be6ba0f710d17f5c52b6d";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchRecipe();
  }, [query]);


  const fetchRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
    const data = await response.json();

    setRecipes(data.hits);
    console.log(data.hits)
  }
  const typeText = e => {
    setSearch(e.target.value)
  }
  const searchText = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }


  return (
    <div className="App">
      <div className="container">
        <div className="form">
          <form onSubmit={searchText}>
            <input type="text" placeholder="search for your fav recipe.." value={search} onChange={typeText}></input>
            <button type="submit" className="search" >search</button>
          </form>
        </div>
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
