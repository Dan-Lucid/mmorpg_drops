import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const EditTeamForm = (props) => {
    const [player, setUser] = useState(props.currentUser)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUser({ ...player, [name]: value })
    }

    useEffect(() => {
        setUser(props.currentPlayer)
    }, [props])

    return (
        <Form
            onSubmit={(event) => {
                event.preventDefault()
                props.playerJoinTeam(player.PlayerName, player.TeamName)
            }}
        >
            <div className='form-group col'>
                <label>Player Name</label>
                <label value = {player.playerName}></label>
            </div>
            <div className='form-group col'>
                <label>Team Name</label>
                <input type='text' name='TeamName' value={player.TeamName}
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

export default EditTeamForm