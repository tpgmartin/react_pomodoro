import React from 'react'
import renderer from 'react-test-renderer'
import Pomodoro from '../src/Pomodoro'

test('<Pomodoro />', () => {

  const component = renderer.create(<Pomodoro></Pomodoro>)
  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()

  tree.props.onClick()
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})
