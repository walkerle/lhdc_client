import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function EditForm({ editAppt, onEditFormSubmit, barbers, hairstyles }) {

  const initialForm = {
    client: "",
    barber: "",
    hairstyle: "",
    datetime: ""
  }

  const [form, setForm] = useState(initialForm);

  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:9292/appointments/${editAppt.id}`)
    .then(res => res.json())
    .then(apptObj => setForm({
      id: apptObj.id,
      client: apptObj.client.name,
      barber: apptObj.barber.name,
      hairstyle: apptObj.hairstyle.name,
      datetime: apptObj.datetime
    }))
  }, [editAppt])

  function handleChange(e) { // making a controlled form
    setForm({...form, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();

    // if fetch PATCH located in Header.js
    onEditFormSubmit(form);
    history.push(`/appointments`);

    setForm(initialForm);
  }

  const barberOptions = barbers.map(barber => {
    return (
      <option value={barber.name} key={barber.id}>{barber.name}</option>
    )
  })

  const hairstyleOptions = hairstyles.map(hairstyle => {
    return (
      <option value={hairstyle.name} key={hairstyle.id}>{hairstyle.name}</option>
    )
  })

  return (
    <div>
      <h3><strong>EditForm React Component:</strong></h3>
      <div>Change appointment:</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="client"
          placeholder="Enter Name"
          value={form.client}
          readOnly
        />
        <select
          onChange={handleChange}
          name="barber"
          value={form.barber}
        >
          <option value="">Select Barber</option>
          {barberOptions}
        </select>

        <select
          onChange={handleChange}
          name="hairstyle"
          value={form.hairstyle}
        >
          <option value="">Select Hairstyle</option>
          {hairstyleOptions}
        </select>
        <input
          onChange={handleChange}
          type="datetime-local"
          name="datetime"
          placeholder="Enter Time"
          value={form.datetime}
        />
        <button type="submit">Complete Appointment Change</button>
      </form><br />
    </div>
  )
}

export default EditForm;