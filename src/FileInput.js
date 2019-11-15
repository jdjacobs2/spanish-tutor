
import React, { Component } from "react";
import Button from './Button';

class FileInput extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.onChangeFile = this.onChangeFile.bind(this);
  }

onChangeFile(event) {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    this.setState({file:file}); /// if you want to upload latter
}

  render() {
    return (
      <div>
        <input id="myInput"
          type="file"
          ref={this.myRef}
          style={{ display: 'none' }}
          onChange={this.onChangeFile}
        />
        
        <Button onClick={() => { this.myRef.current.click() }} >Select FileInput </Button>
      </div>
    )
  }
}

export default FileInput;