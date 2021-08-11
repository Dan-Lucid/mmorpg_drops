import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import TeamHiscoreTable from '../tables/TeamHiscoreTable.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Grid, Button, Table, TextField } from "@material-ui/core";


export function TeamHiscores() {
    const teamData = [
    ]
  
    const [teams, setTeams] = useState(teamData)
    
    const SERVICE_URL = 'http://localhost:8080';
    const getUserData = () => {
        fetch(SERVICE_URL + "/teamHiscores")
          .then((response) => response.json())
          .then(teams => setTeams(teams))
          .catch((error) => {
            console.log("Team Hiscores Error");
            console.log(error);
          });
    };


    useEffect(() => {
        getUserData()
    }, [])

  if(teams){
    return (
        <div className="TeamHiscores">
          <Container>
            <hr />
            <Row>
              <Col>
                <h2>Team Hiscores</h2>
                <TeamHiscoreTable
                  teams={teams}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
  }
    
  }