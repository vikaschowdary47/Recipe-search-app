import React from 'react';

function Recipe({ title, calories, image, ingredients }) {
    return (
        <div className="card">
            <h1>title = {title}</h1>
            <p>calories ={calories}</p>
            <img className="images" src={image} alt=""></img>
            <div className="check-box">
                <ul>
                    {ingredients.map(ingredient => (
                        <li>
                            <input type="checkbox"></input>{ingredient.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Recipe;
