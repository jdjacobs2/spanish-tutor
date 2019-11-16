// Displays a html input element
// Set displayProp in calling component to false
// if do not want to show normal select file button

import React, { Component } from "react";
import Button from "../UI/Button";

class FileInput extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.onChangeFile = this.onChangeFile.bind(this);
  }

  static defaultProps = {
    displayButton: true
  }

  componentDidMount() {
    if (!this.props.displayButton) {
      console.log('in componentDidMount');
      this.myRef.current.click();
    }
  }

  onChangeFile(event) {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    this.props.newFileHandler(file);
    this.setState({ file: file }); /// if you want to upload latter
  }

  render() {
    return (
      <div>
        <input
          id='myInput'
          type='file'
          ref={this.myRef}
          style={{ display: "none" }}
          onChange={this.onChangeFile}
        />

        {this.props.displayButton ?
          <Button onClick={() => {
            this.myRef.current.click() }}
            display
          >
            Select FileInput{" "}
          </Button> : null}
      </div>
    );
  }
}

export default FileInput;
