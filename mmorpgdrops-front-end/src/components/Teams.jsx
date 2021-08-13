import React, { useState, useEffect } from 'react';
import TeamTable from '../tables/TeamTable';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export function Teams (props){
  const teamData = [
  ]

  const [teams, setTeams] = useState(teamData)

  const SERVICE_URL = 'http://localhost:8080'

  const getPlayerData = () => {
    return fetch(SERVICE_URL + '/allTeams')      // get users list
      .then(response => response.json())           // parse JSON
      .then(players => setTeams(players))        // pick first user
  }

  const addPlayer = (teams) => {
    fetch(SERVICE_URL + '/addTeam/'+teams.playerName, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teams),
    })
      .then(response => response.json())
      .then(data => {
        getPlayerData();
      })
      .catch((error) => {
        console.log('Add Team - Error:')
        console.log(error)
      });
  }

  const removeTeam = (team) => {
    console.log(`Submitting delete for team ${team}`)

    fetch(SERVICE_URL + '/removeTeam/' + team, {
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
    teamId: null,
    teamName: ''
  }

  
  useEffect(() => {
    getPlayerData()
  }, [props])


  if(teams){
      return (
    <Container>
      <hr />
      <Row>
        <Col sm={9}>
          <h2>Team Table</h2>
          <TeamTable
            teams={teams}
            deleteTeam={removeTeam}
          />
        </Col>
    
      </Row>
    </Container>
  )
}
}
