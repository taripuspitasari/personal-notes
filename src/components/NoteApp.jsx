import React from "react";
import NoteList from "./NoteList";
import {getInitialData} from "../utils/index";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({notes});
  }

  onArchiveHandler(id) {
    const newNotes = [...this.state.notes];
    const noteIndex = this.state.notes.findIndex(note => note.id === id);
    newNotes[noteIndex].archived = !newNotes[noteIndex].archived;
    this.setState({notes: newNotes});
  }

  onAddNoteHandler({title, body}) {
    this.setState(prevState => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="note-app__body">
        <h1 className="note-app__header">Notes</h1>
        <NoteInput addNote={this.onAddNoteHandler} />
        <NoteList
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
