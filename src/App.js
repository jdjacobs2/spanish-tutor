import React from 'react';
import styles from './App.module.css';
import Player from './Components/Player/Player';
import Voice from './Components/RecordVoice/RecordVoice';
import FileInput from './Components/FileInput/FileInput';
import FlashCard from './Components/FlashCards/FlashCards';
// import FlashCard from './FlashCard-old';
// import FullControl from './FullControl2';
// import AutoPlay from './AutoPlay';

function App() {
  return (
    <div className={styles.App}>
      <Player />
      <Voice />
      <FileInput />
      <FlashCard />
      {/* <FileDialogue /> */}
      {/* <FullControl /> */}
      {/* <AutoPlay /> */}
    </div>
  );
}

export default App;
