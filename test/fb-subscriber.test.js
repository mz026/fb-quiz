import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import sinon from 'sinon'

chai.use(sinonChai)

import { subscriber } from 'fb-subscriber'

describe('FB Subscriber', ()=> {
  let mockRootRef, getRootRef, mockChildRef
  let subscribe

  beforeEach(()=> {
    mockChildRef = {
      on: sinon.spy()
    }

    getRootRef = ()=> mockRootRef
    mockRootRef = {
      child: sinon.stub()
    }
    mockRootRef.child.returns(mockChildRef)

    subscribe = subscriber({ getRootRef })
  })
  it('acts as a function', ()=> {
    expect(typeof subscribe).to.equal('function')
  })

  it('can subscribe to a path', ()=> {
    let onValue = sinon.stub()

    subscribe('data').on('value', onValue)

    expect(mockRootRef.child).to.be.calledWith('data')
  })
  it('registers event name on child ref', ()=> {
    let onValue = sinon.stub()
    subscribe('data').on('value', onValue)
    expect(mockChildRef.on).to.have.been.calledWith('value', sinon.match.func)
  })
})
