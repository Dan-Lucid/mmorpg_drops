import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const EditTeamForm = (props) => {
    const [player, setPlayer] = useState(props.currentPlayer)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setPlayer({ ...player, [name]: value })
    }

    useEffect(() => {
        setPlayer(props.currentPlayer)
    }, [props])

    return (
        <Form
            onSubmit={(event) => {
                event.preventDefault()
                props.playerJoinTeam(player.playerName, player.teamName)
            }}
        >
            <div className='form-group col'>
                <label>Player Name</label>
                <label value = {player.playerName}></label>
            </div>
            <div className='form-group col'>
                <label>Team Name</label>
                <input type='text' name='TeamName' value={player.teamName}
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