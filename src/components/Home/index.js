import React from 'react';
import FluctuatingRecipeCard from '../FluctuatingRecipeCard';
import MarginRecipeCard from '../MarginRecipeCard';
import RecipeTabs from '../RecipeTabs';
import './styles.scss';

const Home = () => {

    return <div className="home">
        
        <div className="recipe-cards">
                <MarginRecipeCard heading="High Margin Recipes"/>
            <MarginRecipeCard heading="Low Margin Recipes"/>
            <FluctuatingRecipeCard/>
        </div> 
        <div className="recipe-tables">
            <RecipeTabs/>
        </div> 
    </div>
}

export default Home;