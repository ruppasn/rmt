import React from 'react';

const RecipeCard = ({ heading, children}) => {

    return <div className="recipe-card">
        <div className="heading">{heading}</div>
        <div className="body">{children}</div>
    </div>
}

export default RecipeCard;