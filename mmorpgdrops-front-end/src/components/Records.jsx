import React, { useState, useEffect } from 'react';
import PlayerRecordTable from '../tables/PlayerRecordTable';
import AddRecordForm from '../forms/AddRecordForm';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export function Records (props){
  const recordData = [
  ]

  const [records, setRecords] = useState(recordData)

  const SERVICE_URL = 'http://localhost:8080'

  const getPlayerData = () => {
    return fetch(SERVICE_URL + '/allRecords')      // get users list
      .then(response => response.json())           // parse JSON
      .then(records => setRecords(records))        // pick first user
  }

  const addRecord = (records) => {
    fetch(SERVICE_URL + '/addRecord/'+records.playerName, {
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

  const removeRecord = (records) => {
    console.log(`Submitting delete for record ${records}`)

    fetch(SERVICE_URL + '/removeRecord/' + records, {
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

  const initialFormState = {
    recordID: null,
    playerName: '',
    itemName: ''
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
          <h2>Player Table</h2>
          <PlayerRecordTable
            players={records}
            deletePlayer={removeRecord}
          />
        </Col>
      </Row>
    </Container>
  )
}
}
