import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '../src/Footer'

test('<Footer />', () => {

    const component = renderer.create(<Footer></Footer>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()

})
