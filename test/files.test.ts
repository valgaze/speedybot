import test from "tape";
// import { resolve } from 'fs'
import { $, placeholder} from './../src'

const fakeBot = {framework: {
  options: {
    token: placeholder
  }
}}
const inst = $(fakeBot)
test("setup", function (t) {
  t.end();
});

test("$uperpower, handleExt helper passes through full filename", (t) => {
    const sample = 'a.json'
		const actual = inst.handleExt(sample)
		t.deepEqual(actual, sample);
    t.end();
});

test("$uperpower, handleExt helper generates a file name when given just an extension", (t) => {
  const sample = '.json'
  const actual = inst.handleExt('a.json')
  const result = actual.includes(sample) && actual.length > sample.length
  
  t.equal(result, true);
  t.end();
});

test("$uperpower, handleExt helper generates a file name when given just an extension without a dot", (t) => {
  const sample = '.json'
  const actual = inst.handleExt('.json')
  console.log("#", actual)
  const result = actual.includes(sample) && actual.length > sample.length
  
  t.equal(result, true);
  t.end();
});


test("$uperpower, random name will generate distinct names", (t) => {
  const sample = inst.generateFileName()
  const sample2 = inst.generateFileName()
  t.notEqual(sample, sample2)
  t.end();
});

test("$uperpower context: name ops are inverses of each other", (t) => {
  const key = 'my_key'
  const sample = inst.genContextName(key)
  const sample2 = inst.degenContextName(sample)
  t.equal(key, sample2)
  t.end();
});


test("teardown", function (t) {
  t.end();
});