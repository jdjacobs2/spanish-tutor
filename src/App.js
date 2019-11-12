import React from 'react';
import styles from './App.module.css';
import Player from './Player';
import Voice from './Voice';
import FileInput from './FileInput';
import FlashCard from './FlashCard';
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
