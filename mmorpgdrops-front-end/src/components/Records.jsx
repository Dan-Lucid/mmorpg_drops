import React, { useState, useEffect } from 'react';
import RecordTable from '../tables/RecordTable';
import AddRecordForm from '../forms/AddRecordForm';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export function Records (props){
  const SERVICE_URL = 'http://localhost:8080'

  const getPlayerData = () => {
    return fetch(SERVICE_URL + '/allRecords')      // get users list
      .then(response => response.json())           // parse JSON
      .then(records => setRecords(records))        // pick first user
  }

  const recordData = [



  ]

  const [records, setRecords] = useState(recordData)

  const addLoot = (records) => {
    fetch(SERVICE_URL + '/addLoot/'+records.playerName + '/' + records.itemName, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(records),
    })
      .then(response => response.json())
      .then(data => {
        getPlayerData();
      })
      .catch((error) => {
        console.log('Add Record - Error:')
        console.log(error)
      });
  }

  const removeLoot = (records) => {

    fetch(SERVICE_URL + '/removeLoot/' + records.playerName + '/'+ records.itemName, {
      method: 'POST',
    })
      .then(data => {
        getPlayerData();
        console.log('Delete successful');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }




  useEffect(() => {
    getPlayerData()
  }, [props])


  if(records){
      return (
    <Container>
      <hr />
      <Row>
        <Col sm={9}>
          <h2>Records</h2>
          <RecordTable
            records={records}
            removeLoot={removeLoot}
          />
        </Col>
        <Col sm={3}>
        <div>
            <h2>Add Record</h2>
            <AddRecordForm addLoot={addLoot} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
}
