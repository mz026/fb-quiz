# Firebase Subscriber

With firebase SDK, normally we would do the following:

```javascript
import Firebase from 'firebase'
const host = 'https://luminous-fire-6308.firebaseio.com/'

let rootRef = new Firebase(host)

let onValue = (snapshot)=> {
  console.log('on value!')
  console.log(snapshot.val())
}
rootRef.child('data').on('value', onValue)

// off
// connection.child('data').off('value', onValue)
```
-------

We'd like add an indirection between our application and firebase SDK, in order to

- abstract `rootRef` and its auth/re-auth
- decouple our application code from firebase sdk

## Usage:

```javascript
import { subscriber } from 'fb-subscriber'

let subscribe = subscriber({ getRootRef })
let channel = subscribe('/the/path')

channel.on('value', (val)=> {
  // no snapshot()
  console.log(val)
})

channel.off()
```

## To try out original firebase SDK:

```
babel-node original.js
```
