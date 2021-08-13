import React from 'react'
import {Table, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const RecordTable = (props) => {
    return (
        <Table striped bordered responsive>
            <thead>
                <tr>
                    <th>Record ID</th>
                    <th>Player Name</th>
                    <th>Item Name</th>
                    <th>Controls</th>
                </tr>
            </thead>
            <tbody>
                {props.records.length > 0 ? (
                    props.records.map((record) => (
                        <tr key={record.recordId} >
                            <td>{record.recordId} </td>
                            <td>{record.playerName} </td>
                            <td>{record.itemName} </td>
                            <td>
                                <Button
                                    className='primary'
                                    onClick={() => props.removeLoot(record)}
                                >Delete</Button>
                            </td>
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

export default RecordTable