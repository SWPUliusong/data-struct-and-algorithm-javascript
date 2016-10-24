'use strict'

const algo = require("./algorithm")
const assert = require("assert")

let deep = assert.deepEqual.bind(assert)

deep(algo.bubble([5,2,3,4,1]), [1,2,3,4,5], 'bubble: ' + algo.bubble([5,2,3,4,1]))
deep(algo.betterBubble([5,2,3,4,1]), [1,2,3,4,5], 'betterBubble: ' + algo.betterBubble([5,2,3,4,1]))
deep(algo.select([5,2,3,4,1]), [1,2,3,4,5], 'select: ' + algo.select([5,2,3,4,1]))
deep(algo.insert([5,2,3,4,1]), [1,2,3,4,5], 'insert: ' + algo.insert([5,2,3,4,1]))
deep(algo.mergeRec([5,2,3,4,1]), [1,2,3,4,5], 'mergeRec: ' + algo.mergeRec([5,2,3,4,1]))
deep(algo.quick([5,2,3,4,1]), [1,2,3,4,5], 'quick: ' + algo.quick([5,2,3,4,1]))
deep(algo.bucket([5,2,3,2,1]), [1,2,2,3,5], 'bucket: ' + algo.bucket([5,2,3,2,1]))
