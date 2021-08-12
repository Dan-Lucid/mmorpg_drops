import React, { useState, useEffect } from 'react';
import PlayerTable from '../tables/PlayerTable';
import AddPlayerForm from '../forms/AddPlayerForm';
import EditTeamForm from '../forms/EditTeamForm';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export function Players (props){
  const SERVICE_URL = 'http://localhost:8080'

  const getPlayerData = () => {
    return fetch(SERVICE_URL + '/allPlayers')        // get users list
      .then(response => response.json())           // parse JSON
      .then(players => setPlayers(players))              // pick first user
  }

  const playerData = [
  ]

  const [players, setPlayers] = useState(playerData)

  const addPlayer = (players) => {
    fetch(SERVICE_URL + '/addPlayer/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(players),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Add Player - Success:', data);
        getPlayerData();
      })
      .catch((error) => {
        console.log('Add Player - Error:')
        console.log(error)
      });

    console.log(players)
  }

  const removePlayer = (player) => {
    console.log(`Submitting delete for player ${player}`)

    fetch(SERVICE_URL + '/removePlayer/' + player, {
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
    PlayerID: null,
    PlayerName: '',
    TeamName: ' '
  }

  const [currentPlayer, setCurrentPlayer] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const editRow = (user) => {
    setEditing(true)

    setCurrentPlayer({
        PlayerID: players.PlayerID,
        PlayerName: players.PlayerName,
        TeamName: players.TeamName
    })
  }

  const playerJoinTeam = (player, TeamName) => {

    console.log(`Submitting edit for player ${player}`)
    console.log(TeamName)

    fetch(SERVICE_URL + '/joinTeam/' + player + '/' + TeamName,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(TeamName),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setEditing(false)
        getPlayerData();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  useEffect(() => {
    getPlayerData()
  }, [props])


  if(players){
      return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-center'>CRUD App with Hooks</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={9}>
          <h2>Player Table</h2>
          <PlayerTable
            players={players}
            deletePlayer={removePlayer}
          />
        </Col>
        <Col sm={3}>
          {editing ? (
            <div>
              <h2>Edit Player</h2>
              <EditTeamForm
                setEditing={setEditing}
                currentPlayer={currentPlayer}
                updatePlayer={playerJoinTeam}
              />
            </div>
          ) : (
              <div>
                <h2>Add Player</h2>
                <AddPlayerForm addUser={addPlayer} />
              </div>
            )}

        </Col>
      </Row>
    </Container>
  )
}
}
