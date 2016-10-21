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
    let onEvent = sinon.stub()

    subscribe('path').on('event', onEvent)

    expect(mockRootRef.child).to.be.calledWith('path')
  })

  // it('registers event name on child ref', ()=> {
  //   let onEvent = sinon.stub()
  //   subscribe('path').on('value', onEvent)
  //   expect(mockChildRef.on).to.have.been.calledWith('value', sinon.match.func)
  // })

  // it('invokes callback with pure value', ()=> {
  //   let callback
  //   let onEvent = sinon.stub()
  //   mockChildRef.on = (eventName, cb)=> {
  //     callback = cb
  //   }
  //   let snapshot = {
  //     val: ()=> {
  //       return { key: 'val' }
  //     }
  //   }
  //
  //   subscribe('path').on('value', onEvent)
  //   callback(snapshot)
  //
  //   expect(onEvent).to.have.been.calledWith({ key: 'val' })
  // })
})
