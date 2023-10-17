import React from 'react';
import './NotesContainer.css';
import { Notes } from '../Notes/Notes';

export const NotesContainer = (props) => {
    return (
        <div className='container'>
            <h2>Notes</h2>
            <div className='notes-container custom-scroll'>
                <Notes notes={props.notes} deleteNote={props.deleteNote} updateNoteText={props.updateNoteText} />
            </div>
        </div>
    );
};
