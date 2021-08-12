import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import PlayerHiscoreTable from '../tables/PlayerHiscoreTable.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "@material-ui/core";


export function PlayerHiscores() {
  const playerData = [
  ]

  const [players, setPlayers] = useState(playerData)  
  
  const SERVICE_URL = 'http://localhost:8080';

  const getUserData = () => {
    fetch(SERVICE_URL + "/playerHiscores")
      .then((response) => response.json())
      .then(players => setPlayers(players))
      .catch((error) => {
        console.log("Player Hiscores Error");
        console.log(error);
      });
  };
  

  useEffect(() => {
    getUserData()
  }, [])

  if(players) {
    return (
      <div className="PlayerHiscores">
        <Container>
          <hr />
          <Row>
            <Col>
              <h2>Player Hiscores</h2>
              <PlayerHiscoreTable
                players={players}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
}