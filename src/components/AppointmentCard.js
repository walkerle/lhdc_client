import React from 'react';

function AppointmentCard({ appt }) {
  
  return (
    <tr>
      <td>{appt.client.name}</td>
      <td>{appt.barber.name}</td>
      <td>{appt.hairstyle.name}</td>
      <td>{appt.datetime}</td>
      <td>
        <button>X</button>
      </td>
      <td>
        <button>Edit</button>
      </td>
    </tr>
  )
}

export default AppointmentCard;