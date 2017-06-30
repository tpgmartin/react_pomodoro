import React from 'react'
import Footer from '../src/Footer'
import renderer from 'react-test-renderer'

describe('<Footer />', () => {

  it('should render correctly', () => {
    const tree = renderer.create(
      <Footer></Footer>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
