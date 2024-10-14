import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const maxTitleLength = 50;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: uuidv4(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString()
    };
    addNote(newNote);
    setTitle('');
    setBody('');
  };

  const remainingCharacters = maxTitleLength - title.length;
  const messageClass = remainingCharacters <= 1 ? 'error' : 'warning';

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Judul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={maxTitleLength}
      />
      <p className={`message ${messageClass}`}>{remainingCharacters} karakter tersisa</p>
      <textarea
        placeholder="Isi catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Tambahkan Catatan</button>
    </form>
  );
};

export default NoteForm;
