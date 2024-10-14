import React from 'react';
import { showFormattedDate } from '../utils';

const NoteItem = ({ note, deleteNote, archiveNote }) => {
  return (
    <div className='note-item'>
      <div className='note-content'>
        <h2>{note.title}</h2>
        <p>{note.body}</p>
        <p className='note-date'>{showFormattedDate(note.createdAt)}</p>
      </div>
      <button className='delete-button' onClick={() => deleteNote(note.id)}>Hapus</button>
      <button className='archive-button' onClick={() => archiveNote(note.id)}>
        {note.isArchived ? 'Kembalikan' : 'Arsipkan'}
      </button>
    </div>
  );
};

export default NoteItem;
