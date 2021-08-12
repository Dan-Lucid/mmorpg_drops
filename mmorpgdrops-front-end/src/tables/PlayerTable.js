import React from 'react'
import {Table, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const PlayerTable = (props) => {
    return (
        <Table striped bordered responsive>
            <thead>
                <tr>
                    <th>Player ID</th>
                    <th>Player Name</th>
                    <th>Team Name</th>
                </tr>
            </thead>
            <tbody>
                {props.players.length > 0 ? (
                    props.players.map((player) => (
                        <tr key={player.playerName} >
                            <td>{player.PlayerID} </td>
                            <td>{player.playerName} </td>
                            <td>{player.TeamName} </td>
                        </tr>
                    ))
                ) : (
                        <tr>
                            <td colSpan={3}>No Players</td>
                        </tr>
                    )}
            </tbody>
        </Table>
    )
}

export default PlayerTable