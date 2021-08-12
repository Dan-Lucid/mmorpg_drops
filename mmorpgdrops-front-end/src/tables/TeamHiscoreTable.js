import React from 'react'
import {Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const TeamHiscoreTable = (props) => {
    return (
        <Table striped bordered responsive>
            <thead>
                <tr>
                    <th>Ranking</th>
                    <th>Team Name</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {props.teams.length > 0 ? (
                    props.teams.map((team) => (
                        <tr key={team.playerName} >
                            <td>{team.ranking} </td>
                            <td>{team.playerName} </td>
                            <td>{team.points} </td>
                        </tr>
                    ))
                ) : (
                        <tr>
                            <td colSpan={3}>No Teams</td>
                        </tr>
                    )}
            </tbody>
        </Table>
    )
}

export default TeamHiscoreTable