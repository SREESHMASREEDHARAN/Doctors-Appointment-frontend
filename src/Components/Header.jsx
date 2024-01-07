import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar  style={{ backgroundColor: '#3c92de' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' style={{color:'white'}}>
            <i className='fa-solid fa-user-doctor fa-bounce mx-3 fs-2'></i>
            Doctor Appointment
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header