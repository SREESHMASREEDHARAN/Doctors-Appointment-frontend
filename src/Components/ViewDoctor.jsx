import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';


function ViewDoctor() {
  const[DoctorsDetails,setDoctorsDetails] = useState({})
  // const paraId = useParams()
  // console.log(paraId.id);
  const {id} = useParams()
  console.log(id);
  const base_url = 'https://appointment-app-backend-h69k.onrender.com/doctors'
  const fetchDoctors = async()=>{
    const result = await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setDoctorsDetails(result.data)
  }
  console.log(DoctorsDetails);
  useEffect(()=>{
    fetchDoctors()
  },[])
  return (
    <div style={{backgroundImage:'url(https://ospedalevillasalus.it/wp-content/uploads/2019/11/Ospedale-Villa-Salus-Mestre.jpg)', backgroundSize:'cover'}}>
      <Row>
        <Col className='m-5' >
        <MDBCard alignment='center' >
      
      <MDBCardBody className='m-5'>
        <MDBCardTitle style={{color:'#3c92de', fontWeight:'900'}}>{DoctorsDetails.hospital}</MDBCardTitle>
        <MDBCardText style={{color:'black'}}>{DoctorsDetails.name} ({DoctorsDetails.specialty})
        <br/>Phone : {DoctorsDetails.phone}
        </MDBCardText>
        
        
      </MDBCardBody>
      
    </MDBCard>
        </Col>


        <Col className='text-center m-5 py-5' style={{color:'white', backgroundColor:'rgba(0,0,0,0.7)', borderRadius:'15px'}}>
        Address : {DoctorsDetails.address}<br/><br/>
        Available Days : {DoctorsDetails.available_days}<br/><br/>
        Available time : {DoctorsDetails.available_hours}<br/><br/>
        Email : {DoctorsDetails.email}
        </Col>
        
      </Row>

      <Row className='px-5'>
        
        {
          DoctorsDetails.reviews?.map(item=>(
            
            <Card className='my-4' body><h5>{item.patient_name}</h5>
            <h6>({item.date})</h6>
            <i class="fa-solid fa-star"></i>{item.rating}<br/><br/>
            <p>{item.comments}</p>
            </Card>
    
          ))
        }
      </Row>
      
    </div>
  )
}

export default ViewDoctor