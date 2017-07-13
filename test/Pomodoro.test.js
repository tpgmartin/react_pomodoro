import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Pomodoro from '../src/Pomodoro'

test('<Pomodoro />', () => {

  const pomodoro = shallow(<Pomodoro></Pomodoro>)

  pomodoro.find('.play').simulate('click')
  expect(pomodoro.state('play')).to.equal(true)

  pomodoro.find('.pause').simulate('click')
  expect(pomodoro.state('play')).to.equal(false)

})
