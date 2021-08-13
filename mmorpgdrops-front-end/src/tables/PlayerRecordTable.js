import React from 'react'
import {Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const PlayerRecordTable = (props) => {
    return (
        <Table striped bordered responsive>
            <thead>
                <tr>
                    <th>Record ID</th>
                    <th>Player Name</th>
                    <th>Team Name</th>
                </tr>
            </thead>
            <tbody>
                {props.records.length > 0 ? (
                    props.records.map((record) => (
                        <tr key={records.recordId} >
                            <td>{record.playerId} </td>
                            <td>{record.playerName} </td>
                            <td>{record.itemName} </td>
                        </tr>
                    ))
                ) : (
                        <tr>
                            <td colSpan={3}>No Records</td>
                        </tr>
                    )}
            </tbody>
        </Table>
    )
}

export default PlayerRecordTable