import React from 'react'

import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function DoctorsCard({doctors}) {
    console.log(doctors);
  return (
    <div>
        <Link to={`view/${doctors.id}`} style={{textDecoration:'none'}}>
        <MDBCard alignment='center m-4'>
      
      <MDBCardBody>
        <MDBCardTitle style={{color:'#3c92de', fontWeight:'900'}}>{doctors.hospital}</MDBCardTitle>
        <MDBCardText>{doctors.name}<br/>{doctors.specialty}</MDBCardText>
        <MDBCardText><i class="fa-solid fa-star"></i>{doctors.rating}</MDBCardText>
        <MDBBtn href='#' style={{width:'160px', height:'45px', fontSize:'12px'}}>MORE DETAILS</MDBBtn>
      </MDBCardBody>
      
    </MDBCard>
        </Link>
    </div>
  )
}

export default DoctorsCard