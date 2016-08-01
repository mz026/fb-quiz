import Firebase from 'firebase'

let subscriber = ({ getRootRef })=> {
  let rootRef = getRootRef()

  return (path)=> {
    return channel({ path, rootRef })
  }
}

let channel = ({ path, rootRef })=> {
  return {
    on: (eventName, handler)=> {
      let ref = rootRef.child(path)

      //TODO
    }
  }
}

export { subscriber }
