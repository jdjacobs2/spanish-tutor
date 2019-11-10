import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpeechRecognition from 'react-speech-recognition';

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  startListening: PropTypes.func,
  stopListening: PropTypes.func
};

const options = {
  autoStart: false,
  continuous: false
}

const Dictaphone = ({
  transcript,
  startListening,
  stopListening,
  resetTranscript,
  browserSupportsSpeechRecognition
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div>
      <button onClick={startListening}>Start Transcribing</button>
      <button onClick={stopListening}>Stop Transcribing</button>
      <button onClick={resetTranscript}>Reset</button>
      <div>{transcript}</div>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(options)(Dictaphone);