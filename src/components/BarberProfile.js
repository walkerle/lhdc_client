import React from 'react';

function BarberProfile({ barber }) {
  
  return (
    <td className="BarbersChild">
        <img src={barber.picture} alt={barber.name} />
        <p>{barber.name}</p>
    </td>
  )
}

export default BarberProfile;