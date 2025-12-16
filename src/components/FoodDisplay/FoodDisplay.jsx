import React, { useContext } from 'react'
import './FoodDisplay.css'
import StoreContext from '../../context/storeContext'
import { food_list } from '../../assets/assets'
import FoodItems from '../FoodItems/FoodItems'

const FoodDisplay = () => {
    

    const FoodDisplay = ({category})=>{
        const {food_list}= useContext(StoreContext)
    }


  return (
<div className="food-display" id='food-display'>
    <h2>
        Top Dishes Near You
    </h2>
    <div className="food-display-list">
        {
            food_list.map((item,index)=>{
                return<FoodItems key={index} id={item.id} name={item.name} discription={item.description} price={item.price} image={item.image}/>
             })
        }
    </div>

</div>
)
}

export default FoodDisplay