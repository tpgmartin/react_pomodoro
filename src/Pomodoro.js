import React from 'react'

export default class Pomodoro extends React.Component {

  constructor() {
    super()

    this._play = this._play.bind(this);
    this._pause = this._pause.bind(this);

    this.state = {
      play: false,
      time: 0,
      timeType: 0,
      title: '',
    }
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
      <div className="controls">
        <button className="play btnIcon" onClick={this._play}>Play</button>
        <button className="pause btnIcon" onClick={this._pause}>Pause</button>
      </div>
    )
  }
}
