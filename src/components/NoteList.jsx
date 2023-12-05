import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onDelete}) {
  return (
    <>
      {notes.length !== 0 ? (
        <div className="notes-list">
          {notes.map(note => (
            <NoteItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              {...note}
            />
          ))}{" "}
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
