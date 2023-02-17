import React from 'react';
import { Link } from 'react-router-dom';

function AppointmentCard({ appt, onDelete, onEditClick }) {

  function handleDelete() {
    // onDelete required to render on frontend
    onDelete(appt)

    // if fetch DELETE located in AppointmentCard.js
    // const config = {
    //   method: "DELETE"
    // }

    // fetch(`http://localhost:9292/appointments/${appt.id}`, config)
  }

  function handleEdit() {
    // onEditClick required to pass to EditForm
    onEditClick(appt)

    // if fetch PATCH located in AppointmentCard.js
    // const config = {
    //   method: "PATCH",
    //   headers: { "Content-Type": "application/json"},
    //   body: JSON.stringify(apptObj)
    // }

    // fetch(`http://localhost:9292/appointments/${apptObj.id}`, config)
    // .then(res => res.json())
    // .then(data => onEditClick(data))
  }
  
  return (
    <tr>
      <td>{appt.client.name}</td>
      <td>{appt.barber.name}</td>
      <td>{appt.hairstyle.name}</td>
      <td>{appt.datetime}</td>
      <td>
        <button className="FormDeleteButton" onClick={handleDelete}>X</button>
      </td>
      <td>
        <Link to={`/appointments/${appt.id}/edit`}>
          <button className="FormChangeButton" onClick={handleEdit}>Change Appointment</button>
        </Link>
      </td>
    </tr>
  )
}

export default AppointmentCard;