import React from 'react';
import './Notes.css';
import { FaTrash } from 'react-icons/fa';

export const Notes = ({ notes, deleteNote, updateNoteText }) => {
  return (
    <>
      {notes.map((note) => {
        return (
          <div key={note.id} className='notes' style={{ background: note.color }}>
            <textarea
              placeholder='Type Here'
              defaultValue={note.text}
              onChange={(e) => updateNoteText(note.id, e.target.value)}
            />
            <div className="footer">
              <p>{note.time}</p>
              <i><FaTrash size={20} cursor={'pointer'} onClick={() => deleteNote(note.id)} /></i>
            </div>
          </div>
        );
      })}
    </>
  );
};

