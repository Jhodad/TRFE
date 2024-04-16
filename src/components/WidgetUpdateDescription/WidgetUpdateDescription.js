import React, { useState } from 'react'
import { updateWidgetDescription } from '../../lib/apiConnect'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const WidgetUpdateDescription = () => {
    const [name, setName] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await updateWidgetDescription(name, newDescription)
            setMessage(`Successfully updated description of widget ${name}`)
        } catch (error) {
            setMessage(`Failed to update description of widget ${name}: ${error.message}`)
        }
    }

    return (
        <Stack spacing={4} sx={{ margin: 'auto', maxWidth: 900, paddingTop: '4em', width: '100%' }}>

            <div className="widget-ByName-container">
                <Typography sx={{ textAlign: 'center' }} variant="h3">
                    Update Widget's Description
                </Typography>

                <form onSubmit={handleSubmit} className="update-widget-description-form">
                    <Stack direction="row" spacing={2}>
                        <TextField
                            id="name"
                            label="Widget Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="update-widget-description-input"
                        />
                        <TextField
                            id="new-description"
                            label="New Description"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            className="update-widget-description-input"
                        />
                    </Stack>
                    <button type="submit" className="widget-ByName-button">
                        Update Description
                    </button>
                </form>
                {message && (
                    <Typography sx={{ textAlign: 'center', color: 'green' }}>{message}</Typography>
                )}
            </div>
        </Stack>
    )
}

export default WidgetUpdateDescription