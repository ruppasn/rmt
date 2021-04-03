import React, { useEffect, useState } from 'react';
import apiClient from '../../utils/apiClient';
import RecipeCard from '../RecipeCard';
import { Progress } from 'antd';


const MarginRecipeCard = ({heading = ''}) => {

    const [data, setData] = useState([]);
    let url = 'margin-group?order=top';
    let progressColor = 'green'
        if (heading.toLowerCase().includes('low')) {
            url = 'margin-group?order=bottom'
            progressColor='red';
        }

    useEffect(() => {
        
        apiClient.get(url).then(({data}) => {
console.log(data)

            setData(data.results || [])
        })
    }, []);

    return <RecipeCard heading={heading} headStyle={{ textAlign: 'center'}}>

        {
            data?.map( recipe => <div key={recipe.name} className="recipe-margin">
            <div className="recipe-name">{recipe.name}</div>
            <Progress type="circle" percent={+recipe.margin} width={55} strokeColor={progressColor}/>
            </div>)
        }
            

    </RecipeCard>
}

export default MarginRecipeCard;