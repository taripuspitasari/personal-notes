import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };

    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onSearchEventHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
    this.props.addSearch(this.state);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Cari catatan..."
        value={this.state.search}
        onChange={this.onSearchEventHandler}
      />
    );
  }
}

export default SearchBar;
