import React from 'react';
import './recipe.css'

function Recipe({ title, calories, image, ingredients }) {
    return (
        <div className="card">
            <h1>title = {title}</h1>
            <p>calories ={calories}</p>

            <div className="check-box">
                <ol>
                    {ingredients.map(ingredient => (
                        <li>

                            <div className="items">{ingredient.text}</div>

                        </li>
                    ))}
                </ol>
            </div>
            <img className="images" src={image} alt=""></img>
        </div>
    )
}

export default Recipe;
