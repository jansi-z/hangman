import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Title from './Title'

chai.use(chaiEnzyme())

describe('<Title />', () => {
  const title = shallow(<Title content="A nice title" />)

  it("displays the content", () => {
    expect(title).to.have.text("A nice title")
  })

  it("is wrapped in a h1 tag", () => {
    expect(title).to.have.tagName('h1')
  })
})
