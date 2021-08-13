import React from 'react'
import {Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const TeamTable = (props) => {
    return (
        <Table striped bordered responsive>
            <thead>
                <tr>
                    <th>Team ID</th>
                    <th>Team Name</th>
                </tr>
            </thead>
            <tbody>
                {props.teams.length > 0 ? (
                    props.teams.map((team) => (
                        <tr key={team.teamId} >
                            <td>{team.teamId} </td>
                            <td>{team.teamName} </td>
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

export default PlayerTable