import React, { useEffect, useState } from 'react';
import Home from './Home';
import Appointments from './Appointments';
import Barbers from './Barbers';
import Hairstyles from './Hairstyles';
import Form from './Form';

const baseUrl = 'http://localhost:9292'

function Header() {

  const [appts, setAppts] = useState([]) // appointments array
  const [barbers, setBarbers] = useState([]) // barbers array
  const [hairstyles, setHairstyles] = useState([]) // hairstyles array

  useEffect(() => {
    fetch(`${baseUrl}/appointments`)
    .then(res => res.json())
    .then(data => setAppts(data))
  }, [])

  useEffect(() => {
    fetch(`${baseUrl}/barbers`)
    .then(res => res.json())
    .then(data => setBarbers(data))
  }, [])

  useEffect(() => {
    fetch(`${baseUrl}/hairstyles`)
    .then(res => res.json())
    .then(data => setHairstyles(data))
  }, [])

  function onSubmit(formObj) {
    console.log(formObj)

    // if POST in Header.js
    // const config = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formObj)
    // }

    // fetch(`${baseUrl}/appointments`, config)
    // .then(res => res.json())
    // .then(data => setAppts([...appts, data]))

    // if POST in Form.js
    setAppts([...appts, formObj])
  }
    
  return (
    <div>
      <div className='Route Home'>
        <Home />
      </div>
      <div className='Route Appointment'>
        <Appointments appts={appts} />
      </div>
      <div className='Route Barbers'>
        <Barbers barbers={barbers} />
      </div>
      <div className='Route Hairstyles'>
        <Hairstyles hairstyles={hairstyles} />
      </div>
      <div className='Route Form'>
        <Form onSubmit={onSubmit} barbers={barbers} hairstyles={hairstyles} />
      </div>
    </div>
  )
}

export default Header;