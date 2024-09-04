import React, { useEffect, useState } from 'react';
import MealItem from './MealItem';
import foodItems from '../data/foodItem';

const Meals = () => {
  const [loadMeals, setLoadMeals] = useState(foodItems);

  return (
    <ul id='meals'>
      {loadMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>

  )
}

export default Meals;