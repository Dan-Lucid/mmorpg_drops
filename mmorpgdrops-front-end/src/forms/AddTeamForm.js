import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const AddTeamForm = (props) => {

    const initialFormState = {
        teamId: null,
        teamName: ''
    }
    const [team, setTeam] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setTeam({ ...team, [name]: value })
    }

    return (
        <Form
            onSubmit={(event) => {
                event.preventDefault()
                props.addTeam(team)
                setTeam(initialFormState)
            }}
        >
            <div className='form-group col'>
                <label>Team Name</label>
                <input type='text' name='teamName' value={team.teamName}
                    onChange={handleInputChange} />
            </div>
    
            <Button
                type='submit'
            >Add New Team</Button>
        </Form>
    )
}

export default AddTeamForm