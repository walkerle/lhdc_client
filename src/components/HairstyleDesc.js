import React from 'react';

function HairstyleDesc({ hairstyle }) {
  
  return (
    <tr>
      <td><img src={hairstyle.picture} alt={hairstyle.name} /></td>
      <td>{hairstyle.name}</td>
      <td>{hairstyle.price}</td>
      <td>{hairstyle.duration}</td>
      <td>{hairstyle.description}</td>
    </tr>
  )
}

export default HairstyleDesc;