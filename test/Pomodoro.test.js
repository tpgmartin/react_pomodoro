import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Pomodoro from '../src/Pomodoro'

describe('<Pomodoro />', () => {

  const pomodoro = shallow(<Pomodoro></Pomodoro>)

  test('should display correct initial time of pomodoro', () => {
    expect(pomodoro.state('time')).to.equal(1500)
    expect(pomodoro.find('.time').text()).to.equal('25:00')
  })

  test('should correctly handle click of play button', (done) => {
    pomodoro.find('.play').simulate('click')
    expect(pomodoro.state('play')).to.equal(true)

    setTimeout(() => {
      expect(pomodoro.state('time')).to.equal(1498)
      done()
    }, 2000)
  })

  test('should correctly handle click of pause button', () => {
    pomodoro.find('.pause').simulate('click')
    expect(pomodoro.state('play')).to.equal(false)

    setTimeout(() => {
      expect(pomodoro.state('time')).to.equal(1498)
      done()
    }, 2000)
  })

})
