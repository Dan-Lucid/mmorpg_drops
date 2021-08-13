import React from 'react'
import {Table, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const TeamTable = (props) => {
    return (
        <Table striped bordered responsive>
            <thead>
                <tr>
                    <th>Team ID</th>
                    <th>Team Name</th>
                    <th>Controls</th>
                </tr>
            </thead>
            <tbody>
                {props.teams.length > 0 ? (
                    props.teams.map((team) => (
                        <tr key={team.teamName} >
                            <td>{team.teamId} </td>
                            <td>{team.teamName} </td>
                            <td>
                                <Button
                                    className='primary'
                                    onClick={() => props.removeTeam(team.teamName)}
                                >Delete</Button>
                            </td>
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

export default TeamTable