import React, { Component } from 'react';
import styles from './SpanishTutor.module.css';
import FileInput from '../../Components/FileInput/FileInput';
import Voice from '../../Components/RecordVoice/RecordVoice';
import Player from '../../Components/Player/Player';
import FlashCards from '../../Components/FlashCards/FlashCards';
// import FlashCard from './FlashCard-old';
// import FullControl from './FullControl2';
// import AutoPlay from './AutoPlay';

export class SpanishTutor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileInputing: false,
      src: 'easy.mp3',
      displayButton: false
    }
  }

  fileInputButtonHandler = () => {
    this.setState({fileInputing: true})
    console.log('in fileInputButtonHandler in SpanishTutor');
    console.log( this.state.fileInputing)
  }

  fileInputHandler = (file) => {
    console.log(file);
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', () => {
      this.setState({ src: reader.result });
    });
    
  }



  render() {
    return (
      <div>
        <div className={styles.App}>
          <Player fileInput={this.fileInputButtonHandler} src={this.state.src}/>
          <Voice />
          { this.state.fileInputing  ?
            <FileInput
              newFileHandler={this.fileInputHandler} 
              displayButton={this.state.displayButton}
              /> : null}
          <FlashCards />
          {/* <FileDialogue /> */}
          {/* <FullControl /> */}
          {/* <AutoPlay /> */}
    </div>
      </div>
    )
  }
}

export default SpanishTutor;
