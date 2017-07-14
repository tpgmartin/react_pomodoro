import React from 'react'

export default class Pomodoro extends React.Component {

  constructor() {
    super()

    this.elapseTime = this.elapseTime.bind(this)
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);

    this.state = {
      play: false,
      time: 1500,
      title: '',
    }
  }

  elapseTime() {
    if (!this.state.time) {
      this.pause(0)
    }
    if (this.state.play) {
      let updatedTime = this.state.time - 1
      this.setState({
        time: updatedTime
      })
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

  restartInterval() {
    clearInterval(this.interval)
    this.interval = setInterval(this.elapseTime, 1000)
  }

  pause(resetFor = this.state.time) {
    clearInterval(this.interval)

    this.formatTime(resetFor)

    this.setState({
      play: false
    })
  }

  play() {
    if (this.state.play) return

    this.restartInterval()

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
          <button className="play btnIcon" onClick={this.play}>Play</button>
          <button className="pause btnIcon" onClick={this.pause}>Pause</button>
          <button className="reset btnIcon" onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}
