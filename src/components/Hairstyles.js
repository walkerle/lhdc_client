import React from 'react';
import HairstyleDesc from './HairstyleDesc';

function Hairstyles({ hairstyles }) {

  const hairstylesList = hairstyles.map(hairstyle => {
    return (
      <HairstyleDesc key={hairstyle.id} hairstyle={hairstyle} />
    )
})
  
  return (
    <div>
      <h3><strong>Types of Hairstyles</strong></h3>
      <table className="HairstylesParent">
        <tbody>
          <tr>
            <th className="tableheader">Example</th>
            <th className="tableheader">Name</th>
            <th className="tableheader">Price ($)</th>
            <th className="tableheader">Duration (min)</th>
            <th className="tableheader">Description</th>
          </tr>
          {hairstylesList}
        </tbody>
      </table>
    </div>
  )
}

export default Hairstyles;