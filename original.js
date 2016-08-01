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
