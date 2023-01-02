import React from 'react';
import { TextField } from '@mui/material';

const SourceCodeTab = () =>{
    const getData = (e) => {
        console.log(e.target.value)
    }

    return(
        <div>
            
            <TextField 
            multiline
            fullWidth
            label="Podgląd"
            onChange={getData}
            />
        </div>
    )
}

export default SourceCodeTab