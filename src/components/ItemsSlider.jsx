import React from 'react';
import SliderItem from './SliderItem';

const itemsList = ['Vegetables', 'Fruits', 'Mangoes & Melons', 'Seasonal',]

// Frozen Veg
// Frozen Veg
// 
// Leafies & Herbs
// Certified Organic
// Certified Organic
// Flowers & Leaves
// Flowers & Leaves
// Hydroponic
// Hydroponic

const ItemsSlider = () => {
    return (
        <div className='aside-cont'>
            <h2>Category</h2>
            <ul>
                {itemsList.map((item, id) => (
                    <SliderItem key={id} itemsList={item} />
                ))}
            </ul>
        </div>
    )
}

export default ItemsSlider;