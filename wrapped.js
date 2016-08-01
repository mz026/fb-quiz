import Firebase from 'firebase'
import { subscriber } from './fb-subscriber'

const host = 'https://luminous-fire-6308.firebaseio.com/'
let getRootRef = ()=> {
  return new Firebase(host)
}

let subscribe = subscriber({ getRootRef })
let channel = subscribe('data')

channel.on('value', (data)=> {
  console.log('on data')
  console.log(data)
})
