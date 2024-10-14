import React, { useEffect, useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setNotes(getLocalStorage('notes'))
  }, [])

  const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  const getLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };

  const addNote = (note) => {
    setNotes([...notes, note]);
    setLocalStorage('notes', [...notes, note]);
  };

  const deleteNote = (id) => {
    const remove = notes.filter(note => note.id !== id)
    setNotes(remove);
    setLocalStorage('notes', remove)
  };

  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const archiveNote = (id) => {
    const updatedNotes = notes.map(note => 
      note.id === id ? { ...note, isArchived: !note.isArchived } : note
    );
    setNotes(updatedNotes);
    setLocalStorage('notes', updatedNotes);
  };

  return (
    <div>
      <h1>Aplikasi Catatan Pribadi</h1>
      <input
        type="text"
        placeholder="Cari catatan..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <NoteForm addNote={addNote} />
      <NoteList notes={filteredNotes} deleteNote={deleteNote} archiveNote={archiveNote} />
    </div>
  );
};

export default App;
