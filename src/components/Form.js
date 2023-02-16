import React, { useState } from 'react';

function Form({ onSubmit, barbers, hairstyles }) {

  const initialForm = {
    client: "",
    barber: "",
    hairstyle: "",
    datetime: ""
  }
  // how to handle a new client w/ id and appointment at the same time?

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => { // making a controlled form
    setForm({...form, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();

    // if POST in Header.js
    // onSubmit(form);

    // if POST in Form.js -working
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }

    fetch(`http://localhost:9292/appointments`, config)
    .then(res => res.json())
    .then(data => onSubmit(data))

    setForm(initialForm);
  }

  const barberOptions = barbers.map(barber =>{
    return (
      <option value={barber.name} key={barber.id}>{barber.name}</option>
    )
  })

  const hairstyleOptions = hairstyles.map(hairstyle =>{
    return (
      <option value={hairstyle.name} key={hairstyle.id}>{hairstyle.name}</option>
    )
  })
    
  return (
    <div>
      <h3><strong>Form React Component:</strong></h3>
      <div>Create a new appointment:</div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="client"
          placeholder="Enter Name"
          value={form.client}
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
        <button type="submit">Complete Appointment</button>
      </form><br />
    </div>
  )
}

export default Form;