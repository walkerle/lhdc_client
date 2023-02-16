import React from 'react';

function BarberProfile({ barber }) {
  
  return (
    <tr>
      <td>{barber.name}</td>
    </tr>
  )
}

export default BarberProfile;