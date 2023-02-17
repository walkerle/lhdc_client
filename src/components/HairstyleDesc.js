import React from 'react';

function HairstyleDesc({ hairstyle }) {
  
  return (
    <tr>
      <td className="tabledata"><img src={hairstyle.picture} alt={hairstyle.name} /></td>
      <td className="tabledata">{hairstyle.name}</td>
      <td className="tabledata">{hairstyle.price}</td>
      <td className="tabledata">{hairstyle.duration}</td>
      <td className="tabledata">{hairstyle.description}</td>
    </tr>
  )
}

export default HairstyleDesc;