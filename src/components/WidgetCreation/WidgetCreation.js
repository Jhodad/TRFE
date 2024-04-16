import React, { useState } from 'react'
import { createWidgets } from '../../lib/apiConnect'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const WidgetCreation = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const widgets = [{ name, description, price: parseFloat(price) }]
            await createWidgets(widgets)
            setMessage('Widget created successfully!')
        } catch (error) {
            setMessage('Error creating widget: ' + error.message)
        }
    }

    return (
        <Stack spacing={4} sx={{ margin: 'auto', maxWidth: 900, paddingTop: '4em', width: '100%' }}>

            <div className="widget-ByName-container">
                <Typography sx={{ textAlign: 'center' }} variant="h3">
                    Create Widget
                </Typography>
                <form onSubmit={handleSubmit} className="widget-create-form">
                    <label htmlFor="name" className="widget-create-label">Name:</label>
                    <TextField id="name" value={name} onChange={(e) => setName(e.target.value)} className="widget-create-input" />

                    <label htmlFor="description" className="widget-create-label">Description:</label>
                    <TextField id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="widget-create-input" />

                    <label htmlFor="price" className="widget-create-label">Price:</label>
                    <TextField id="price" value={price} onChange={(e) => setPrice(e.target.value)} type="number" step="0.01" className="widget-create-input" />

                    <button type="submit" className="widget-ByName-button">Create Widget</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </Stack>
    )
}

export default WidgetCreation