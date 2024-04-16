// WidgetByName.js
import React, { useState } from 'react'
import { fetchWidgetByName } from '../../lib/apiConnect'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import './WidgetByName.css'

const WidgetByName = () => {
  const [name, setName] = useState('')
  const [widget, setWidget] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const fetchedWidget = await fetchWidgetByName(name)
    setWidget(fetchedWidget)
  }

  return (
    <Stack spacing={4} sx={{ margin: 'auto', maxWidth: 900, paddingTop: '4em', width: '100%' }}>

      <div className="widget-ByName-container">
        <Typography sx={{ textAlign: 'center' }} variant="h3">
          Search Widget by Name
        </Typography>
        <form onSubmit={handleSubmit} className="widget-ByName-form">
          <label htmlFor="name" className="widget-ByName-label">Widget Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="widget-ByName-input" />
          <button type="submit" className="widget-ByName-button">Search Widget</button>
        </form>
        {widget && (
          <div className="widget-ByName-result-container">
            <h3 className="widget-ByName-result-name">{widget.name}</h3>
            <p className="widget-ByName-result-description">{widget.description}</p>
            <p className="widget-ByName-result-price">Price: ${widget.price}</p>
          </div>
        )}
      </div>
    </Stack>
  )
}

export default WidgetByName