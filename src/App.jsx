import React, { useEffect, useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { getInitialData } from './utils';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const initialNotes = getInitialData();
    setNotes(initialNotes);
  }, []);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    const remove = notes.filter(note => note.id !== id)
    setNotes(remove);
  };

  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const archiveNote = (id) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, isArchived: !note.isArchived } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <div className='container'>
      <h1>Aplikasi Catatan Pribadi</h1>
      <input
        type="text"
        placeholder="Cari catatan..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <NoteForm addNote={addNote} />
      <NoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
        archiveNote={archiveNote}
      />
    </div>
  );
};

export default App;
