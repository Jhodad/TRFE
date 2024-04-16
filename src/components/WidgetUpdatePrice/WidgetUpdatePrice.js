import React, { useState } from 'react'
import { updateWidgetPrice } from '../../lib/apiConnect'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

const WidgetUpdatePrice = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        const floatPrice = parseFloat(price);
        console.log(`THIS IS A DOUBLE: ${floatPrice}`)

        try {
            await updateWidgetPrice(name, null, floatPrice)
            alert(`Successfully updated price of widget ${name} to ${price}`)
        } catch (error) {
            alert(`Failed to update price of widget ${name}: ${error.message}`)
        }
    }

    return (
        <Stack spacing={4} sx={{ margin: 'auto', maxWidth: 900, paddingTop: '4em', width: '100%' }}>

            <div className="widget-ByName-container">
                <Typography sx={{ textAlign: 'center' }} variant="h3">
                    Update Widget's Price
                </Typography>
                <form onSubmit={handleSubmit} className="widget-by-price-form">
                    <Stack direction="row" spacing={2}>
                        <TextField
                            id="name"
                            label="Widget Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="widget-by-price-input"
                        />
                        <TextField
                            id="price"
                            label="New Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="widget-by-price-input"
                        />
                    </Stack>
                    <button type="submit" className="widget-ByName-button">
                        Update Price
                    </button>
                </form>
            </div>
        </Stack>
    )
}

export default WidgetUpdatePrice