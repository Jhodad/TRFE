import React, { useState } from 'react'
import { deleteWidgetByName, fetchWidgetByName } from '../../lib/apiConnect'
import Stack from '@mui/material/Stack'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'

const WidgetByNameDelete = () => {
    const [name, setName] = useState('')
    const [widget, setWidget] = useState(null)
    const [open, setOpen] = useState(false)
    const [confirmDelete, setConfirmDelete] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleConfirmDelete = () => {
        setConfirmDelete(true)
        handleClose()
    }

    const handleCancelDelete = () => {
        setConfirmDelete(false)
        handleClose()
    }

    const handleDelete = async () => {
        if (confirmDelete) {
            await deleteWidgetByName(name)
            setWidget(null)
            setName('')
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const fetchedWidget = await fetchWidgetByName(name)
        setWidget(fetchedWidget)
    }

    return (
        <Stack spacing={4} sx={{ margin: 'auto', maxWidth: 900, paddingTop: '4em', width: '100%' }}>



            <div className="widget-ByName-container">
                <Typography sx={{ textAlign: 'center' }} variant="h3">
                    Delete Widget by Name
                </Typography>
                <form onSubmit={handleSubmit} className="widget-ByName-form">
                    <label htmlFor="name" className="widget-ByName-label">Widget Name:</label>
                    <input type="text" id="name" value={name}
                        onChange={(e) => setName(e.target.value)} className="widget-ByName-input" />
                    <button type="submit" className="widget-ByName-button" >Search Widget</button>
                </form>
                {widget && (
                    <>
                        <div className="widget-ByName-result-container">
                            <h3 className="widget-ByName-result-name">{widget.name}</h3>
                            <p className="widget-ByName-result-description">{widget.description}</p>
                            <p className="widget-ByName-result-price">Price: ${widget.price}</p>
                            <button variant="contained" color="secondary" sx={{ marginLeft: '1em' }} onClick={handleClickOpen}>Delete</button>
                        </div>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Confirm Delete</DialogTitle>
                            <DialogContent>
                                <DialogContentText>Are you sure you want to delete {widget.name}?</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <button onClick={handleCancelDelete}>Cancel</button>
                                <button onClick={handleConfirmDelete} color="secondary">Delete</button>
                            </DialogActions>
                        </Dialog>
                        {confirmDelete && (
                            <div>
                                <p>Deleting {widget.name}...</p>
                                <button onClick={handleDelete}>Confirm Delete</button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </Stack>
    )
}

export default WidgetByNameDelete