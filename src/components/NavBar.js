import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  
  return (
    <div className="NavBarParent">
      <NavLink className="NavBarChild" exact to='/'>
        Home
      </NavLink>
      <NavLink className="NavBarChild" exact to='/appointments'>
        Appointments
      </NavLink>
      <NavLink className="NavBarChild" to='/clients'>
        Clients
      </NavLink>
      <NavLink className="NavBarChild" to='/barbers'>
        Barbers
      </NavLink>
      <NavLink className="NavBarChild" to='/hairstyles'>
        Hairstyles
      </NavLink>
      <NavLink className="NavBarChild" to='/newform'>
        Make an Appointment
      </NavLink>
    </div>
  )
}

export default NavBar;