import { useState , useEffect } from "react";
import Loading from "./Loading";
import useFetch from "./UseFetch";
import {Link} from "react-router-dom"
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" 
const Meals = () => {
    const {data,loading} = useFetch(url)
    const [meals,setMeals] = useState([])
    useEffect(() => {
        const {meals} = data
        setMeals(meals)    
    },[data])
    return ( 
        <div className="mealsList">
            
                {loading ? <Loading/>
                 :<div className="container"> 
                {meals && meals.map( (meal) => { 
                        const {idMeal,strMeal,strTags,strMealThumb} = meal
                        return(
                            <div className="mealPre" key={idMeal}>
                                <h1>{strMeal}</h1>
                                <img src={strMealThumb} alt={strMeal}/>
                                <p>{strTags}</p>
                                <Link to={`/meal/${idMeal}`}>view recipe</Link>
                            </div>
                        )
                    }
                )
                }
                </div> 
                }  
        </div>
     );
}
 
export default Meals;