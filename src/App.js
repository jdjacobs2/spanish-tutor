import React from 'react';
import styles from './App.module.css';
import Player from './Player';
import Voice from './Voice';
import FileDialogue from './FileDialogue';
import FileInput from './FileInput';
// import FullControl from './FullControl2';
// import AutoPlay from './AutoPlay';

function App() {
  return (
    <div className={styles.App}>
      <Player />
      <Voice />
      <FileInput />
      {/* <FileDialogue /> */}
      {/* <FullControl /> */}
      {/* <AutoPlay /> */}
    </div>
  );
}

export default App;
