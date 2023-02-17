import React, { useEffect, useState, /* useRef */ } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Appointments from './Appointments';
import Clients from './Clients';
import Barbers from './Barbers';
import Hairstyles from './Hairstyles';
import Form from './Form';
import EditForm from './EditForm';

const baseUrl = 'http://localhost:9292'

function Header() {

  const [appts, setAppts] = useState([]) // appointments array
  const [clients, setClients] = useState([]) // clients array
  const [barbers, setBarbers] = useState([]) // barbers array
  const [hairstyles, setHairstyles] = useState([]) // hairstyles array
  const [editAppt, setEditAppt] = useState([]) // edit appointment

  // const [playing, setPlaying] = useState(false) // working on sound

  useEffect(() => { // GET
    fetch(`${baseUrl}/appointments`)
    .then(res => res.json())
    .then(data => setAppts(data))
  }, [])

  useEffect(() => { // GET
    fetch(`${baseUrl}/clients`)
    .then(res => res.json())
    .then(data => setClients(data))
  }, [])

  useEffect(() => { // GET
    fetch(`${baseUrl}/barbers`)
    .then(res => res.json())
    .then(data => setBarbers(data))
  }, [])

  useEffect(() => { // GET
    fetch(`${baseUrl}/hairstyles`)
    .then(res => res.json())
    .then(data => setHairstyles(data))
  }, [])

  // function playSound(soundFilepath) { // working on sound
  //   const audio = useRef(new Audio(soundFilepath))
  //   if(!playing) {
  //     audio.current.play();
  //     audio.current.loop = false;
  //   } else {
  //     audio.current.pause();
  //   }
  //   setPlaying(!playing);
  // }

  function onSubmit(formObj) { // POST
    // console.log(formObj)

    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formObj)
    }

    // Logic to create a new client (if not existing) AND create a new appointment
    // console.log(formObj.client)
    if (appts.some(appt => appt.client.name === formObj.client)) {
      // if fetch POST located in Header.js  
      fetch(`${baseUrl}/appointments`, config)
      .then(res => res.json())
      .then(data => {
        setAppts([...appts, data])
        // console.log(data.hairstyle.soundclip) // working on sound
        // playSound(data.hairstyle.soundclip) // working on sound
      })
  
      // if fetch POST located in Form.js
      // setAppts([...appts, formObj])
    } else {
      fetch(`${baseUrl}/clients`, config)
      .then(res => res.json())
      .then(data => setClients([...clients, data]))

      // if fetch POST located in Header.js  
      fetch(`${baseUrl}/appointments`, config)
      .then(res => res.json())
      .then(data => setAppts([...appts, data]))
  
      // if fetch POST located in Form.js
      // setAppts([...appts, formObj])
    }
  }

  function onDelete(apptObj) { // DELETE
    // console.log(apptObj.id)

    setAppts(appts.filter(appt => appt.id !== apptObj.id))
    
    // if fetch DELETE located in Header.js
    const config = {
      method: "DELETE"
    }

    fetch(`${baseUrl}/appointments/${apptObj.id}`, config)
  }

  function onEditClick(apptObj) { // Moves specific appointment to EditForm
    // console.log(apptObj.id)
    setEditAppt(apptObj)
  }

  function onEditFormSubmit(apptObj) { // PATCH
    // console.log(apptObj)

    // if fetch PATCH located in Header.js
    const config = {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(apptObj)
    }

    fetch(`${baseUrl}/appointments/${apptObj.id}`, config)
    .then(res => res.json())
    .then(data => {
      const updatedAppts = appts.map(appt => appt.id === data.id ? data : appt)
      setAppts(updatedAppts)
    })

    // if fetch PATCH located in EditForm.js
    // const updatedAppts = appts.map(appt => appt.id === apptObj.id ? apptObj : appt)
    // setAppts(updatedAppts)
  }
    
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/appointments">
          <Appointments appts={appts} onDelete={onDelete} onEditClick={onEditClick} />
        </Route>
        <Route path="/clients">
          <Clients clients={clients} />
        </Route>
        <Route path="/barbers">
          <Barbers barbers={barbers} />
        </Route>
        <Route path="/hairstyles">
          <Hairstyles hairstyles={hairstyles} />
        </Route>
        <Route path="/newform">
          <Form onSubmit={onSubmit} barbers={barbers} hairstyles={hairstyles} />
        </Route>
        <Route path="/appointments/:id/edit">
          <EditForm editAppt={editAppt} onEditFormSubmit={onEditFormSubmit} barbers={barbers} hairstyles={hairstyles} />
        </Route>
      </Switch>
    </div>
  )
}

export default Header;