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
      <table>
        <tbody>
          <tr>
            <th>
              Example
            </th>
            <th>
              Name
            </th>
            <th>
              Price ($)
            </th>
            <th>
              Duration (min)
            </th>
            <th>
              Description
            </th>
          </tr>
          {hairstylesList}
        </tbody>
      </table>
    </div>
  )
}

export default Hairstyles;