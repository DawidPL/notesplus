import React from 'react';
import notes from '../assets/data'
import SingleNote from './SingleNote';

const SourceCodeTab = () =>{

    return(
        <div className="notes-list">
            Notatki, zmiany, uwagi
            {notes.map((note, index) =>(
                <SingleNote key={index} note={note}/>
            ))}
            

        </div>
    )
}

export default SourceCodeTab