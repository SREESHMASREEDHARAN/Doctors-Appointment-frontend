import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import ViewDoctor from './ViewDoctor'
import DoctorsCard from './DoctorsCard'



function Doctors() {
  const base_url = 'https://appointment-app-backend-h69k.onrender.com/doctors'
  const[DoctorsData,setDoctorsData] = useState([])
  const fetchData=async()=>{
    const result = await axios.get(base_url)
    console.log(result.data);
    setDoctorsData(result.data)
  }
  console.log(DoctorsData);
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div style={{backgroundImage:'url(https://ospedalevillasalus.it/wp-content/uploads/2019/11/Ospedale-Villa-Salus-Mestre.jpg)', backgroundSize:'cover'}}>
      <Row>
        {
          DoctorsData.map(item=>(
            <Col sm={12} md={6} lg={4} xl={4}>
              <DoctorsCard doctors={item}/>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default Doctors