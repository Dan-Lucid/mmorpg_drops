import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const AddRecordForm = (props) => {

    const initialFormState = {
        recordID: null,
        playerName: '',
        itemName: ''
    }
    const [record, setLoot] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setLoot({ ...record, [name]: value })
    }

    return (
        <Form
            onSubmit={(event) => {
                event.preventDefault()
                props.addLoot(record)
                setLoot(initialFormState)
            }}
        >
            <div className='form-group col'>
                <label>Player Name</label>
                <input type='text' name='playerName' value={record.playerName}
                    onChange={handleInputChange} /><br/>
                <label>Item Name</label>
                <input type='text' name='itemName' value={record.itemName}
                    onChange={handleInputChange} />
            </div>
    
            <Button
                type='submit'
            >Add New Record</Button>
        </Form>
    )
}

export default AddRecordForm