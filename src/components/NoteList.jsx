import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onDelete, onArchive}) {
  const notesActive = notes.filter(note => note.archived === false);
  const notesArchived = notes.filter(note => note.archived === true);

  return (
    <>
      <h2>Catatan Aktif</h2>
      {notesActive.length !== 0 ? (
        <div className="notes-list">
          {notesActive.map(note => (
            <NoteItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ))}
        </div>
      ) : (
        <div>
          <h1 className="notes-list__empty-message">Tidak ada catatan</h1>
        </div>
      )}
      <h2>Arsip</h2>
      {notesArchived.length !== 0 ? (
        <div className="notes-list">
          {notesArchived.map(note => (
            <NoteItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ))}
        </div>
      ) : (
        <div>
          <h1 className="notes-list__empty-message">Tidak ada catatan</h1>
        </div>
      )}
    </>
  );
}

export default NoteList;
