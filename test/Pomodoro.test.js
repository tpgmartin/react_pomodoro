import React from 'react'
import renderer from 'react-test-renderer'
import Pomodoro from '../src/Pomodoro'

describe('<Pomodoro />', () => {

  it('should render correctly', () => {
    const component = renderer.create(
      <Pomodoro></Pomodoro>
    ).toJSON()
    expect(component).toMatchSnapshot()
  })

})
