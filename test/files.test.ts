import test from "ava";
// import { resolve } from 'fs'
import { $, placeholder} from './../src'

const fakeBot = {framework: {
  options: {
    token: placeholder
  }
}}
const inst = $(fakeBot)

test("$uperpower, handleExt helper passes through full filename", (t) => {
    const sample = 'a.json'
		const actual = inst.handleExt(sample)
		t.deepEqual(actual, sample);
});

test("$uperpower, handleExt helper generates a file name when given just an extension", (t) => {
  const sample = '.json'
  const actual = inst.handleExt('a.json')
  const result = actual.includes(sample) && actual.length > sample.length
  
  t.deepEqual(result, true);
});

test("$uperpower, handleExt helper generates a file name when given just an extension without a dot", (t) => {
  const sample = '.json'
  const actual = inst.handleExt('.json')
  console.log("#", actual)
  const result = actual.includes(sample) && actual.length > sample.length
  
  t.deepEqual(result, true);
});


test("$uperpower, random name will generate distinct names", (t) => {
  const sample = inst.generateFileName()
  const sample2 = inst.generateFileName()
  t.notDeepEqual(sample, sample2)
});

test("$uperpower context: name ops are inverses of each other", (t) => {
  const key = 'my_key'
  const sample = inst.genContextName(key)
  const sample2 = inst.degenContextName(sample)
  t.deepEqual(key, sample2)
});