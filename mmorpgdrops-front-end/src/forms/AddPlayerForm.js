import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const AddPlayerForm = (props) => {

    const initialFormState = {
        playerID: null,
        playerName: '',
        teamName: ''
    }
    const [player, setPlayer] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setPlayer({ ...player, [name]: value })
    }

    return (
        <Form
            onSubmit={(event) => {
                event.preventDefault()
                props.addPlayer(player)
                setPlayer(initialFormState)
            }}
        >
            <div className='form-group col'>
                <label>Player Name</label>
                <input type='text' name='playerName' value={player.playerName}
                    onChange={handleInputChange} />
            </div>
    
            <Button
                type='submit'
            >Add New Player</Button>
        </Form>
    )
}

export default AddPlayerForm