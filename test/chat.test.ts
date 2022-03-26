import test from "ava";
// import { resolve } from 'fs'
import { $, placeholder} from './../src'


const buildBot = (tFunc, roomId='aaa-bbb-ccc-ddd') => {
  return {
    async say(...args) {
      tFunc(args)
      return {
        id: `1234567890_abcdefghijklmopqrstuvwxyz`
      }
    },
    room: {
      id: roomId
    },
    framework: {
    options: {
      token: placeholder
    },
  },
  webex: {
    messages: {
      create(...args) {
       return  tFunc(args)
      }
    }
  }}
}

test("$(bot).clearScreen", (t) => {
  const sample = {
    roomId: 'aaa-bbb-ccc-ddd',
    markdown: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
    text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
  }
  const fBot = buildBot((actual) => {
      t.deepEqual(actual, [sample])
  })
    $(fBot).clearScreen()
})