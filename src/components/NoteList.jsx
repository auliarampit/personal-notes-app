import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, deleteNote, archiveNote }) => {
  const archivedNotes = notes.filter(note => note.isArchived);
  const activeNotes = notes.filter(note => !note.isArchived);

  return (
    <div className='note-list'>
      <h2>Catatan Aktif</h2>
      {activeNotes.length === 0 ? (
        <p>Tidak ada catatan</p>
      ) : (
        activeNotes.map(note => (
          <NoteItem 
            key={note.id} 
            note={note} 
            deleteNote={deleteNote} 
            archiveNote={archiveNote}
          />
        ))
      )}
      
      <h2>Catatan Diarsipkan</h2>
      {archivedNotes.length === 0 ? (
        <p>Tidak ada catatan diarsipkan</p>
      ) : (
        archivedNotes.map(note => (
          <NoteItem 
            key={note.id} 
            note={note} 
            deleteNote={deleteNote} 
            archiveNote={archiveNote}
          />
        ))
      )}
    </div>
  );
};

export default NoteList;
