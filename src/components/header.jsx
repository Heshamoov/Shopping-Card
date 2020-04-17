import React, { Component } from "react";

class Header extends Component {
  state = {
    title: "Header Hello this is a text from STATE",
  };
  render() {
    return (
      // JSX expression will get compiled to React.createElement()
      <React.Fragment>
        <div className="row">{this.title()}</div>
      </React.Fragment>
    );
  }

  title() {
    const { title } = this.state;
    return title;
  }
}

export default Header;
