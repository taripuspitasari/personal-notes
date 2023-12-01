import React from "react";
import NoteItemContent from "./NoteItemContent";
import DeleteButton from "./DeleteButton";

function NoteItem({title, body, createdAt, id, onDelete}) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} body={body} createdAt={createdAt} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NoteItem;
