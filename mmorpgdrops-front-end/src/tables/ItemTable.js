import React from 'react'
import {Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemTable = (props) => {
    return (
        <Table striped bordered responsive>
            <thead>
                <tr>
                    <th>Item ID</th>
                    <th>Item Name</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {props.items.length > 0 ? (
                    props.items.map((item) => (
                        <tr key={item.itemId} >
                            <td>{item.itemId} </td>
                            <td>{item.itemName} </td>
                            <td>{item.pointValue} </td>
                        </tr>
                    ))
                ) : (
                        <tr>
                            <td colSpan={3}>No Items</td>
                        </tr>
                    )}
            </tbody>
        </Table>
    )
}

export default ItemTable