import { Howl, Howler } from 'howler';

const sound = new Howl({ 'easy.mp3', 'audio-file.flac'});
sound.play();
Howler.volume(0.5);