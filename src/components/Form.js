import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Form({ onSubmit, barbers, hairstyles }) {

  const initialForm = {
    client: "",
    barber: "",
    hairstyle: "",
    datetime: ""
  }

  const [form, setForm] = useState(initialForm);

  const history = useHistory();

  function handleChange(e) { // making a controlled form
    setForm({...form, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();

    // if fetch POST located in Header.js
    onSubmit(form);
    history.push(`/appointments`);

    // if fetch POST located in Form.js
    // const config = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form)
    // }

    // fetch(`http://localhost:9292/appointments`, config)
    // .then(res => res.json())
    // .then(data => onSubmit(data))

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
      <h3><strong>Schedule a New Appointment:</strong></h3>
      <form className="FormParent" onSubmit={handleSubmit}>
        <input
          className="FormChild"
          onChange={handleChange}
          type="text"
          name="client"
          placeholder="Enter Name"
          value={form.client}
        />
        <select
          className="FormChild"
          onChange={handleChange}
          name="barber"
          value={form.barber}
        >
          <option value="">Select Barber</option>
          {barberOptions}
        </select>

        <select
          className="FormChild"
          onChange={handleChange}
          name="hairstyle"
          value={form.hairstyle}
        >
          <option value="">Select Hairstyle</option>
          {hairstyleOptions}
        </select>
        <input
          className="FormChild"
          onChange={handleChange}
          type="datetime-local"
          name="datetime"
          placeholder="Enter Time"
          value={form.datetime}
        />
        <button className="FormSubmitButton" type="submit">Complete Appointment</button>
      </form><br />
    </div>
  )
}

export default Form;