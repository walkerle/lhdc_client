import React from 'react';
import AppointmentCard from './AppointmentCard';

function Appointments({ appts }) {

  const appointmentsList = appts.map(appt => {
    return (
      <AppointmentCard key={appt.id} appt={appt} />
    )
  })
  
  return (
    <div>
      <h3><strong>Schedule of Appointments</strong></h3>
      <table>
        <tbody>
          <tr>
            <th>
              Client Name
            </th>
            <th>
              Barber
            </th>
            <th>
              Haircut
            </th>
            <th>
              Appointment Date
            </th>
            <th>
              Cancel Appointment
            </th>
            <th>
              Change Appointment
            </th>
          </tr>
          {appointmentsList}
        </tbody>
      </table>
    </div>
  )
}

export default Appointments;