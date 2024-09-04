import React from 'react';

const itemsList = [a, b, c, d]

const Aside = () => {
  return (
    <ul>
        <h1>Hello</h1>
        {itemsList.map((item, id) => (
            <li key={id}>{item}</li>
        ))}
    </ul>
  )
}

export default Aside;