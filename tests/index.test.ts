import test from 'ava'
import { SplitElementsIntoArrayLength, SplitElementsIntoSubArrayLength } from '../sources/index.js'

test('SplitElementsIntoArrayLength 16 elements with 4 counts', T => {
  const ArrayPara = [
    'washable', 'kindness', 'sprain', 'undrafted',
    'turbulent', 'unjustly', 'spiritual', 'playroom',
    'subscribe', 'snowplow', 'pruning', 'upriver',
    'stew', 'overstep', 'motocross', 'ambiance'
  ]
  const Options = { Count: 4 }
  const Result = SplitElementsIntoArrayLength(ArrayPara, Options)
  T.deepEqual(Result, [
    ['washable', 'kindness', 'sprain', 'undrafted'],
    ['turbulent', 'unjustly', 'spiritual', 'playroom'],
    [ 'subscribe', 'snowplow', 'pruning', 'upriver'],
    ['stew', 'overstep', 'motocross', 'ambiance']
  ])
})

test('SplitElementsIntoArrayLength 19 elements with 4 counts', T => {
  const ArrayPara = [
    'washable', 'kindness', 'sprain', 'undrafted',
    'turbulent', 'unjustly', 'spiritual', 'playroom',
    'subscribe', 'snowplow', 'pruning', 'upriver',
    'stew', 'overstep', 'motocross', 'ambiance',
    'duchess', 'fancied', 'ladybug'
  ]
  const Options = { Count: 4 }
  const Result = SplitElementsIntoArrayLength(ArrayPara, Options)
  T.deepEqual(Result, [
    [ 'washable', 'kindness', 'sprain', 'undrafted', 'duchess' ],
    [ 'turbulent', 'unjustly', 'spiritual', 'playroom', 'fancied' ],
    [ 'subscribe', 'snowplow', 'pruning', 'upriver', 'ladybug' ],
    [ 'stew', 'overstep', 'motocross', 'ambiance' ]
  ])
})

test('SplitElementsIntoSubArrayLength 16 elements with 5 counts', T => {
  const ArrayPara = [
    'washable', 'kindness', 'sprain', 'undrafted',
    'turbulent', 'unjustly', 'spiritual', 'playroom',
    'subscribe', 'snowplow', 'pruning', 'upriver',
    'stew', 'overstep', 'motocross', 'ambiance'
  ]
  const Options = { Count: 5 }
  const Result = SplitElementsIntoSubArrayLength(ArrayPara, Options)
  T.deepEqual(Result, [
    ['washable', 'kindness', 'sprain', 'undrafted', 'turbulent'],
    ['unjustly', 'spiritual', 'playroom', 'subscribe', 'snowplow'],
    ['pruning', 'upriver', 'stew', 'overstep', 'motocross'],
    ['ambiance']
  ])
})

test('SplitElementsIntoSubArrayLength 15 elements with 5 counts', T => {
  const ArrayPara = [
    'washable', 'kindness', 'sprain', 'undrafted',
    'turbulent', 'unjustly', 'spiritual', 'playroom',
    'subscribe', 'snowplow', 'pruning', 'upriver',
    'stew', 'overstep', 'motocross'
  ]
  const Options = { Count: 5 }
  const Result = SplitElementsIntoSubArrayLength(ArrayPara, Options)
  T.deepEqual(Result, [
    ['washable', 'kindness', 'sprain', 'undrafted', 'turbulent'],
    ['unjustly', 'spiritual', 'playroom', 'subscribe', 'snowplow'],
    ['pruning', 'upriver', 'stew', 'overstep', 'motocross']
  ])
})