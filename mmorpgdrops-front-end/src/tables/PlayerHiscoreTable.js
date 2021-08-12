import React from 'react'
import {Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const PlayerHiscoreTable = (props) => {
    return (
        <Table striped bordered responsive>
            <thead>
                <tr>
                    <th>Ranking</th>
                    <th>Player Name</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {props.players.length > 0 ? (
                    props.players.map((player) => (
                        <tr key={player.playerName} >
                            <td>{player.ranking} </td>
                            <td>{player.playerName} </td>
                            <td>{player.points} </td>
                        </tr>
                    ))
                ) : (
                        <tr>
                            <td colSpan={3}>No Users</td>
                        </tr>
                    )}
            </tbody>
        </Table>
    )
}

export default PlayerHiscoreTable