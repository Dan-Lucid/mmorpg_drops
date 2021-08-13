import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const AddRecordForm = (props) => {

    const initialFormState = {
        recordID: null,
        playerName: '',
        itemName: ''
    }
    const [record, setRecord] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setRecord({ ...record, [name]: value })
    }

    return (
        <Form
            onSubmit={(event) => {
                event.preventDefault()
                props.addLoot(player)
                setLoot(initialFormState)
            }}
        >
            <div className='form-group col'>
                <label>Record ID</label>
                <input type='text' name='recorsId' value={record.recordID}
                    onChange={handleInputChange} />
            </div>
    
            <Button
                type='submit'
            >Add New Player</Button>
        </Form>
    )
}

export default AddRecordForm