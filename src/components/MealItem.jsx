import React, { useContext } from 'react';
import { currencyFormatter } from './utils/formatting';
import Button from './UI/Button';
import CartContext from './store/CartContext';
// import imgFood from '/images/beef-tacos.jpg'

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }
  return (
    <li className='meal-item'>
      <article>
        <img src={meal.image} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to cart</Button>
        </p>
        { meal.offer &&  <div className="ofr-holder">
          <h6 class="vc">{meal.offer} OFF</h6>
        </div>}
      </article>
    </li>
  )
}

export default MealItem;