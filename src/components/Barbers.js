import React from 'react';
import BarberProfile from './BarberProfile';

function Barbers({ barbers }) {

  const barbersList = barbers.map(barber => {
    return (
      <BarberProfile key={barber.id} barber={barber} />
    )
  })
  
  return (
    <div>
      <h3><strong>Barber Profiles</strong></h3>
      <table>
        <tbody>
          <tr>
            <th>
              Barber Name
            </th>
          </tr>
          {barbersList}
        </tbody>
      </table>
    </div>
  )
}

export default Barbers;