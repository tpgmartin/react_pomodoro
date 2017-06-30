import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '../src/Footer'

describe('<Footer />', () => {

  it('should render correctly', () => {
    const component = renderer.create(
      <Footer></Footer>
    ).toJSON()
    expect(component).toMatchSnapshot()
  })

})
