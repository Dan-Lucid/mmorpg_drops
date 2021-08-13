import React, { useState, useEffect } from 'react';
import TeamTable from '../tables/TeamTable';
import AddTeamForm from '../forms/AddTeamForm';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export function Teams (props){
  const SERVICE_URL = 'http://localhost:8080'

  const getTeamData = () => {
    return fetch(SERVICE_URL + '/allTeams')      // get users list
      .then(response => response.json())           // parse JSON
      .then(teams => setTeams(teams))        // pick first user
  }

  const teamData = [



  ]

  const [teams, setTeams] = useState(teamData)

  const addTeam = (teams) => {
    fetch(SERVICE_URL + '/addTeam/'+teams.teamName, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teams),
    })
      .then(response => response.json())
      .then(data => {
        getTeamData();
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
        getTeamData();
        console.log('Delete successful');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  
  useEffect(() => {
    getTeamData()
  }, [props])


  if(teams){
      return (
    <Container>
      <hr />
      <Row>
        <Col sm={9}>
          <h2>Teams</h2>
          <TeamTable
            teams={teams}
            removeTeam={removeTeam}
          />
        </Col>
        <Col sm={3}>
          <div>
            <h2>Add Team</h2>
            <AddTeamForm addTeam={addTeam} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
}
