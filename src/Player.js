import React, { Component } from 'react';
import ReactHowler from 'react-howler';
import raf from 'raf';
import Button from './Button';
// import { file } from '@babel/types';
// import { Howl, Howler } from 'howler';
// import easy from './easy.mp3';

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      loaded: false,
      loop: false,
      mute: false,
      volume: 1.0,
      seek: 0.00,
      pos: 0
    }
  }

  componentWillUnmount() {
    this.clearRAF();
  }

  handleToggle = () => {
    this.setState({
      playing: !this.state.playing
    })
  }

  handleOnLoad = () => {
    this.setState({
      loaded: true,
      duration: this.player.duration()
    })
  }

  handleOnPlay = () => {
    this.setState({
      playing: true
    });
    this.renderSeekPos()
  }

  handleOnEnd = () => {
    this.setState({
      playing: false
    });
    this.clearRAF()
  }

  handleStop = () => {
    this.player.stop();
    this.setState({
      playing: false
    });
    this.renderSeekPos()
  }
  
  handleLoopToogle = () => {
    this.setState({
      loop: !this.state.loop
    })
  }

  handleMuteToggle = () => {
    this.setState({
      mute: !this.state.mute
    })
  }

  renderSeekPos = () => {
    this.setState({
      seek: this.player.seek()
    });
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos)
    }
  }

  clearRAF = () => {
    raf.cancel(this._raf)
  }

  handlePause = () => {
    this.setState({playing: false})
  }

  handleSeek = () => {
    
  }

  handleOnRepeat = () => {

  }


  render() {
    if (this.state.initialized === true) {
      return (
        <div>
          <ReactHowler
            src={['easy.mp3', 'audio-file.flac']}
            playing={this.state.playing}
            onLoad={this.handleOnLoad}
            onPlay={this.handleOnPlay}
            onEnd={this.handleOnEnd}
            loop={this.state.loop}
            mute={this.state.mute}
            volume={this.state.volume}
            ref={(ref) => (this.player = ref)}
          />

          <p>{(this.state.loaded) ? 'Loaded' : 'Loading'}</p>

          <div className='toggles'>
            <label>
              Loop:
              <input
                type='checkbox'
                checked={this.state.loop}
                onChange={this.handleLoopToggle}
              />
            </label>
            <label>
              Mute:
              <input
                type='checkbox'
                checked={this.state.mute}
                onChange={this.handleMuteToggle}
              />
            </label>
          </div>

          <p>
            {'Status: '}
            {(this.state.seek !== undefined) ? this.state.seek.toFixed(2) : '0.00'}
            
            {' / '}
            {(this.state.duration) ? this.state.duration.toFixed(2) : 'NaN'}
          </p>

          <div className='volume'>
            <label>
              Volume:
              <span className='slider-container'>
                <input
                  type='range'
                  min='0'
                  max='1'
                  step='.05'
                  value={this.state.volume}
                  onChange={e => this.setState({volume: parseFloat(e.target.value)})}
                  style={{verticalAlign: 'bottom'}}
                />
              </span>
              {this.state.volume.toFixed(2)}
            </label>
          </div>

          
          {/* <Button onClick={this.handleOnPlay}>Play</Button>
          <Button onClick={this.handleOnPause}>Pause</Button>
          <Button onClick={this.handleOnRepeat}>Repeat</Button> */}
          <Button onClick={this.handleToggle}>
            {(this.state.playing) ? 'Pause' : 'Play'}
          </Button>
          <Button onClick={this.handleStop}>
            Stop
          </Button>
        </div>
      )
    } else {
      return (
        <div>
          <Button
            className='full'
            onClick={e => this.setState({initialized: true})}
          >
            Initialize Auto Player
          </Button>
        </div>
      )
    }
  }
}


export default Player;