import React from 'react';
import Meals from './Meals';
import ItemsSlider from './ItemsSlider';
import Row from 'react-bootstrap/Row';

const ContentContainer = () => {
  return (
    <div className='ContentContainer'>
        <ItemsSlider />
        <Meals />
    </div>
  )
}

export default ContentContainer;