import React from "react";
import {showFormattedDate} from "../utils";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      createdAt: showFormattedDate(),
    };
  }
}

export default NoteInput;
