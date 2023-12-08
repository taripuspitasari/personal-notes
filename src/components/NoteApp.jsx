import React from "react";
import NoteList from "./NoteList";
import {getInitialData} from "../utils/index";
import NoteInput from "./NoteInput";
import SearchBar from "./SearchBar";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      title: "",
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onSearchHandler({search}) {
    this.setState(() => {
      return {
        title: search,
      };
    });
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
    const searchNote = this.state.notes.filter(note =>
      note.title.toLowerCase().includes(this.state.title.toLowerCase())
    );
    return (
      <div className="note-app__body">
        <div className="note-app__header">
          <h1>Notes</h1>
          <SearchBar addSearch={this.onSearchHandler} />
        </div>

        <NoteInput addNote={this.onAddNoteHandler} />
        <NoteList
          notes={searchNote}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
