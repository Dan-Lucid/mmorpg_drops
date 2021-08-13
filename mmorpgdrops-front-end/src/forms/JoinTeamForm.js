import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const JoinTeamForm = (props) => {
    const [team, setTeam] = useState(props.currentTeam)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setTeam({ ...team, [name]: value })
    }

    useEffect(() => {
        setTeam(props.currentTeam)
    }, [props])

    return (
        <Form
            onSubmit={(event) => {
                event.preventDefault()
                props.playerJoinTeam(team.playerName, team.teamName)
            }}
        >
            <div className='form-group col'>
                <label>Player Name</label>
                <label value = {team.playerName}></label>
            </div>
            <div className='form-group col'>
                <label>Team Name</label>
                <input type='text' name='TeamName' value={team.teamName}
                    onChange={handleInputChange} />
            </div>
            <Button
                type='submit'
            >Join Contact</Button>
            <Button
                onClick={() => props.setEditing(false)}
                className='button muted-button'
            >
                Cancel</Button>
        </Form>

    )

}

export default JoinTeamForm