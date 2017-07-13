import React from 'react'

export default class Pomodoro extends React.Component {

  constructor() {
    super()

    this._play = this._play.bind(this);
    this._pause = this._pause.bind(this);

    this.state = {
      play: false,
      time: 1500,
      title: '',
    }
  }


  formatTime(seconds) {
    const m = Math.floor(seconds % 3600 / 60)
    const s = Math.floor(seconds % 3600 % 60)
    return this.padZeroes(m) + ':' + this.padZeroes(s)
  }

  padZeroes(t) {
    return (t < 10 ? '0' : '') + t
  }

  _pause() {
    this.setState({
      play: false
    })
  }

  _play() {
    this.setState({
      play: true
    })
  }

  render() {
    return (
      <div className="main">
        <div className="container display timer">
          <span className="time">{this.formatTime(this.state.time)}</span>
        </div>
        <div className="controls">
          <button className="play btnIcon" onClick={this._play}>Play</button>
          <button className="pause btnIcon" onClick={this._pause}>Pause</button>
        </div>
      </div>
    )
  }
}
