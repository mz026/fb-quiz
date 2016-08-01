import { expect } from 'chai'
import sinon from 'sinon'

import { subscriber } from 'fb-subscriber'

describe('FB Subscriber', ()=> {
  it('takes a getRootRef to init', ()=> {
    let getRootRef = ()=> {}
    let subscribe = subscriber({ getRootRef })

    expect(typeof subscribe).to.equal('function')
  })
})
