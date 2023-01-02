import React from 'react'
import { TextField } from '@mui/material'

const AdditionalInfoTab = () => {
    const getData = (e) => {
        console.log(e.target.value)
    }

    return(
        <div>
            
            <TextField 
            multiline 
            fullWidth 
            label="Dodatkowe uwagi"
            onChange={getData}/>
        </div>
    )
}

export default AdditionalInfoTab