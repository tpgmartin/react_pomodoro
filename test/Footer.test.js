import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '../src/Footer'

test('<Footer />', () => {

    const footer = renderer.create(<Footer></Footer>)
    const tree = footer.toJSON()
    expect(tree).toMatchSnapshot()

})
