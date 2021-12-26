import {  useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import useFetch from "./UseFetch";
import Loading from "./Loading";
const Meal = () => {
    const params = useParams()
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
    const {data,loading} = useFetch(url)
    const [meal, setMeal] = useState([])

    useEffect(()=>{
        setMeal(data)
    },[data])
    return ( 
        <div className="meal">
            {loading ? 
                <Loading/> : 
                <div className="container">
                    <img src={meal.meals[0].strMealThumb} alt="meal"/>
                    <div className="mealDetails">
                        <h1 className="mealName">{meal.meals[0].strMeal}</h1>
                        <div className="mealinfo">
                            <p className="category">Category : <span className="mealCategory">{meal.meals[0].strCategory}</span></p>
                            <p className="area">Area : <span className="mealArea">{meal.meals[0].strArea}</span></p>
                            <p className="tags">Tags : <span className="mealTags">{meal.meals[0].strTags}</span></p>
                        </div>
                        <div className="ingredients">
                        </div>
                        <div className="instructions">
                            <h2>instructions :</h2>
                            <p>{meal.meals[0].strInstructions}</p>
                        </div>
                        <a href={meal.meals[0].strYoutube} 
                        target='_blank' rel="noreferrer">See it on Youtube !</a>                        
                    </div>
                </div>
            }
        </div>
        
     );
}
 
export default Meal;