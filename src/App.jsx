import React, { useEffect, useState } from 'react';
import { NotesContainer } from './Components/NotesContainer/NotesContainer';
import './App.css';
import { Sidebar } from './Components/Sidebar/Sidebar';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const AddNote = (color) => {
    const newNote = {
      id: new Date() + '' + Math.floor(Math.random() * 49),
      text: '',
      time: dateTime(),
      color: color,
    };

    setNotes(prevNotes => [newNote, ...prevNotes]);
  }

  const updateNoteText = (id, newText) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, text: newText };
      }
      return note;
    });

    setNotes(updatedNotes);
  };


  const dateTime = () => {
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm + ' ' + date.getDate() + ' ' + monthNames[month];
    return strTime;
  }

  const deleteNote = (id) => {
    const tempNotes = notes.filter(note => note.id !== id);
    setNotes(tempNotes);
  }

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className='App'>
      <Sidebar AddNote={AddNote} />
      <NotesContainer deleteNote={deleteNote} notes={notes} updateNoteText={updateNoteText} />
    </div>
  )
}

export default App;
